import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forEach, isArray } from "lodash";
import toast from "react-hot-toast";

const { request } = require("@/services/api");

const postRequest = (url, attributes, config = {}) =>
  request.post(url, attributes, config);

const usePostQuery = ({ hideSuccessToast = false, listKeyId = null }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading, isError, error, isFetching } = useMutation(
    ({ url, attributes, config = {} }) => postRequest(url, attributes, config),
    {
      onSuccess: (data) => {
        if (!hideSuccessToast) {
          toast.success(data?.data?.message || "Success");
        }

        if (listKeyId) {
          if (isArray(listKeyId)) {
            forEach(listKeyId, (val) => {
              queryClient.invalidateQueries(val);
            });
          } else {
            queryClient.invalidateQueries(listKeyId);
          }
        }
      },
    }
  );
};

export default usePostQuery;
