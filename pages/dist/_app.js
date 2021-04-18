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
require("../styles/globals.css");
var react_query_1 = require("react-query");
var devtools_1 = require("react-query/devtools");
var queryClient = new react_query_1.QueryClient();
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        React.createElement(Component, __assign({}, pageProps)),
        React.createElement(devtools_1.ReactQueryDevtools, { initialIsOpen: false })));
}
exports["default"] = MyApp;
