import React, { memo } from "react";
import { prepareTable } from "../../dataHelpers";
import AgGrid from "./AgGrid";
import ReactTableComponent from "./ReactTableComponent";

const Tables = ({ data, tableType, kpiPrimary, selectBrand }) => {
  const tableData = prepareTable(data, tableType, kpiPrimary);

  if (tableType === "ag") {
    return <AgGrid tableData={tableData} selectBrand={selectBrand} />;
  } else if (tableType === "reacttable") {
    return (
      <ReactTableComponent tableData={tableData} selectBrand={selectBrand} />
    );
  } else {
    return <div>Another Grids Will be soon here!</div>;
  }
};

export default memo(Tables);
