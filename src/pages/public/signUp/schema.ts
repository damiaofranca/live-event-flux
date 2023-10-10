/* eslint-disable no-useless-escape */
import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
	nickname: Yup.string()
		.required("Campo obrigatório.")
		.min(3, "O nome deve ter no miníno 3 letras.")
		.max(64, "O nome deve ter no miníno 64 letras."),
	email: Yup.string().email("Email inválido.").required("Campo obrigatório."),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/,
			"A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.",
		)
		.required("Campo obrigatório."),
	passwordConfirmation: Yup.string()
		.oneOf([Yup.ref("password")], "As senhas devem ser iguais")
		.required("Campo obrigatório."),
});
