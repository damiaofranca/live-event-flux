/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_LOCAL_TOKEN: string;
	readonly VITE_ENCRYPT_TOKEN: string;
	readonly KEY_GOOGLE_SECRET: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
