import React, { useEffect, useMemo, useState } from "react";

//actions
import useGetTrending from "../../actions/tmdb/useGetTrending";

//types
import { trendingParamsType } from "@/types/tmdb/types";
import TrendingMovie from "./TrendingMoviesTable";

import { COLUMNS } from "./columns";
import Table from "../common/Table";

function TrendingMovies() {
  const [trendingParams, setTrendingParams] = useState<trendingParamsType>({
    page: 1,
    media_type: "movie",
    time_window: "week",
  });
  const [trendings, setTrendings] = useState([{}]);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useGetTrending(trendingParams);

  let finalData: [] = [];
  function concatFetchedList() {
    for (let i = 0; i < data?.pages.length; i++) {
      const results: [] = data?.pages[i].results;
      finalData = [...finalData, ...results];
    }
  }
  concatFetchedList();

  const columns = useMemo(() => COLUMNS, []);
  // const tableData = useMemo(() => finalData, []);

  return (
    <div>
      <div>
        <h1>Trending Moives</h1>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </button>
        {status === "success" && (
          <>
            <Table data={finalData} columns={columns} />
          </>
        )}
      </div>
    </div>
  );
}

export default TrendingMovies;
