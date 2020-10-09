import React, { useState } from "react";
import { Modal, Button, Card, Avatar } from "antd";
import { Descriptions } from "antd";

const { Meta } = Card;

const ProfileDetail = ({ user }) => {
  console.log(user);
  return (
    <>
      <div>
        {" "}
        <Descriptions title="User Info">
          <Descriptions.Item label="Registration Date">
            Z{user.registrationDate}
          </Descriptions.Item>
          <Descriptions.Item label="Date Of Birth">
            {user.dateOfBirth}
          </Descriptions.Item>
          <Descriptions.Item label="Gmail">{user.Gmail}</Descriptions.Item>
          <Descriptions.Item label="Age">{user.Age}</Descriptions.Item>
          <Descriptions.Item label="Gender">{user.Gender}</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
          <Descriptions.Item label="Race">{user.Race}</Descriptions.Item>
          <Descriptions.Item label="Nationality">
            {user.Nationality}
          </Descriptions.Item>
          <Descriptions.Item label="ContactNumber">
            {user.ContactNumber}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
};

export default ProfileDetail;
