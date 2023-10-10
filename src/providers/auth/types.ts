import { ILoginRequest, IRegisterRequest } from "@/interfacers/auth/ILogin";

export interface IAuthContext {
	onSignIn: (values: ILoginRequest) => Promise<void>;
	onSignUp: (values: IRegisterRequest) => Promise<void>;
}
