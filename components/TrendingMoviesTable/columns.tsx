export const COLUMNS = [
  {
    Header: "S No",
    accessor: (row, i) => i + 1,
  },
  { Header: "id", accessor: "id" },
  {
    Header: "Title",
    accessor: "title",
    Cell: ({ row, value }) => {
      if (row.values.vote_average >= 7) {
        return (
          <div className="text-red-500">
            <span> {value}</span>
          </div>
        );
      } else {
        return (
          <div className="text-gray-500">
            <span> {value}</span>
          </div>
        );
      }
    },
  },
  { Header: "Voters", accessor: "vote_count" },
  { Header: "Rating", accessor: "vote_average" },
  { Header: "Released Date", accessor: "release_date" },
  {
    Header: "Adult",
    accessor: "adult",
    Cell: ({ value }) => {
      if (value === false) {
        return "No";
      } else {
        return "Yes";
      }
    },
  },
];
