"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
//actions
var useGetTrending_1 = require("../../actions/tmdb/useGetTrending");
var columns_1 = require("./columns");
var Table_1 = require("../common/Table");
function TrendingMovies() {
    var _a = react_1.useState({
        page: 1,
        media_type: "movie",
        time_window: "week"
    }), trendingParams = _a[0], setTrendingParams = _a[1];
    var _b = react_1.useState([{}]), trendings = _b[0], setTrendings = _b[1];
    var _c = useGetTrending_1["default"](trendingParams), data = _c.data, error = _c.error, fetchNextPage = _c.fetchNextPage, hasNextPage = _c.hasNextPage, isFetching = _c.isFetching, isFetchingNextPage = _c.isFetchingNextPage, status = _c.status;
    var finalData = [];
    function concatFetchedList() {
        for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.pages.length); i++) {
            var results = data === null || data === void 0 ? void 0 : data.pages[i].results;
            finalData = __spreadArrays(finalData, results);
        }
    }
    concatFetchedList();
    var columns = react_1.useMemo(function () { return columns_1.COLUMNS; }, []);
    // const tableData = useMemo(() => finalData, []);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, "Trending Moives"),
            react_1["default"].createElement("button", { onClick: function () { return fetchNextPage(); }, disabled: !hasNextPage || isFetchingNextPage }, isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                    ? "Load More"
                    : "Nothing more to load"),
            status === "success" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(Table_1["default"], { data: finalData, columns: columns }))))));
}
exports["default"] = TrendingMovies;
