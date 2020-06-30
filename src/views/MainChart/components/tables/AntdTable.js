import React, { memo } from "react";
import { Table } from "antd";

const AntdTable = ({
  tableData: { columns, dataSource },
  selectBrand,
  selectedBrand
}) => {
  const onSelectionChanged = row => {
    const { brand } = row;
    selectBrand(brand);
  };
  return (
    <div className="antd-grid-container">
      <Table
        columns={columns}
        dataSource={dataSource}
        tableLayout="auto"
        bordered
        pagination={false}
        size="middle"
        rowSelection={{
          onSelect: onSelectionChanged,
          type: "radio",
          selectedRowKeys: [selectedBrand]
        }}
      />
    </div>
  );
};

export default memo(AntdTable);
