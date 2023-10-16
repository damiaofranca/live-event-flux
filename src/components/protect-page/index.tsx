import React from "react";
import { fromUnixTime, isAfter } from "date-fns";
import { Navigate, Outlet } from "react-router-dom";

import { decodeHash, removeToken } from "@/utils/script";

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
	const user = decodeHash();

	if (!user) {
		removeToken();
		return <Navigate to={redirectTo} />;
	}

	if (validadePage) {
		if (!user || isAfter(new Date(), fromUnixTime(user.exp))) {
			return <Navigate to={redirectTo} />;
		}
	}

	if (Element) {
		return <Element {...(elementProps || {})} />;
	}

	return <Outlet />;
};
