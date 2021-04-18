"use strict";
exports.__esModule = true;
exports.COLUMNS = void 0;
exports.COLUMNS = [
    { Header: "id", accessor: "id" },
    { Header: "Title", accessor: "title" },
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
