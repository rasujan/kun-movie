import React from "react";
import axios from "@/utils/axios";
import { useQuery } from "react-query";
import SimpleMovieCard from "./common/SimpleMovieCard";

function TrendingMovieList() {
  const [page, setPage] = React.useState(1);

  const getTrending = async (page = 1) => {
    const { data } = await axios.get(`/trending/movie/week?page=${page}`);
    return data;
  };

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(["trending movies", page], () => getTrending(page), {
    keepPreviousData: true,
  });

  return (
    <div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error}</div>
        ) : (
          <div className="flex w-screen">
            {data.results.map((result) => (
              <p key={result.id}>
                <SimpleMovieCard movie={result} />
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TrendingMovieList;
