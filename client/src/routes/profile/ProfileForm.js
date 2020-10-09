import React, { useState } from "react";
import { Form, Input, Button, Radio, Select, Cascader, Switch } from "antd";
const { Option } = Select;
const ProfileForm = (user) => {
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
        <Form.Item label="Interests">
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="select one or more interest"
            defaultValue={["china"]}
            optionLabelProp="label"
          >
            <Option value="Reading" label="Reading">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Reading">
                  {/* 🇨🇳 */}
                </span>
                Reading
              </div>
            </Option>
            <Option value="usa" label="USA">
              <div className="demo-option-label-item">
                <span role="img" aria-label="USA">
                  🇺🇸
                </span>
                USA (美国)
              </div>
            </Option>
            <Option value="japan" label="Japan">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Japan">
                  🇯🇵
                </span>
                Japan (日本)
              </div>
            </Option>
            <Option value="korea" label="Korea">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Korea">
                  🇰🇷
                </span>
                Korea (韩国)
              </div>
            </Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
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
