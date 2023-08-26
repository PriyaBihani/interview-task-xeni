import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

interface ServiceHeaders {
  [key: string]: string;
}

console.log(process.env.REACT_APP_API_BASE_URL);

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 5000,
  headers: {},
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status;
    if (status === 429) {
      toast.error(error.response?.data);
    } else {
      toast.error(error.response?.data?.message);
    }
    return Promise.reject(error);
  }
);

export const servicePost = async <T>(
  path: string,
  payload: T,
  headers: ServiceHeaders = {}
) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .post<T>(`${process.env.REACT_APP_API_BASE_URL}${path}`, payload, {
        headers: headers,
      })
      .then(function (response: AxiosResponse<T>) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const serviceGet = async <T>(
  path: string,
  headers: ServiceHeaders = {}
) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .get<T>(`${process.env.REACT_APP_API_BASE_URL}${path}`, {
        headers: headers,
      })
      .then(function (response: AxiosResponse<T>) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const servicePatch = async <T>(
  path: string,
  payload: T,
  headers: ServiceHeaders = {}
) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .patch<T>(`${process.env.REACT_APP_API_BASE_URL}${path}`, payload, {
        headers: headers,
      })
      .then(function (response: AxiosResponse<T>) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const servicePut = async <T>(
  path: string,
  payload: T,
  headers: ServiceHeaders = {}
) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .put<T>(`${process.env.REACT_APP_API_BASE_URL}${path}`, payload, {
        headers: headers,
      })
      .then(function (response: AxiosResponse<T>) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const serviceDelete = async <T>(
  path: string,
  headers: ServiceHeaders = {}
) => {
  return new Promise<T>((resolve, reject) => {
    instance
      .delete<T>(`${process.env.REACT_APP_API_BASE_URL}${path}`, {
        headers: headers,
      })
      .then(function (response: AxiosResponse<T>) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
