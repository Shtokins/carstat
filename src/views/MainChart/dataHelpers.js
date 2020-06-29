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
  }
};
