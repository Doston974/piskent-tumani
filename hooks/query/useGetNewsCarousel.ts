import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetNewsCarousel = () => {
  return useQuery(["use-get-news-carousel"], async () => {
    const { data } = await request.get(`/main/news/five/`);
    return data;
  });
};
