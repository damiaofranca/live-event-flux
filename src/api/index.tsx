import axios from "axios";
import { redirect } from "react-router-dom";

import { decodeToken, removeToken } from "@/utils/cript";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
	baseURL,
});

api.interceptors.request.use(
	function (config) {
		const token_local = decodeToken();
		if (token_local === "string") {
			config.headers["Bearer"] = token_local;
		} else {
			redirect("/login");
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

axios.interceptors.response.use(
	function (response) {
		const token_local = import.meta.env.VITE_LOCAL_TOKEN;
		if (
			response.status === 401 &&
			response.data.message &&
			response.data.message === "EXPIRED_TOKEN"
		) {
			if (typeof token_local === "string") {
				removeToken();
				redirect("/login");
			}
		}
		return response;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export default api;
