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
  }
};
