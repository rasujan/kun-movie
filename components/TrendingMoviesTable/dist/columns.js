"use strict";
exports.__esModule = true;
exports.COLUMNS = void 0;
exports.COLUMNS = [
    {
        Header: "S No",
        accessor: function (row, i) { return i + 1; }
    },
    { Header: "id", accessor: "id" },
    {
        Header: "Title",
        accessor: "title",
        Cell: function (_a) {
            var row = _a.row, value = _a.value;
            if (row.values.vote_average >= 7) {
                return (React.createElement("div", { className: "text-red-500" },
                    React.createElement("span", null,
                        " ",
                        value)));
            }
            else {
                return (React.createElement("div", { className: "text-gray-500" },
                    React.createElement("span", null,
                        " ",
                        value)));
            }
        }
    },
    { Header: "Voters", accessor: "vote_count" },
    { Header: "Rating", accessor: "vote_average" },
    { Header: "Released Date", accessor: "release_date" },
    {
        Header: "Adult",
        accessor: "adult",
        Cell: function (_a) {
            var value = _a.value;
            if (value === false) {
                return "No";
            }
            else {
                return "Yes";
            }
        }
    },
];
