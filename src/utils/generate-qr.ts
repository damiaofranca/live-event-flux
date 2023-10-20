import QRCode from "qrcode";

export const handleQRCodeGeneration = (
	url: string,
	setUrl: (url: string) => void,
) => {
	QRCode.toDataURL(url, { width: 300 }, (err, dataUrl) => {
		if (err) console.error(err);
		setUrl(dataUrl);
	});
};
