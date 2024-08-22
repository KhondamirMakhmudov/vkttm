import { config } from "@/config";
import axios from "axios";
import { get } from "lodash";
import storage from "../storage";

const token = "put token here";

const request = axios.create({
  baseURL: config.API_URL,
  params: {},
  headers: {
    common: {
      Accept: "application/json",
      "Content-Type": "application/json",
      //   Authorization: `Token ${token}`,
    },
  },
});

request.interceptors.request.use(
  (config) => {
    const token = get(
      JSON.parse(storage.get("settings")),
      "state.token",
      "Frg5XI8NLbjbjnKUdxJ8MO6NMM7Uv29EuZ4sD5vF603yioYU4LyUL5oFgt2fFURx"
    );

    if (token) {
      config.headers["token"] = `${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { request };
