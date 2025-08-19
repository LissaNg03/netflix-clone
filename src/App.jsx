/** @format */
import React from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import SignUp from "./Pages/SignUp";
import HomePage from "./Pages/HomePage";
import WatchTrailer from "./Pages/WatchTrailer";
import "./index.css";
const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <SignUp />,
		},
		{
			path: "/home",
			element: <HomePage />,
		},
		{
			path: "/watch-trailer",
			element: <WatchTrailer />,
		},
		// Add this redirect route 👇
		{
			path: "/netflix-clone",
			element: <Navigate to="/" replace />,
		},
	],
	{
		basename: window.location.pathname.startsWith("/netflix-clone")
			? "/netflix-clone/"
			: "/",
	}
);

export default function App() {
	return <RouterProvider router={router} />;
}
