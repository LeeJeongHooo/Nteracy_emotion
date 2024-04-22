import axios, { AxiosRequestConfig } from "axios";

interface ICustomAxiosRequestConfig extends Omit<AxiosRequestConfig, "data"> {}

const instance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

export const api = {
  get: <T>(url: string, params?: unknown, config?: AxiosRequestConfig) =>
    instance.get<T>(url, { params, ...config }),
  post: <T, D>(url: string, data?: D, config?: ICustomAxiosRequestConfig) =>
    instance.post<T>(url, data, config),
  put: <T, D>(url: string, data?: D, config?: ICustomAxiosRequestConfig) =>
    instance.put<T>(url, data, config),
  patch: <T, D>(url: string, data?: D, config?: ICustomAxiosRequestConfig) =>
    instance.patch<T>(url, data, config),
  delete: <T>(url: string, params?: unknown, config?: AxiosRequestConfig) =>
    instance.delete<T>(url, { params, ...config }),
};
