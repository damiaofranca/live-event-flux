import { FC } from "react";
import "./styles.css";

export const Loading: FC<{ raio: number }> = ({ raio }) => {
	return (
		<div className="root">
			<svg className="spinner" viewBox="0 0 50 50">
				<circle
					cx="25"
					cy="25"
					r={raio}
					fill="none"
					className="path"
					strokeWidth="2.6"
				></circle>
			</svg>
		</div>
	);
};
