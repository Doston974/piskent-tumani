import { useMutation } from "react-query";
import { request } from "../../services/service-api";


export const useSendMsgMutation = () => {
  return useMutation((FormData) => request.post(`/extra/appeal/create`, FormData));
};
