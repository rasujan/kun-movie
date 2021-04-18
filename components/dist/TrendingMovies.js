"use strict";
exports.__esModule = true;
var react_1 = require("react");
//actions
var useGetTrending_1 = require("../actions/tmdb/useGetTrending");
var TrendingMoviesTable_1 = require("./TrendingMoviesTable/TrendingMoviesTable");
function TrendingMovies() {
    var _a = react_1.useState({
        media_type: "movie",
        time_window: "week"
    }), trendingParams = _a[0], setTrendingParams = _a[1];
    var _b = useGetTrending_1["default"](trendingParams), status = _b.status, data = _b.data, error = _b.error, isFetching = _b.isFetching;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, "Trending Moives"),
            status === "success" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(TrendingMoviesTable_1["default"], { tableData: data.results }))))));
}
exports["default"] = TrendingMovies;
