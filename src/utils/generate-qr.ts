import QRCode from "qrcode";

export const handleQRCodeGeneration = (url: string) => {
	QRCode.toDataURL(url, { width: 300 }, (err, dataUrl) => {
		if (err) console.error(err);

		return dataUrl;
	});
};
