import axios, { AxiosResponse } from "axios";

const SERVICE_URL = "http://localhost:8080";

interface ServiceHeaders {
  [key: string]: string;
}

export const servicePost = async <T>(
  path: string,
  payload: T,
  headers: ServiceHeaders = {}
) => {
  return new Promise<T>((resolve, reject) => {
    axios
      .post<T>(`${SERVICE_URL}${path}`, payload, {
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
    axios
      .get<T>(`${SERVICE_URL}${path}`, {
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
    axios
      .patch<T>(`${SERVICE_URL}${path}`, payload, {
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
    axios
      .put<T>(`${SERVICE_URL}${path}`, payload, {
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
    axios
      .delete<T>(`${SERVICE_URL}${path}`, {
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
