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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_table_1 = require("react-table");
var io5_1 = require("react-icons/io5");
var GlobalFilter_1 = require("./GlobalFilter");
function table(props) {
    var columns = props.columns, data = props.data, rest = __rest(props, ["columns", "data"]);
    var tableInstance = react_table_1.useTable({
        columns: columns,
        data: data
    }, react_table_1.useGlobalFilter, react_table_1.useSortBy, react_table_1.usePagination);
    var getTableProps = tableInstance.getTableProps, getTableBodyProps = tableInstance.getTableBodyProps, headerGroups = tableInstance.headerGroups, page = tableInstance.page, nextPage = tableInstance.nextPage, previousPage = tableInstance.previousPage, canNextPage = tableInstance.canNextPage, canPreviousPage = tableInstance.canPreviousPage, prepareRow = tableInstance.prepareRow, pageOptions = tableInstance.pageOptions, gotoPage = tableInstance.gotoPage, pageCount = tableInstance.pageCount, setPageSize = tableInstance.setPageSize, state = tableInstance.state, setGlobalFilter = tableInstance.setGlobalFilter;
    var globalFilter = state.globalFilter, pageIndex = state.pageIndex, pageSize = state.pageSize;
    return (react_1["default"].createElement("div", null,
        " ",
        react_1["default"].createElement(GlobalFilter_1["default"], { filter: globalFilter, setFilter: setGlobalFilter }),
        react_1["default"].createElement("table", __assign({}, getTableProps(), { className: "min-w-full divide-y divide-gray-200 " }),
            react_1["default"].createElement("thead", { className: "bg-gray-100 m-1 p-1" }, headerGroups.map(function (headerGroup) { return (react_1["default"].createElement("tr", __assign({}, headerGroup.getHeaderGroupProps(), { className: "m-1 table-row" }), headerGroup.headers.map(function (column) { return (react_1["default"].createElement("th", __assign({}, column.getHeaderProps(column.getSortByToggleProps()), { className: "table-cell m-2" }),
                react_1["default"].createElement("div", { className: "flex justify-around" },
                    column.render("Header"),
                    react_1["default"].createElement("span", null, column.isSorted ? (column.isSortedDesc ? (react_1["default"].createElement(io5_1.IoArrowDown, null)) : (react_1["default"].createElement(io5_1.IoArrowUp, null))) : (""))))); }))); })),
            react_1["default"].createElement("tbody", __assign({}, getTableBodyProps(), { className: "m-1 p-1" }), page.map(function (row, i) {
                prepareRow(row);
                return (react_1["default"].createElement("tr", __assign({}, row.getRowProps(), { className: "bg-gray-200 odd:bg-gray-100 px-6 py-4 whitespace-nowrap" }), row.cells.map(function (cell) {
                    return (react_1["default"].createElement("td", __assign({}, cell.getCellProps(), { className: "table-cell m-2" }), cell.render("Cell")));
                })));
            }))),
        react_1["default"].createElement("div", { className: "flex w-18 h-12 justify-around items-center" },
            react_1["default"].createElement("div", { className: "flex space-y-1" },
                react_1["default"].createElement("button", { onClick: function () { return gotoPage(0); }, disabled: !canPreviousPage, className: "w-12 h-12 disabled:opacity-30" },
                    " ",
                    react_1["default"].createElement(io5_1.IoPlayBackCircleOutline, { className: "w-12 h-12 text-green-500" })),
                react_1["default"].createElement("button", { onClick: function () { return previousPage(); }, disabled: !canPreviousPage, className: "w-12 h-12 disabled:opacity-30" },
                    " ",
                    react_1["default"].createElement(io5_1.IoArrowBackCircle, { className: "w-12 h-12 text-green-500" }))),
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("span", null,
                    "Page:",
                    " ",
                    react_1["default"].createElement("strong", null,
                        " ",
                        pageIndex + 1,
                        " of ",
                        pageOptions.length)),
                react_1["default"].createElement("span", null,
                    "| Goto Page:",
                    " ",
                    react_1["default"].createElement("input", { type: "number", defaultValue: pageIndex + 1, onChange: function (e) {
                            var pageNumber = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            gotoPage(pageNumber);
                        }, className: "border border-black" })),
                react_1["default"].createElement("select", { value: pageSize, onChange: function (e) { return setPageSize(Number(e.target.value)); } }, [10, 25, 50, 100, 200, 500].map(function (pageSize) { return (react_1["default"].createElement("option", { key: pageSize, value: pageSize },
                    "Show ",
                    pageSize)); }))),
            react_1["default"].createElement("div", { className: "flex space-y-1" },
                react_1["default"].createElement("button", { onClick: function () { return nextPage(); }, disabled: !canNextPage, className: "w-12 h-12 disabled:opacity-30" },
                    " ",
                    react_1["default"].createElement(io5_1.IoArrowForwardCircle, { className: "w-12 h-12 text-green-500" })),
                react_1["default"].createElement("button", { onClick: function () { return gotoPage(pageCount - 1); }, disabled: !canNextPage, className: "w-12 h-12 disabled:opacity-30" },
                    " ",
                    react_1["default"].createElement(io5_1.IoPlayForwardCircleOutline, { className: "w-12 h-12 text-green-500" }))))));
}
exports["default"] = table;
