/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode, createContext } from "react";

import api from "@/api";
import { IAuthContext } from "./types";
import { encryptToken } from "@/utils/cript";

import {
	ILoginRequest,
	ILoginResponse,
	IRegisterRequest,
} from "@/interfacers/auth/ILogin";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const onSignIn = async (values: ILoginRequest) => {
		try {
			const { data } = await api.post<ILoginResponse>("/auth/signin", values);
			await encryptToken(data.access_token);
		} catch (err) {
			if (err instanceof AxiosError) {
				if (err.request && err.request.response) {
					const message = JSON.parse(err.request.response).message;
					if (
						message === "wrong password or email" ||
						(err.code && err.code === "404")
					) {
						toast.error("Senha ou email errado.");
					}
				}
			}
		}
	};

	const onSignUp = async (values: IRegisterRequest) => {
		try {
			await api.post("/users/signup", values);
			toast.success("Usuário cadastrado com sucesso.", {
				autoClose: 1000,
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AuthContext.Provider value={{ onSignIn, onSignUp }}>
			{children}
		</AuthContext.Provider>
	);
};
