import { FC, ReactNode, createContext } from "react";
import { IAuthContext } from "./types";
import { ILoginRequest, ILoginResponse } from "@/interfacers/auth/ILogin";
import api from "@/api";
import { encryptToken } from "@/utils/cript";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const onSignIn = async (values: ILoginRequest) => {
		try {
			const { data } = await api.post<ILoginResponse>("/auth/signin", values);
			console.log(data.access_token);
			await encryptToken(data.access_token);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<AuthContext.Provider value={{ onSignIn }}>{children}</AuthContext.Provider>
	);
};
