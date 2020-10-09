import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";

const ProfileForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Prefered Location">
          <Cascader
            options={[
              {
                value: "Hong Kong",
                label: "Hong Kong",
                children: [
                  {
                    value: "Islands",
                    label: "Islands",
                  },
                  {
                    value: "Kwai Tsing",
                    label: "Kwai Tsing",
                  },
                  {
                    value: "North",
                    label: "North",
                  },
                  {
                    value: "Sai Kung",
                    label: "Sai Kung",
                  },
                  {
                    value: "Sha Tin",
                    label: "Sha Tin",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Auto Matching">
          <Switch />
        </Form.Item>
      </Form>
    </>
  );
};

// ReactDOM.render(<FormSizeDemo />, mountNode);

export default ProfileForm;
