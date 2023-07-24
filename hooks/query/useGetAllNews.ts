import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetAllNews = ({ page }: { page: string | number }) => {
  return useQuery(["use-get-all-news", page], async () => {
    const { data } = await request.get(`/main/news/`, {
      params: { page },
    });
    return data;
  });
};
