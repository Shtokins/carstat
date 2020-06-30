import React, { memo } from "react";
import { prepareTable } from "../../dataHelpers";
import AgGrid from "./AgGrid";
import ReactTableComponent from "./ReactTableComponent";
import AntdTable from "./AntdTable";

const Tables = ({
  data,
  tableType,
  kpiPrimary,
  selectBrand,
  selectedBrand
}) => {
  const tableData = prepareTable(data, tableType, kpiPrimary);

  if (tableType === "ag") {
    return <AgGrid tableData={tableData} selectBrand={selectBrand} />;
  } else if (tableType === "reacttable") {
    return (
      <ReactTableComponent tableData={tableData} selectBrand={selectBrand} />
    );
  } else {
    return (
      <AntdTable
        tableData={tableData}
        selectBrand={selectBrand}
        selectedBrand={selectedBrand}
      />
    );
  }
};

export default memo(Tables);
