import { FC } from "react";
import LogoImg from "@assets/images/logo-simple.svg";
import LogoWhiteImg from "@assets/images/logo-simple-black.svg";
import { Image } from "./styles";
import { useTheme } from "@/hooks";

interface ILogo extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Logo: FC<ILogo> = (props) => {
	const { theme } = useTheme();

	return (
		<Image
			src={theme === "light" ? LogoWhiteImg : LogoImg}
			alt="Live event flux"
			{...props}
		/>
	);
};
