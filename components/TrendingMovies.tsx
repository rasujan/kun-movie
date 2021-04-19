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
  const { status, data, isPreviousData } = useGetTrending(trendingParams);

  return (
    <div>
      <div>
        <h1>Trending Moives</h1>
        {status === "success" && (
          <>
            <TrendingMoviesTable tableData={data.results} />
          </>
        )}
      </div>
    </div>
  );
}

export default TrendingMovies;
