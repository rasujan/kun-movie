"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var tmdbApiKey = process.env.tmdbApiKey;
var instance = axios_1["default"].create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: { "Content-Type": "application/json" },
    params: { "api_key": tmdbApiKey }
});
exports["default"] = instance;
