import React, { memo } from "react";
import { Checkbox as AntdCheckbox } from "antd";
import { Checkbox as SuiCheckbox } from "semantic-ui-react";
import MuiCheckbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Checkbox as AkCheckbox } from "@atlaskit/checkbox";

const UICheckbox = ({ checked, onChange, uiName }) => {
  const changeHandler = key => onChange(key);
  const label = "Additional KPI";
  switch (uiName) {
    case "antd":
      return (
        <AntdCheckbox
          checked={checked}
          onChange={e => changeHandler(e.target.checked)}
        >
          {label}
        </AntdCheckbox>
      );
    case "semantic":
      return (
        <SuiCheckbox
          label={label}
          checked={checked}
          onChange={e => changeHandler(e.target.checked)}
        />
      );
    case "material":
      return (
        <FormControlLabel
          control={
            <MuiCheckbox
              checked={checked}
              onChange={e => changeHandler(e.target.checked)}
            />
          }
          label={label}
        />
      );
    case "atlassian":
      return (
        <AkCheckbox
          isChecked={checked}
          onChange={e => changeHandler(e.target.checked)}
          label={label}
        />
      );
    default:
      return null;
  }
};

export default memo(UICheckbox);
