import axios from "@/utils/axios";
import { useQuery } from "react-query";
import { trendingParamsType } from "@/types/tmdb/types";

const getTrending = async (params: trendingParamsType) => {
  const { data } = await axios.get(
    `/trending/${params.media_type}/${params.time_window}?page=${params.page}`
  );
  return data;
};
export default function useGetTrending(params: trendingParamsType) {
  return useQuery(
    ["trending", params],
    async () => {
      const data = await getTrending(params);
      return data;
    },
    { keepPreviousData: true }
  );
}
