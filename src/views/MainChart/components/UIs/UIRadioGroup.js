import React, { memo } from "react";
import { Radio as AntdRadio } from "antd";
import { Radio as SuiRadio, Divider } from "semantic-ui-react";
import {
  BarChartOutlined,
  LineChartOutlined,
  BorderlessTableOutlined
} from "@ant-design/icons";
import TimelineOutlinedIcon from "@material-ui/icons/TimelineOutlined";
import EqualizerOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import { Button, Icon as SuiIcon } from "semantic-ui-react";
import { ButtonGroup, Button as MuiButton } from "@material-ui/core";
import AkButton, { ButtonGroup as AkButtonGroup } from "@atlaskit/button";
import GraphBarIcon from "@atlaskit/icon/glyph/graph-bar";
import GraphLineIcon from "@atlaskit/icon/glyph/graph-line";
import TableIcon from "@atlaskit/icon/glyph/table";

const AntdRadioGroup = AntdRadio.Group;

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
              onChange={(_, val) => {
                console.log(val);
                changeHandler(val.value);
              }}
            />
          </div>
          <div>
            <SuiRadio
              label="Revenue"
              name="radioGroup"
              value="revenue"
              checked={value === "revenue"}
              onChange={(_, val) => {
                console.log(val);
                changeHandler(val.value);
              }}
            />
          </div>
        </>
      );
    case "material":
      return;
    case "atlassian":
      return;
    default:
      return null;
  }
};

export default memo(UIRadioGroup);
