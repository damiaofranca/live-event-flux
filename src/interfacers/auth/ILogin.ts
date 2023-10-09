import { ILoginRequest } from "./request/ILoginRequest";
import { ILoginResponse } from "./response/ILoginResponse";

interface ILogin {
	email: string;
}

export type { ILogin, ILoginRequest, ILoginResponse };
