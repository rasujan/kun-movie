import React, { useEffect, useState } from "react";

//actions
import useGetTrending from "../actions/tmdb/useGetTrending";

//types
import { trendingParamsType } from "@/types/tmdb/types";
import TrendingMoviesTable from "./TrendingMoviesTable/TrendingMoviesTable";

function TrendingMovies() {
  const [trendingParams, setTrendingParams] = useState<trendingParamsType>({
    page: 1,
    media_type: "movie",
    time_window: "week",
  });
  console.log(
    "🚀 ~ file: TrendingMovies.tsx ~ line 20 ~ TrendingMovies ~ trendingParams",
    trendingParams
  );
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
  console.log(
    "🚀 ~ file: TrendingMovies.tsx ~ line 30 ~ TrendingMovies ~ data",
    data
  );
  let finalData = [];

  // function concatingAllList(arr) {
  //   for (let i = 0; i < arr?.length; i++) {
  //     finalData = finalData.concat(arr[i]);
  //   }
  // }
  function concatFetchedList() {
    for (let i = 0; i < data?.pages.length; i++) {
      const results = data?.pages[i].results;
      finalData = [...finalData, ...results];
    }
  }

  concatFetchedList();

  console.log(
    "🚀 ~ file: TrendingMovies.tsx ~ line 42 ~ TrendingMovies ~ finalData",
    finalData
  );

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
            <TrendingMoviesTable tableData={finalData} />
          </>
        )}
      </div>
    </div>
  );
}

export default TrendingMovies;
