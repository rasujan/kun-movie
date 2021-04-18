export const COLUMNS = [
  { Header: "id", accessor: "id" },
  { Header: "Title", accessor: "title" },
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
