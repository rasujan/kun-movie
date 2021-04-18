"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var TrendingMovies_1 = require("@/components/TrendingMovies");
function Home() {
    return (React.createElement("div", { className: "" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Kun Movie"),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("main", { className: "" }),
        React.createElement(TrendingMovies_1["default"], null),
        React.createElement("footer", { className: "" })));
}
exports["default"] = Home;
