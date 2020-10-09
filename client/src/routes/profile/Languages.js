import React, { useState } from "react";

import { Select } from "antd";

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const Languages = ({ name, id }) => {
  return (
    <>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="Chinese">
          <div className="demo-option-label-item">
            <span role="img" aria-label="Chinese">
              Chinese
            </span>
            {/* Chinese */}
          </div>
        </Option>
        <Option value="usa" label="English">
          <div className="demo-option-label-item">
            <span role="img" aria-label="English">
              English
            </span>
            {/* English */}
          </div>
        </Option>
        <Option value="japan" label="Japanese">
          <div className="demo-option-label-item">
            <span role="img" aria-label="Japanese">
              Japanese
            </span>
            {/* Japanese */}
          </div>
        </Option>
        <Option value="korean" label="korean">
          <div className="demo-option-label-item">
            <span role="img" aria-label="korean">
              korean
            </span>
            {/* korean */}
          </div>
        </Option>
      </Select>
    </>
  );
};

// ReactDOM.render(<Demo />, mountNode);
export default Languages;
