import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import {
  IoArrowBackCircle,
  IoArrowDown,
  IoArrowForwardCircle,
  IoArrowUp,
  IoPlayBackCircleOutline,
  IoPlayForwardCircleOutline,
} from "react-icons/io5";
import GlobalFilter from "./GlobalFilter";
function table(props: { columns: any[]; data: [] }) {
  const { columns, data, ...rest } = props;
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
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
          {page.map((row, i) => {
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
      <div className="flex w-18 h-12 justify-around items-center">
        <div className="flex space-y-1">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="w-12 h-12 disabled:opacity-30"
          >
            {" "}
            <IoPlayBackCircleOutline className="w-12 h-12 text-green-500" />
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="w-12 h-12 disabled:opacity-30"
          >
            {" "}
            <IoArrowBackCircle className="w-12 h-12 text-green-500" />
          </button>
        </div>
        <div className="text-center">
          <span>
            Page:{" "}
            <strong>
              {" "}
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span>
            | Goto Page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              className="border border-black"
            />
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100, 200, 500].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <div className="flex space-y-1">
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="w-12 h-12 disabled:opacity-30"
          >
            {" "}
            <IoArrowForwardCircle className="w-12 h-12 text-green-500" />
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className="w-12 h-12 disabled:opacity-30"
          >
            {" "}
            <IoPlayForwardCircleOutline className="w-12 h-12 text-green-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default table;
