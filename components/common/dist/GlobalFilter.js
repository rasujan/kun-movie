"use strict";
exports.__esModule = true;
var react_1 = require("react");
var GlobalFilter = function (_a) {
    var filter = _a.filter, setFilter = _a.setFilter;
    return (react_1["default"].createElement("span", null,
        "Search :",
        react_1["default"].createElement("input", { className: "border m-1", value: filter || "", onChange: function (e) { return setFilter(e.target.value); } })));
};
exports["default"] = GlobalFilter;
