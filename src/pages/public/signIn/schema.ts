/* eslint-disable no-useless-escape */
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
	email: Yup.string().email("Email inválido.").required("Campo obrigatório."),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
			"A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.",
		)
		.required("Campo obrigatório."),
});
