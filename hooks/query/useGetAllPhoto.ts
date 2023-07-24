import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetAllPhoto = () => {
  return useQuery(["use-get-all-photo"], async () => {
    const { data } = await request.get(`/extra/photo`);
    return data;
  });
};
