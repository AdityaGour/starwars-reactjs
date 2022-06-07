import axios, { AxiosResponse } from "axios";


export const axiosInstance = axios.create({
    baseURL:'',
  });

export const api = {
    get: function (
      ...params
    ) {
      return axiosInstance.get(...params);
    },
    post: function (
      ...params
    ) {
      console.log("Post Details",params)
      return axiosInstance.post(...params);
    },
    put: function (
      ...params
    ) {
      return axiosInstance.put(...params);
    },
    delete: function (
      ...params
    ) {
      return axiosInstance.delete(...params);
    },
  };
  
  axiosInstance.interceptors.response.use(
    (response) => {
      console.warn("resouce",response,"_response",response.data?.code)
      if (response.data?.code == 200) {
        return response;
      } else if (
        (response.data?.code >= 400 && response.data?.code <= 410) ||
        (response.data?.code <= 500 && response.data?.code <= 510)
      ) {
        const errorMessage = response?.data?.message || 'Something went wrong'; // change to code 200 - 299 success and 400- 410 | 500 - 510 error
        throw new Error(errorMessage);
      } else {
        return response;
      }
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.log("Error Main",error);
      console.log({ apiError: error });
      if (error?.message === "Network Error") {
        throw new Error("Please check your internet");
      }
      const errorMessage =
        error?.response?.data?.message || "Something went wrong";
      throw new Error(errorMessage);
    },
  );
  