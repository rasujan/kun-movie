"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("@/utils/axios");
var react_query_1 = require("react-query");
function TrendingMovieList() {
    var _this = this;
    var _a = react_1["default"].useState(1), page = _a[0], setPage = _a[1];
    var getTrending = function (page) {
        if (page === void 0) { page = 1; }
        return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1["default"].get("/trending/movie/week?page=" + page)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    var _b = react_query_1.useQuery(["projects", page], function () { return getTrending(page); }, {
        keepPreviousData: true
    }), isLoading = _b.isLoading, isError = _b.isError, error = _b.error, data = _b.data, isFetching = _b.isFetching, isPreviousData = _b.isPreviousData;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", null,
            isLoading ? (react_1["default"].createElement("div", null, "Loading...")) : isError ? (react_1["default"].createElement("div", null,
                "Error: ",
                error)) : (react_1["default"].createElement("div", null, data.results.map(function (result) { return (react_1["default"].createElement("p", { key: result.id }, result.name)); }))),
            react_1["default"].createElement("span", null,
                "Current Page: ",
                page + 1),
            react_1["default"].createElement("button", { onClick: function () { return setPage(function (old) { return Math.max(old - 1, 0); }); }, disabled: page === 0 }, "Previous Page"),
            " ",
            react_1["default"].createElement("button", { onClick: function () {
                    if (!isPreviousData && data.hasMore) {
                        setPage(function (old) { return old + 1; });
                    }
                }, 
                // Disable the Next Page button until we know a next page is available
                disabled: isPreviousData || !data.hasMore }, "Next Page"),
            isFetching ? react_1["default"].createElement("span", null, " Loading...") : null,
            " ")));
}
exports["default"] = TrendingMovieList;