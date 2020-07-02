import React, { memo } from "react";
import { Radio } from "antd";
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

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const UIRadioButton = ({ value, onChange, uiName }) => {
  const clickHandler = key => onChange(key);

  switch (uiName) {
    case "antd":
      return (
        <RadioGroup value={value} onChange={e => clickHandler(e.target.value)}>
          <RadioButton value="bar">
            <BarChartOutlined />
            Bar
          </RadioButton>
          <RadioButton value="line">
            <LineChartOutlined />
            Line
          </RadioButton>
          <RadioButton value="table">
            <BorderlessTableOutlined />
            Table
          </RadioButton>
        </RadioGroup>
      );
    case "semantic":
      return (
        <Button.Group color="blue" value={value} size="small">
          <Button onClick={() => clickHandler("bar")} active={value === "bar"}>
            <SuiIcon name="chart bar" />
            Bar
          </Button>
          <Button.Or />
          <Button
            onClick={() => clickHandler("line")}
            active={value === "line"}
          >
            <SuiIcon name="chart line" />
            Line
          </Button>
          <Button.Or />
          <Button
            onClick={() => clickHandler("table")}
            active={value === "table"}
          >
            <SuiIcon name="table" />
            Table
          </Button>
        </Button.Group>
      );
    case "material":
      return (
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          value={value}
        >
          <MuiButton
            startIcon={<EqualizerOutlinedIcon />}
            onClick={() => clickHandler("bar")}
          >
            Bar
          </MuiButton>
          <MuiButton
            startIcon={<TimelineOutlinedIcon />}
            onClick={() => clickHandler("line")}
          >
            Line
          </MuiButton>
          <MuiButton
            startIcon={<TableChartOutlinedIcon />}
            onClick={() => clickHandler("table")}
          >
            Table
          </MuiButton>
        </ButtonGroup>
      );
    case "atlassian":
      return (
        <AkButtonGroup appearance="primary">
          <AkButton
            onClick={() => clickHandler("bar")}
            iconBefore={<GraphBarIcon />}
            isSelected={value === "bar"}
          >
            Bar
          </AkButton>
          <AkButton
            onClick={() => clickHandler("line")}
            iconBefore={<GraphLineIcon />}
            isSelected={value === "line"}
          >
            Line
          </AkButton>
          <AkButton
            onClick={() => clickHandler("table")}
            iconBefore={<TableIcon />}
            isSelected={value === "table"}
          >
            Table
          </AkButton>
        </AkButtonGroup>
      );
    default:
      return null;
  }
};

export default memo(UIRadioButton);
