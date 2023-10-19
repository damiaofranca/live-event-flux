import { toast } from "react-toastify";

export async function copyToClipboard(text: string, textSucess: string) {
	if ("clipboard" in navigator) {
		await navigator.clipboard.writeText(text);
		toast.success(textSucess, {
			autoClose: 1000,
		});
	}
}
