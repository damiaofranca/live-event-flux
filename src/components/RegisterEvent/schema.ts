/* eslint-disable no-useless-escape */
import * as Yup from "yup";

export const registerEventSchema = Yup.object().shape({
	event: Yup.string()
		.required("Campo obrigatório.")
		.min(3, "O nome deve ter no miníno 3 letras.")
		.max(64, "O nome deve ter no miníno 64 letras."),
	password: Yup.string()
		.matches(
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/,
			"A senha deve conter pelo menos 6 caracteres, incluindo maiúsculas, minúsculas, números e símbolos.",
		)
		.required("Campo obrigatório."),
	lat: Yup.string()
		.required("Campo obrigatório.")
		.matches(
			/^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?))$/,
			"Latitude inválida. Deve estar no intervalo de -90 a 90.",
		),
	lng: Yup.string()
		.required("Campo obrigatório.")
		.matches(
			/^([-+]?((1[0-7]\d(\.\d+)?)|180(\.0+)?|([0-9]\d(\.\d+)?)))$/,
			"Longitude inválida. Deve estar no intervalo de -180 a 180.",
		),
});
