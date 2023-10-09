import { FC } from "react";
import { Image } from "./styles";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Logo: FC<LogoProps> = ({ src, alt }) => {
	return <Image src={src} alt={alt} />;
};
