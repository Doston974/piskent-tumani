import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetMarkaziyApt = () => {
  return useQuery(["use-get-markaziy-aprt"], async () => {
    const { data } = await request.get(`/main/groupboss/`);
    return data;
  });
};
