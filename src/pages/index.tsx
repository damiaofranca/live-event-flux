import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PUBLIC_SCREENS } from "./public";

export const Pages: FC = () => {
	const router = createBrowserRouter([
		// {
		// 	path: "/app",
		// 	children: ROUTES_PAGES,
		// 	element: (
		// 		<COMPONENTS.ProtectedPage element={Layout} validadePage={true} />
		// 	),
		// },
		{
			path: "/",
			element: <PUBLIC_SCREENS.LandingPage />,
		},
		{
			path: "/login",
			element: <PUBLIC_SCREENS.SignIn />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default Pages;
