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
var useGetTrending_1 = require("../actions/tmdb/useGetTrending");
var TrendingMoviesTable_1 = require("./TrendingMoviesTable/TrendingMoviesTable");
function TrendingMovies() {
    var _a = react_1.useState({
        page: 1,
        media_type: "movie",
        time_window: "week"
    }), trendingParams = _a[0], setTrendingParams = _a[1];
    console.log("🚀 ~ file: TrendingMovies.tsx ~ line 20 ~ TrendingMovies ~ trendingParams", trendingParams);
    var _b = react_1.useState([{}]), trendings = _b[0], setTrendings = _b[1];
    var _c = useGetTrending_1["default"](trendingParams), data = _c.data, error = _c.error, fetchNextPage = _c.fetchNextPage, hasNextPage = _c.hasNextPage, isFetching = _c.isFetching, isFetchingNextPage = _c.isFetchingNextPage, status = _c.status;
    console.log("🚀 ~ file: TrendingMovies.tsx ~ line 30 ~ TrendingMovies ~ data", data);
    var finalData = [];
    // function concatingAllList(arr) {
    //   for (let i = 0; i < arr?.length; i++) {
    //     finalData = finalData.concat(arr[i]);
    //   }
    // }
    function concatFetchedList() {
        for (var i = 0; i < (data === null || data === void 0 ? void 0 : data.pages.length); i++) {
            var results = data === null || data === void 0 ? void 0 : data.pages[i].results;
            finalData = __spreadArrays(finalData, results);
        }
    }
    concatFetchedList();
    console.log("🚀 ~ file: TrendingMovies.tsx ~ line 42 ~ TrendingMovies ~ finalData", finalData);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, "Trending Moives"),
            react_1["default"].createElement("button", { onClick: function () { return fetchNextPage(); }, disabled: !hasNextPage || isFetchingNextPage }, isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                    ? "Load More"
                    : "Nothing more to load"),
            status === "success" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(TrendingMoviesTable_1["default"], { tableData: finalData }))))));
}
exports["default"] = TrendingMovies;
