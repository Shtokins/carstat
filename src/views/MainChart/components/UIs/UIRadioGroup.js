import React, { memo } from "react";
import { Radio as AntdRadio } from "antd";
import { Radio as SuiRadio } from "semantic-ui-react";
import MuiRadio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { RadioGroup as AkRadioGroup } from "@atlaskit/radio";

const AntdRadioGroup = AntdRadio.Group;
const akRadioOptions = [
  { name: "color2", value: "sales", label: "Sales" },
  { name: "color2", value: "revenue", label: "Revenue" }
];
const UIRadioGroup = ({ value, onChange, uiName }) => {
  const changeHandler = key => onChange(key);

  switch (uiName) {
    case "antd":
      return (
        <AntdRadioGroup
          onChange={e => changeHandler(e.target.value)}
          value={value}
        >
          <AntdRadio value="sales">Sales</AntdRadio>
          <AntdRadio value="revenue">Revenue</AntdRadio>
        </AntdRadioGroup>
      );
    case "semantic":
      return (
        <>
          <div>
            <SuiRadio
              label="Sales"
              name="radioGroup"
              value="sales"
              checked={value === "sales"}
              onChange={(_, val) => changeHandler(val.value)}
            />
          </div>
          <div>
            <SuiRadio
              label="Revenue"
              name="radioGroup"
              value="revenue"
              checked={value === "revenue"}
              onChange={(_, val) => changeHandler(val.value)}
            />
          </div>
        </>
      );
    case "material":
      return (
        <>
          <div>
            <FormControlLabel
              control={
                <MuiRadio
                  label="Sales"
                  name="radioGroup1"
                  value="sales"
                  checked={value === "sales"}
                  onChange={e => changeHandler(e.target.value)}
                />
              }
              label="Sales"
            />
          </div>
          <div>
            <FormControlLabel
              control={
                <MuiRadio
                  label="Revenue"
                  name="radioGroup1"
                  value="revenue"
                  checked={value === "revenue"}
                  onChange={e => changeHandler(e.target.value)}
                />
              }
              label="Revenue"
            />
          </div>
        </>
      );
    case "atlassian":
      return (
        <AkRadioGroup
          value={value}
          options={akRadioOptions}
          onChange={e => changeHandler(e.currentTarget.value)}
        />
      );
    default:
      return null;
  }
};

export default memo(UIRadioGroup);
