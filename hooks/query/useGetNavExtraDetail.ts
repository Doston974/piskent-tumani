import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetNavExtraDetail = ({ id }) => {
  return useQuery(["use-get-post-detail", id], async () => {
    const { data } = await request.get(`/main/post/${id}`, {});
    return data;
  });
};
