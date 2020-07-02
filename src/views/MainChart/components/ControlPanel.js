import React, { memo, useContext } from "react";
import { ControlPanelWrapper } from "../styles";
import { Select } from "antd";
import { CarsApiContext } from "../../../context/carsApi/carsApiContext";
import { UIContext } from "../../../context/ui/UIContext";
import { getYearsOptions } from "../chartHelpers";
import UIRadioButton from "./UIs/UIRadioButton";
import UIRadioButtonGridType from "./UIs/UIRadioButtonGridType";
import UIRadioGroup from "../components/UIs/UIRadioGroup";
import UICheckbox from "../components/UIs/UICheckbox";
import UISelect from "../components/UIs/UISelect";

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
        <div className="controlUnit">
          <UISelect
            yearsOptions={yearsOptions}
            onChange={year => setSetting("yearPrimary", year)}
            value={yearPrimary}
            uiName={uiName}
          />
        </div>
      )}
      <div className="controlUnit">
        <UIRadioGroup
          value={kpiPrimary}
          onChange={key => setSetting("kpiPrimary", key)}
          uiName={uiName}
        />
      </div>
      {blockMode === "bar" && (
        <div className="controlUnit">
          <UICheckbox
            checked={showAdditional}
            onChange={key => setSetting("showAdditional", key)}
            uiName={uiName}
          />
        </div>
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
