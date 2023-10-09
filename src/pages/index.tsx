import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PUBLIC_SCREENS } from "./public";
import { AuthProvider } from "@/providers/auth";
import { PRIVATE_PAGES } from "./private";
import { ProtectedPage } from "@/components/protect-page";

export const Pages: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/app",
			children: PRIVATE_PAGES.ROUTES_PAGES,
			element: (
				<ProtectedPage element={PRIVATE_PAGES.Layout} validadePage={true} />
			),
		},
		{
			path: "/login",
			element: <PUBLIC_SCREENS.SignIn />,
		},

		{
			path: "/",
			element: <PUBLIC_SCREENS.LandingPage />,
		},
	]);

	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
};

export default Pages;
