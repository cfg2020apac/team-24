import React, { useState } from "react";
import { Modal, Button, Card, Avatar } from "antd";
import PhotoUplaod from "./PhotoUpload";
import { UserOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ProfileCard = ({ name, id }) => {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(undefined);
  const handleUpload = () => {
    setVisible(false);
  };
  return (
    <>
      <Card
        hoverable
        style={{ width: 200 }}
        cover={
          !imgSrc ? (
            // <img
            //   alt="Profile Picture"
            //   src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            //   onClick={() => setVisible(true)}
            // />
            <Avatar
              shape="square"
              size={200}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              onClick={() => setVisible(true)}
            />
          ) : (
            // <Avatar
            //   shape="square"
            //   size={200}
            //   icon={<UserOutlined />}
            //   onClick={() => setVisible(true)}
            // />
            // <img
            //   alt="Profile Picture"
            //   src={require("../../assets/img/profile_pic.jpeg")}
            //   onClick={() => setVisible(true)}
            // />
            <Avatar
              shape="square"
              size={200}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              onClick={() => setVisible(true)}
            />
          )
        }
      >
        {/* <Meta title={name} /> */}
      </Card>
      <Modal
        title="Update your profile picture"
        visible={visible}
        onOk={handleUpload}
        onCancel={() => setVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setVisible(false)}>
            Cancel
          </Button>,
          <Button key="upload" type="primary" onClick={handleUpload}>
            Upload
          </Button>,
        ]}
      >
        <PhotoUplaod />
      </Modal>
    </>
  );
};

export default ProfileCard;
