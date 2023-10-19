import { FC } from "react";

import { useTheme } from "@/hooks";
import LogoImg from "@assets/images/logo-simple.svg";
import LogoWhiteImg from "@assets/images/logo-simple-black.svg";

import { useStyles } from "./styles";

interface ILogo extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const Logo: FC<ILogo> = (props) => {
	const styles = useStyles();
	const { theme } = useTheme();

	return (
		<img
			{...props}
			alt="Live event flux"
			className={styles.image}
			src={theme === "light" ? LogoWhiteImg : LogoImg}
		/>
	);
};
