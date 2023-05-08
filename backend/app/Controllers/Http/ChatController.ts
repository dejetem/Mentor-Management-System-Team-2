import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pusher from 'pusher'
import Env from '@ioc:Adonis/Core/Env'
import Message from 'App/Models/Message'
import { DateTime } from 'luxon'
import { schema } from '@ioc:Adonis/Core/Validator'

export const pusher = new Pusher({
  appId: Env.get('PUSHER_APP_ID'),
  key: Env.get('PUSHER_APP_KEY'),
  secret: Env.get('PUSHER_APP_SECRET'),
  cluster: Env.get('PUSHER_APP_CLUSTER'),
  useTLS: true,
})

export default class ChatController {
  async authChatChannel({ auth, response, request }: HttpContextContract) {
    try {
      const user = auth.user
      if (!user) {
        return response.unauthorized({ error: 'You must be logged in to chat' })
      }

      const { channelName, socketId } = request.all()
      const presenceData = {
        user_id: user.id.toString(),
        user_info: {
          name: user.firstName,
        },
      }
      const authUser = pusher.authorizeChannel(socketId, channelName, presenceData)

      return { channelName, authUser }
    } catch (error) {
      return response.badRequest(error)
    }
  }
  async authChatUser({ auth, response, request }: HttpContextContract) {
    try {
      const user = auth.user
      if (!user) {
        return response.unauthorized({ error: 'You must be logged in to chat' })
      }

      const { socketId } = request.all()
      const userData = {
        id: user.id.toString(),
        email: user.email,
        name: user.firstName,
      }
      const authUser = pusher.authenticateUser(socketId, userData)
      return { authUser }
    } catch (error) {
      return response.badRequest(error)
    }
  }
  public async saveChat({ auth, response, request }: HttpContextContract) {
    try {
      const user = auth.user
      if (!user) {
        return response.unauthorized({ error: 'You must be logged in to chat' })
      }
      const payload = await request.validate({
        schema: schema.create({
          imageUrl: schema.file.optional({
            size: '2mb',
            extnames: ['jpg', 'png', 'jpeg'],
          }),
          senderId: schema.number(),
          recipientId: schema.number(),
          message: schema.string.optional(),
          channelName: schema.string(),
        }),
      })

      const postImage = request.file('imageUrl')
      await postImage?.moveToDisk('upload_file')

      pusher.trigger(payload.channelName, payload.channelName, { chat })

      const chat = await Message.create({
        ...payload,
        imageUrl: postImage?.fileName,
        sentAt: DateTime.local(),
      })

      return response.created({ status: 'success', message: 'Chat saved', chat })
    } catch (error) {
      return response.badRequest(error)
    }
  }
  public async getAllChat({ auth, response, params }: HttpContextContract) {
    try {
      const user = auth.user
      if (!user) {
        return response.unauthorized({ error: 'You must be logged in to chat' })
      }
      const { channelName } = params

      const channel = await Message.findBy('channel_name', channelName)

      if (!channel) {
        return response.notFound({
          message: `No conversation for channel '${channelName}'`,
        })
      }

      const messages = await Message.query()
        .where('channel_name', channelName)
        .orderBy('created_at', 'asc')
        .exec()
      return response.ok({
        status: 'success',
        message: 'All Chat fetched successfully',
        messages,
      })
    } catch (error) {
      return response.badRequest(error)
    }
  }
}
