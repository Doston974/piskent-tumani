import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetRahbariyat = () => {
  return useQuery(["use-get-rahbariyat"], async () => {
    const { data } = await request.get(`/main/admistrations/`);
    return data;
  });
};
