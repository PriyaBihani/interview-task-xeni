import axios from "axios";

const SERVICE_URL = "http://localhost:8080";

export const servicePost = async (path, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`http://localhost:8080${path}}`, payload, {
        headers: headers,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const serviceGet = async (path, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://localhost:8080${path}}`, {
        headers: headers,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const servicePatch = async (path, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`http://localhost:8080${path}}`, payload, {
        headers: headers,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const servicePut = async (path, payload, headers = null) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`http://localhost:8080${path}}`, payload, {
        headers: headers,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

export const serviceDelete = async (path, headers) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`http://localhost:8080${path}}`, {
        headers: headers,
      })
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
