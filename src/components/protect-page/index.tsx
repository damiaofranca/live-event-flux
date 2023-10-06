import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export type IProtectedPageProps = {
	redirectTo?: string;
	validadePage?: boolean;
	elementProps?: Record<string, unknown>;
	element?: React.FunctionComponent;
};

export const ProtectedPage: React.FC<IProtectedPageProps> = ({
	elementProps,
	element: Element,
	validadePage = true,
	redirectTo = "/login",
}) => {
	const user = false;

	if (validadePage) {
		if (!user) {
			return <Navigate to={redirectTo} />;
		}
	}

	if (Element) {
		return <Element {...(elementProps || {})} />;
	}

	return <Outlet />;
};
