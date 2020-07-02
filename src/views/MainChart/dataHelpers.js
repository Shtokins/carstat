export const prepareTable = (data, tableType, kpiPrimary) => {
  if (tableType === "ag") {
    let columnDefs = [{ headerName: "Brand", field: "brand" }];
    const rowData = [];
    data.forEach((company, index) => {
      if (!index) {
        columnDefs = columnDefs.concat(
          Object.keys(company.sales).map(year => ({
            headerName: year,
            field: year
          }))
        );
      }
      const targetKpi = company[kpiPrimary];
      const newRow = { brand: company.brand };

      Object.keys(targetKpi).forEach(year => (newRow[year] = targetKpi[year]));
      rowData.push(newRow);
    });
    return { columnDefs, rowData };
  } else if (tableType === "reacttable") {
    let columns = [{ sortable: true, Header: "Brand", accessor: "brand" }];
    const rowData = [];
    data.forEach((company, index) => {
      if (!index) {
        columns = columns.concat(
          Object.keys(company.sales).map(year => ({
            sortable: true,
            Header: year,
            accessor: year
          }))
        );
      }
      const targetKpi = company[kpiPrimary];
      const newRow = { brand: company.brand };

      Object.keys(targetKpi).forEach(year => (newRow[year] = targetKpi[year]));
      rowData.push(newRow);
    });
    return { columns, data: rowData };
  } else {
    let columns = [{ title: "Brand", dataIndex: "brand", key: "001" }];
    const dataSource = [];
    data.forEach((company, index) => {
      if (!index) {
        columns = columns.concat(
          Object.keys(company.sales).map((year, colindex) => ({
            title: year,
            dataIndex: year,
            key: year + colindex
          }))
        );
      }
      const targetKpi = company[kpiPrimary];
      const newRow = { brand: company.brand };

      Object.keys(targetKpi).forEach(year => (newRow[year] = targetKpi[year]));
      newRow.key = company.brand;
      dataSource.push(newRow);
    });
    return { columns, dataSource };
  }
};

export const prepareDDOptions = (options, ui) => {
  switch (ui) {
    case "antd":
      return options;
    case "material":
      return options;
    case "semantic":
      return options.map(({ value }) => ({ key: value, value, text: value }));
    case "atlassian":
      return options;
    default:
      return options;
  }
};
