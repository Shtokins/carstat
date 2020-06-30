import React, { memo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { debounce } from "throttle-debounce";

const AgGrid = ({ tableData, selectBrand }) => {
  const onSelectionChanged = params => {
    var selectedRows = params.api.getSelectedRows();
    const { brand } = selectedRows[0];
    selectBrand(brand);
  };

  const onGridReady = params => {
    params.api.sizeColumnsToFit();
  };

  const onResize = debounce(300, params => {
    params.api.sizeColumnsToFit();
  });

  return (
    <div className="ag-theme-balham" style={{ height: "100%", width: "100%" }}>
      <AgGridReact
        columnDefs={tableData.columnDefs}
        rowData={tableData.rowData}
        defaultColDef={{
          sortable: true,
          resizable: true
        }}
        rowSelection="single"
        onSelectionChanged={onSelectionChanged}
        onGridReady={onGridReady}
        onGridSizeChanged={onResize}
      ></AgGridReact>
    </div>
  );
};

export default memo(AgGrid);
