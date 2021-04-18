import React, { useState } from "react";

//React Query
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

//actions
import useGetTrending from "../actions/tmdb/useGetTrending";

//types
import { trendingParamsType } from "@/types/tmdb/types";
import TrendingMoviesTable from "./TrendingMoviesTable/TrendingMoviesTable";

function TrendingMovies() {
  const [trendingParams, setTrendingParams] = useState<trendingParamsType>({
    media_type: "movie",
    time_window: "week",
  });
  const { status, data, error, isFetching } = useGetTrending(trendingParams);

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
