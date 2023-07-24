import { useQuery } from "react-query";
import { request } from "../../services/service-api";

export const useGetPhotoCarusel = () => {
  return useQuery(["use-get-photo-carusel"], async () => {
    const { data } = await request.get(`/extra/photo/carusel`);
    return data;
  });
};
