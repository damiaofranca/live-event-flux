export const RULES = {
	PASSWORD: [
		{ required: true, message: "Por favor, insira seu email!" },
		{
			pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
			message:
				"A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra, número e um simbolo como: (@, $, !, %, *, ?, ou &).",
		},
	],
	EMAIL: [
		{ required: true, message: "Por favor, insira sua senha!" },
		{
			pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
			message: "Email inválido!",
		},
	],
};
