import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetStatistika = () => {
  return useQuery(["use-get-statistika"], async () => {
    const { data } = await request.get(`/extra/statistika/`);
    return data;
  });
};
