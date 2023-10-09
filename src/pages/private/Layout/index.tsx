import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			dadas <Outlet></Outlet>{" "}
		</div>
	);
};
