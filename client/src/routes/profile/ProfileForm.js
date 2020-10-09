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
            defaultValue={["Reading"]}
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
            <Option value="uSwimmingsa" label="Swimming">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Swimming"></span>
                Swimming
              </div>
            </Option>
            <Option value="Music" label="Music">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Music"></span>
                Music
              </div>
            </Option>
            <Option value="Movie" label="Movie">
              <div className="demo-option-label-item">
                <span role="img" aria-label="Movie"></span>
                Movie
              </div>
            </Option>
          </Select>
        </Form.Item>
        <Form.Item label="Prefered Time">
          <Select>
            <Select.Option value="Weekdays">Weekdays</Select.Option>
            <Select.Option value="Weekends">Weekends</Select.Option>
            <Select.Option value="Anytime">Anytime</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Indoor/Outdoor">
          <Select>
            <Select.Option value="Weekdays">Indoor</Select.Option>
            <Select.Option value="Outdoor">Outdoor</Select.Option>
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
        <Form.Item name={["user", "introduction"]} label="Past Experience">
          <Input.TextArea />
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
