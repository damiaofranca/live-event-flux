import { FC } from "react";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { PUBLIC_SCREENS } from "./public";
import { PRIVATE_PAGES } from "./private";
import { AuthProvider } from "@/providers/auth";
import { ThemeProvider } from "@/providers/theme";
import { ProtectedPage } from "@/components/protect-page";
import "react-toastify/dist/ReactToastify.min.css";

export const Pages: FC = () => {
	const router = createBrowserRouter([
		{
			path: "/app",
			children: PRIVATE_PAGES.ROUTES_PAGES,
			element: (
				<AuthProvider>
					<ProtectedPage
						validadePage={true}
						element={PRIVATE_PAGES.LayoutStructure}
					/>
				</AuthProvider>
			),
		},
		{
			path: "/login",
			element: (
				<AuthProvider>
					{" "}
					<PUBLIC_SCREENS.SignIn />
				</AuthProvider>
			),
		},

		{
			path: "/register",
			element: (
				<AuthProvider>
					<PUBLIC_SCREENS.SignUp />
				</AuthProvider>
			),
		},

		{
			path: "/",
			element: <PUBLIC_SCREENS.LandingPage />,
		},
	]);

	return (
		<ThemeProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</ThemeProvider>
	);
};

export default Pages;
