import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { COLUMNS } from "./columns";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
import GlobalFilter from "./GlobalFilter";
function TrendingMoviesTable(props) {
  const { tableData } = props;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <div>
      {" "}
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200 "
      >
        <thead className="bg-gray-100 m-1 p-1">
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="m-1 table-row"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="table-cell m-2"
                >
                  <div className="flex justify-around">
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <IoArrowDown />
                        ) : (
                          <IoArrowUp />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="m-1 p-1">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="bg-gray-200 odd:bg-gray-100 px-6 py-4 whitespace-nowrap"
              >
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="table-cell m-2">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TrendingMoviesTable;
