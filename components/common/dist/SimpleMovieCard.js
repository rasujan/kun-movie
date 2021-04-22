"use strict";
exports.__esModule = true;
var react_1 = require("react");
function SimpleMovieCard(props) {
    var movie = props.movie;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "flex flex-col  w-36 h-auto rounded-lg p-1 bg-gray-50" },
            react_1["default"].createElement("div", { id: "poster " },
                react_1["default"].createElement("img", { src: "https://image.tmdb.org/t/p/w500" + movie.poster_path, className: "h-52 w-36 rounded-lg" })),
            react_1["default"].createElement("div", { className: "m-2" },
                react_1["default"].createElement("h1", { className: "font-medium tracking-wide" }, movie.title),
                react_1["default"].createElement("h1", { className: "font-thin text-xs" },
                    movie.release_date,
                    " ")))));
}
exports["default"] = SimpleMovieCard;
