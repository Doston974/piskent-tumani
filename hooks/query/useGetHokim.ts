import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetHokim = () => {
  return useQuery(["use-get-hokim"], async () => {
    const { data } = await request.get(`/extra/khokim/`);
    return data;
  });
};
