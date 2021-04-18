"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_table_1 = require("react-table");
var columns_1 = require("./columns");
var io5_1 = require("react-icons/io5");
var GlobalFilter_1 = require("./GlobalFilter");
function TrendingMoviesTable(props) {
    var tableData = props.tableData;
    var columns = react_1.useMemo(function () { return columns_1.COLUMNS; }, []);
    var data = react_1.useMemo(function () { return tableData; }, []);
    var tableInstance = react_table_1.useTable({
        columns: columns,
        data: data
    }, react_table_1.useGlobalFilter, react_table_1.useSortBy);
    var getTableProps = tableInstance.getTableProps, getTableBodyProps = tableInstance.getTableBodyProps, headerGroups = tableInstance.headerGroups, rows = tableInstance.rows, prepareRow = tableInstance.prepareRow, state = tableInstance.state, setGlobalFilter = tableInstance.setGlobalFilter;
    var globalFilter = state.globalFilter;
    return (react_1["default"].createElement("div", null,
        " ",
        react_1["default"].createElement(GlobalFilter_1["default"], { filter: globalFilter, setFilter: setGlobalFilter }),
        react_1["default"].createElement("table", __assign({}, getTableProps(), { className: "min-w-full divide-y divide-gray-200 " }),
            react_1["default"].createElement("thead", { className: "bg-gray-100 m-1 p-1" }, headerGroups.map(function (headerGroup) { return (react_1["default"].createElement("tr", __assign({}, headerGroup.getHeaderGroupProps(), { className: "m-1 table-row" }), headerGroup.headers.map(function (column) { return (react_1["default"].createElement("th", __assign({}, column.getHeaderProps(column.getSortByToggleProps()), { className: "table-cell m-2" }),
                react_1["default"].createElement("div", { className: "flex justify-around" },
                    column.render("Header"),
                    react_1["default"].createElement("span", null, column.isSorted ? (column.isSortedDesc ? (react_1["default"].createElement(io5_1.IoArrowDown, null)) : (react_1["default"].createElement(io5_1.IoArrowUp, null))) : (""))))); }))); })),
            react_1["default"].createElement("tbody", __assign({}, getTableBodyProps(), { className: "m-1 p-1" }), rows.map(function (row, i) {
                prepareRow(row);
                return (react_1["default"].createElement("tr", __assign({}, row.getRowProps(), { className: "bg-gray-200 odd:bg-gray-100 px-6 py-4 whitespace-nowrap" }), row.cells.map(function (cell) {
                    return (react_1["default"].createElement("td", __assign({}, cell.getCellProps(), { className: "table-cell m-2" }), cell.render("Cell")));
                })));
            })))));
}
exports["default"] = TrendingMoviesTable;
