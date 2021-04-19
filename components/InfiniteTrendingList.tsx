import axios from "@/utils/axios";
import React from "react";
import { useInfiniteQuery } from "react-query";

function InfiniteTrendingList() {
  const getTrending = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(`/trending/movie/week?page=${pageParam}`);
    return data;
  };
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("Trendings", getTrending, {
    getNextPageParam: (lastPage, pages) => lastPage.page + 1,
  });
  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: Something Went Wrong</p>
  ) : (
    <>
      {data.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.results.map((result) => (
            <p key={result.id}>{result.title}</p>
          ))}
        </React.Fragment>
      ))}
      <div>
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
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default InfiniteTrendingList;
