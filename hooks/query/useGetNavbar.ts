import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetNavbar = () => {
  return useQuery(["use-get-navbar"], async () => {
    const { data } = await request.get(`/extra/navitem?status=Basic&visible=true
    `);
    return data;
  });
};
