export const RULES = {
	PASSWORD: [
		{ required: true, message: "Por favor, insira seu email!" },
		{
			pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
			message: "Email inválido!",
		},
	],
	EMAIL: [
		{ required: true, message: "Por favor, insira sua senha!" },
		{
			pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			message:
				"A senha deve conter pelo menos 8 caracteres, incluindo pelo menos uma letra e um número.",
		},
	],
};
