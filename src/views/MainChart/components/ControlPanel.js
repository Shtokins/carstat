import React, { memo, useContext } from "react";
import { ControlPanelWrapper } from "../styles";
import { Radio, Select } from "antd";
import { Icon as FaIcon } from "react-fa";
import { CarsApiContext } from "../../../context/carsApi/carsApiContext";
import { getYearsOptions } from "../helpers";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ControlPanel = ({
  setBlockMode,
  blockMode,
  chartSettings,
  setCharsSettings
}) => {
  const { _, carsApiState } = useContext(CarsApiContext);
  const yearsOptions = getYearsOptions(carsApiState);
  const setSetting = (setting, value) => {
    console.log("setSetting: ", setting, value);
    const changes = { [setting]: value };
    if (setting === "kpiPrimary") {
      changes.kpiAdditional = value === "sales" ? "revenue" : "sales";
    }
    if (setting === "kpiAdditional") {
      changes.kpiPrimary = value === "sales" ? "revenue" : "sales";
    }
    setCharsSettings({ ...chartSettings, ...changes });
  };

  const {
    yearPrimary,
    kpiPrimary,
    kpiAdditional,
    showAdditional
  } = chartSettings;

  return (
    <ControlPanelWrapper>
      <RadioGroup
        value={blockMode}
        onChange={e => setBlockMode(e.target.value)}
      >
        <RadioButton value="bar">
          <FaIcon name="chart-bar" /> Bar
        </RadioButton>
        <RadioButton value="line">
          <FaIcon name="chart-line" /> Line
        </RadioButton>
        <RadioButton value="table">
          <FaIcon name="table" /> Table
        </RadioButton>
      </RadioGroup>
      <Select
        style={{ width: 120 }}
        onChange={year => setSetting("yearPrimary", year)}
        options={yearsOptions}
        value={yearPrimary}
      />
    </ControlPanelWrapper>
  );
};

export default memo(ControlPanel);
