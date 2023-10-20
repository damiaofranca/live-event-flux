import { FC } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import { Title3 } from "@fluentui/react-components";

interface INoData {
	sizeIcon: number;
	iconUrl?: string;
}

export const NoData: FC<INoData> = ({ sizeIcon, iconUrl }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Player
				loop
				autoplay
				style={{ height: `${sizeIcon}px`, width: `${sizeIcon}px` }}
				src={
					iconUrl
						? iconUrl
						: "https://lottie.host/e1af4a2b-f153-4040-aec0-b4c6915e9e12/t1NljzLzMH.json"
				}
			/>
			<Title3>Sem dados!</Title3>
		</div>
	);
};
