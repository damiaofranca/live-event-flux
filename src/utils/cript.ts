import CryptoJS from "crypto-js";
import jwt_decode from "jwt-decode";

const token_local = localStorage.getItem(import.meta.env.VITE_LOCAL_TOKEN);

const encryptToken = async (value: string) => {
	try {
		const encryptedValue = await encryptValue(value);
		localStorage.setItem(
			import.meta.env.VITE_LOCAL_TOKEN,
			encryptedValue.toString(),
		);
	} catch (error) {
		console.error("Erro ao criptografar o token:", error);
	}
};

const encryptValue = (value: string) => {
	return new Promise<string>((resolve, reject) => {
		try {
			const encrypted = CryptoJS.AES.encrypt(
				value,
				import.meta.env.VITE_encryptToken,
			).toString();
			resolve(encrypted);
		} catch (error) {
			reject(error);
		}
	});
};

const decodeToken = () => {
	if (typeof token_local === "string") {
		const bytes = CryptoJS.AES.decrypt(
			token_local,
			import.meta.env.VITE_encryptToken,
		);
		return bytes.toString(CryptoJS.enc.Utf8);
	}
	return "";
};

const decodeHash = () => {
	if (!token_local) {
		return false;
	}

	const data = jwt_decode(decodeToken()) as { email: string; exp: number };

	return { email: data.email, exp: data.exp };
};

const removeToken = () => {
	localStorage.removeItem(import.meta.env.VITE_LOCAL_TOKEN);
};

export { encryptToken, decodeToken, decodeHash, removeToken };
