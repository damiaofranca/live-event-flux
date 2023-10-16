import { RouteObject } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { LayoutStructure } from "./Layout";

const ROUTES_PAGES: RouteObject[] = [
	{
		path: "",
		element: <Dashboard />,
	},
];

export const PRIVATE_PAGES = { ROUTES_PAGES, LayoutStructure };
