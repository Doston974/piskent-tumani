import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetEightNews = () => {
  return useQuery(["use-get-eight-news"], async () => {
    const { data } = await request.get(`/main/news/eight/`);
    return data;
  });
};
