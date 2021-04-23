import axios from "@/utils/axios";
import { useInfiniteQuery } from "react-query";
import { trendingParamsType } from "@/types/tmdb/types";

const getTrending = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`/trending/movie/week?page=${pageParam}`);
  return data;
};
export default function useGetTrending(params: trendingParamsType) {
  return useInfiniteQuery("trending", getTrending, {
    getNextPageParam: (lastPage, pages) => lastPage.page + 1,
  });
}
