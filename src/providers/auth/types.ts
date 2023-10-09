import { ILoginRequest } from "@/interfacers/auth/ILogin";

export interface IAuthContext {
	onSignIn: (values: ILoginRequest) => Promise<void>;
}
