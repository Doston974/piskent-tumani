import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetNavDetail = ({ id }: { id: number | string }) => {
  return useQuery(["use-get-nav-detail", id], async () => {
    const { data } = await request.get(
      `/main/post/nav/${id}`,
      {}
    );
    return data;
  });
};
