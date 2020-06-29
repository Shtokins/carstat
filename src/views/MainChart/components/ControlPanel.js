import React, { memo, useContext } from "react";
import { ControlPanelWrapper } from "../styles";
import { Radio, Select, Checkbox } from "antd";
import { Icon as FaIcon } from "react-fa";
import { CarsApiContext } from "../../../context/carsApi/carsApiContext";
import { getYearsOptions } from "../chartHelpers";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const ControlPanel = ({
  setBlockMode,
  blockMode,
  chartSettings,
  setCharsSettings,
  tableType,
  setTableType
}) => {
  const { carsApiState } = useContext(CarsApiContext);
  const yearsOptions = getYearsOptions(carsApiState);
  const setSetting = (setting, value) => {
    const changes = { [setting]: value };
    if (setting === "kpiPrimary") {
      changes.kpiAdditional = value === "sales" ? "revenue" : "sales";
    }
    if (setting === "kpiAdditional") {
      changes.kpiPrimary = value === "sales" ? "revenue" : "sales";
    }
    setCharsSettings({ ...chartSettings, ...changes });
  };

  const { yearPrimary, kpiPrimary, showAdditional } = chartSettings;

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
      {blockMode !== "table" && (
        <Select
          // style={{ width: 120 }}
          onChange={year => setSetting("yearPrimary", year)}
          options={yearsOptions}
          value={yearPrimary}
        />
      )}
      <Radio.Group
        onChange={e => setSetting("kpiPrimary", e.target.value)}
        value={kpiPrimary}
      >
        <Radio value="sales">Sales</Radio>
        <Radio value="revenue">Revenue</Radio>
      </Radio.Group>
      {blockMode === "bar" && (
        <Checkbox
          checked={showAdditional}
          onChange={e => setSetting("showAdditional", e.target.checked)}
        >
          Additional KPI
        </Checkbox>
      )}
      {blockMode === "table" && (
        <RadioGroup
          value={tableType}
          onChange={e => setTableType(e.target.value)}
        >
          <RadioButton value="ag">ag-Grid</RadioButton>
          <RadioButton value="reacttable">React-Table</RadioButton>
          <RadioButton value="antd">Ant Design Grid</RadioButton>
        </RadioGroup>
      )}
    </ControlPanelWrapper>
  );
};

export default memo(ControlPanel);
