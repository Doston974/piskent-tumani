import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetPopularNews = () => {
  return useQuery(["use-get-popular-news"], async () => {
    const { data } = await request.get(`/main/news/read`);
    return data;
  });
};
