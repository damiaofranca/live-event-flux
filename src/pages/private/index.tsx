import { RouteObject } from "react-router-dom";

import { Dashboard } from "./Dashboard";
import { LayoutStructure } from "./Layout";
import { DetailEvent } from "./DetailEvent";

const ROUTES_PAGES: RouteObject[] = [
	{
		path: "",
		element: <Dashboard />,
	},
	{
		path: "event/:id",
		element: <DetailEvent />,
	},
];

export const PRIVATE_PAGES = { ROUTES_PAGES, LayoutStructure };
