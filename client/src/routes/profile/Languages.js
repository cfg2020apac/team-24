import React, { useState } from "react";

import { Form, Input, Button, Space, Select } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const areas = [
  { label: "Beijing", value: "Beijing" },
  { label: "Shanghai", value: "Shanghai" },
];

const sights = {
  Beijing: ["Tiananmen", "Great Wall"],
  Shanghai: ["Oriental Pearl", "The Bund"],
};
const { Option } = Select;
const Languages = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };

  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.List name="users">
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field) => (
                <Space
                  key={field.key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="start"
                >
                  <Form.Item
                    name="select"
                    label="Languages"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please select a language!",
                      },
                    ]}
                  >
                    <Select placeholder="Please select a lanuage">
                      <Option value="English">English</Option>
                      <Option value="Chinese">Chinese</Option>
                      <Option value="Russian">Russian</Option>
                      <Option value="Spanish">Spanish</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="select"
                    label="Proficiency"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please select your proficiency!",
                      },
                    ]}
                  >
                    <Select placeholder="Please select a proficiency">
                      <Option value="Elementary ">Elementary </Option>
                      <Option value="Intermediate">Intermediate </Option>
                      <Option value="Fluent">Fluent</Option>
                      <Option value="Native ">Native </Option>
                    </Select>
                  </Form.Item>

                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  block
                >
                  <PlusOutlined /> Add field
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
};

// ReactDOM.render(<Demo />, mountNode);
export default Languages;
