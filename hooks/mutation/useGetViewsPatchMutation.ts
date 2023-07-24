import { useMutation } from "react-query";
import { request } from "../../services/service-api";

export const useViewsPatchMutation = ({ id }: { id: number | string }) => {
  return useMutation((data: object) =>
    request.patch(`/main/news/detail/${id}/`, data)
  );
};
