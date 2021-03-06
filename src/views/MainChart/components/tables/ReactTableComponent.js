/* eslint-disable react/jsx-key */
import React, { memo } from "react";
import { useTable, useSortBy } from "react-table";
import styled from "styled-components";

function Table({ columns, data, onRowClick }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} onClick={() => onRowClick(row)}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const ReactTableComponent = ({ tableData: { columns, data }, selectBrand }) => {
  const onRowClick = row => {
    const { brand } = row.values;
    selectBrand(brand);
  };
  return (
    <Styles>
      <Table
        data={data}
        columns={columns}
        showPagination={false}
        showPageSizeOptions={false}
        className="-striped -highlight"
        onRowClick={onRowClick}
      />
    </Styles>
  );
};

export default memo(ReactTableComponent);

const Styles = styled.div`
  padding: 1rem;
  overflow-y: auto;
  height: 100%;
  width: 100%;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      cursor: pointer;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
