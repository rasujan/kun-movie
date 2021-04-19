"use strict";
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
    var _c = useGetTrending_1["default"](trendingParams), status = _c.status, data = _c.data, isPreviousData = _c.isPreviousData;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, "Trending Moives"),
            status === "success" && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(TrendingMoviesTable_1["default"], { tableData: data.results }))))));
}
exports["default"] = TrendingMovies;
