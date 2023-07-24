import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetPostDetail = ({ id }: { id: number | string }) => {
  return useQuery(["use-get-post-detail", id], async () => {
    const { data } = await request.get(`/main/news/detail/${id}`, {});
    return data;
  });
};
