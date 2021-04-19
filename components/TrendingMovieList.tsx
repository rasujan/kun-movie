import React from "react";
import axios from "@/utils/axios";
import { useQuery } from "react-query";

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
  } = useQuery(["trendin movies", page], () => getTrending(page), {
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
          <div>
            {data.results.map((result) => (
              <p key={result.id}>{result.title}</p>
            ))}
          </div>
        )}
        <span>Current Page: {page + 1}</span>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>{" "}
        <button
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData}
        >
          Next Page
        </button>
        {isFetching ? <span> Loading...</span> : null}{" "}
      </div>
    </div>
  );
}

export default TrendingMovieList;
