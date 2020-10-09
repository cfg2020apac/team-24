import React, { useState } from "react";
import { Modal, Button, Card, Avatar } from "antd";
import { Descriptions } from "antd";

const { Meta } = Card;

const ProfileDetail = ({ name, id }) => {
  return (
    <>
      <div>
        {" "}
        <Descriptions title="User Info">
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
};

export default ProfileDetail;