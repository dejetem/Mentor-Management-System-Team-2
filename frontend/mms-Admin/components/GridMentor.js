import React from 'react';
import { Row, Col, Avatar } from 'antd';
import Icon from "./Icon";
import styles from "./componentStyles/gridmentor.module.css"
import DeleteMentor from './DeleteMentor';

function GridMentor() {
  const [isDeleteOpen, setIsDeleteOpen] = React.useState(false);
  const [mentorId, setMentorId] = React.useState(null);
  const handleClickDelete = (itemId) => {
    // e.preventDefault();
    setIsDeleteOpen(true);
    setMentorId(itemId)
  };
  return (
    <div className={styles.container}>
        <Row gutter={[18, 16]}>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2} onClick={()=> handleClickDelete(itemId)}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className={styles.gutter_box}>
              <div className={styles.gutter_box_container}>
                <div className={styles.gutter_box_avatar}>
                  <Avatar
                    size={73}
                    icon={
                    <Icon
                    icon={"/assets/images/admin_avatar.png"}
                    width={"73px"}
                    height={"73px"}
                    />
                    }
                  />
                </div>
                <div className={styles.gutter_box_main}>
                  <div className={styles.gutter_box_main_title}>
                    <h1 className={styles.gutter_box_main_header}>Alison Davis</h1>
                    <h2 className={styles.gutter_box_main_p}>Program Assistant, Andela, He/him</h2>
                    <span className={styles.gutter_box_main_span1}>PROGRAM ASST.</span>  <span className={styles.gutter_box_main_span2}>MENTOR-GADS.</span>
                  </div>
                  <div className={styles.gutter_box_main_icon}>
                    <div className={styles.gutter_box_main_icon1}>
                        <Icon 
                        icon={"/assets/images/circle-chat.svg"}
                        width={"20px"}
                        height={"20px"}
                    />
                    </div>
                    <div className={styles.gutter_box_main_icon2}>
                     <Icon 
                        icon={"/assets/images/trash-delete.svg"}
                        width={"20px"}
                        height={"20px"}
                     />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col> 
       </Row>
       {isDeleteOpen && (
        <DeleteMentor
          image={"/assets/images/deleteTask.svg"}
          message={"Mentor Deleted Successfully"}
          width={"400px"}
          height={"200px"}
          isDeleteOpen={isDeleteOpen}
          setIsDeleteOpen={setIsDeleteOpen}
          mentorId={mentorId}
        />
      )}
    </div>
  )
}

export default GridMentor