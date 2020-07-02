import React, { memo } from "react";
import { Select as AntdSelect } from "antd";
import { Dropdown as SuiDropdown } from "semantic-ui-react";
import { prepareDDOptions } from "../../dataHelpers";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import AkSelect from "@atlaskit/select";

const UISelect = ({ value, yearsOptions, onChange, uiName }) => {
  const changeHandler = key => onChange(key);
  const options = prepareDDOptions(yearsOptions, uiName);
  switch (uiName) {
    case "antd":
      return (
        <AntdSelect onChange={changeHandler} options={options} value={value} />
      );

    case "semantic":
      return (
        <SuiDropdown
          placeholder="State"
          search
          selection
          value={value}
          options={options}
          onChange={(_, val) => changeHandler(val.value)}
        />
      );

    case "material":
      return (
        <MuiSelect
          value={value}
          onChange={e => changeHandler(e.target.value)}
          className="mui-select"
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </MuiSelect>
      );

    case "atlassian":
      return (
        <AkSelect
          className="ak-select"
          options={options}
          value={options.find(el => el.value === value)}
          onChange={e => changeHandler(e.value)}
        />
      );
    default:
      return null;
  }
};

export default memo(UISelect);
