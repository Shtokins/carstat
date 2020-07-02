import React, { memo } from "react";
import { Radio } from "antd";
import { Button } from "semantic-ui-react";
import { ButtonGroup, Button as MuiButton } from "@material-ui/core";
import AkButton, { ButtonGroup as AkButtonGroup } from "@atlaskit/button";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const UIRadioButtonGridType = ({ value, onChange, uiName }) => {
  const clickHandler = key => onChange(key);
  switch (uiName) {
    case "antd":
      return (
        <RadioGroup value={value} onChange={e => clickHandler(e.target.value)}>
          <RadioButton value="ag">ag-Grid</RadioButton>
          <RadioButton value="reacttable">React-Table</RadioButton>
          <RadioButton value="table">Ant Design Grid</RadioButton>
        </RadioGroup>
      );
    case "semantic":
      return (
        <Button.Group color="blue" value={value}>
          <Button onClick={() => clickHandler("ag")} active={value === "ag"}>
            ag-Grid
          </Button>
          <Button.Or />
          <Button
            onClick={() => clickHandler("reacttable")}
            active={value === "reacttable"}
          >
            React-Table
          </Button>
          <Button.Or />
          <Button
            onClick={() => clickHandler("antd")}
            active={value === "antd"}
          >
            Ant Design Grid
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
          <MuiButton onClick={() => clickHandler("ag")}>ag-Grid</MuiButton>
          <MuiButton onClick={() => clickHandler("reacttable")}>
            React-Table
          </MuiButton>
          <MuiButton onClick={() => clickHandler("antd")}>
            Ant Design Grid
          </MuiButton>
        </ButtonGroup>
      );
    case "atlassian":
      return (
        <AkButtonGroup appearance="primary">
          <AkButton
            onClick={() => clickHandler("ag")}
            isSelected={value === "ag"}
          >
            ag-Grid
          </AkButton>
          <AkButton
            onClick={() => clickHandler("reacttable")}
            isSelected={value === "reacttable"}
          >
            React-Table
          </AkButton>
          <AkButton
            onClick={() => clickHandler("antd")}
            isSelected={value === "antd"}
          >
            Ant Design Grid
          </AkButton>
        </AkButtonGroup>
      );
    default:
      return null;
  }
};

export default memo(UIRadioButtonGridType);
