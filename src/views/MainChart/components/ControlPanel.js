import React, { memo, useContext } from "react";
import { ControlPanelWrapper } from "../styles";
import { Radio, Select, Checkbox } from "antd";
import { CarsApiContext } from "../../../context/carsApi/carsApiContext";
import { UIContext } from "../../../context/ui/UIContext";
import { getYearsOptions } from "../chartHelpers";
import UIRadioButton from "./UIs/UIRadioButton";
import UIRadioButtonGridType from "./UIs/UIRadioButtonGridType";
import UIRadioGroup from "../components/UIs/UIRadioGroup";

const ControlPanel = ({
  setBlockMode,
  blockMode,
  chartSettings,
  setCharsSettings,
  tableType,
  setTableType
}) => {
  const { carsApiState } = useContext(CarsApiContext);
  const { uiName } = useContext(UIContext);
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
      <div className="controlUnit">
        <UIRadioButton
          value={blockMode}
          onChange={setBlockMode}
          uiName={uiName}
        />
      </div>

      {blockMode === "bar" && (
        <Select
          onChange={year => setSetting("yearPrimary", year)}
          options={yearsOptions}
          value={yearPrimary}
        />
      )}
      <div className="controlUnit">
        <UIRadioGroup
          value={kpiPrimary}
          onChange={key => setSetting("kpiPrimary", key)}
          uiName={uiName}
        />
      </div>
      {/* <Radio.Group
        onChange={e => setSetting("kpiPrimary", e.target.value)}
        value={kpiPrimary}
      >
        <Radio value="sales">Sales</Radio>
        <Radio value="revenue">Revenue</Radio>
      </Radio.Group> */}
      {blockMode === "bar" && (
        <Checkbox
          checked={showAdditional}
          onChange={e => setSetting("showAdditional", e.target.checked)}
        >
          Additional KPI
        </Checkbox>
      )}
      {blockMode === "table" && (
        <div className="controlUnit">
          <UIRadioButtonGridType
            value={tableType}
            onChange={setTableType}
            uiName={uiName}
          />
        </div>
      )}
    </ControlPanelWrapper>
  );
};

export default memo(ControlPanel);
