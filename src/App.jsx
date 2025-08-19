/** @format */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
	],
	{
		basename:
			window.location.hostname === "localhost" ? "/" : "/netflix-clone/",
	}
);

export default function App() {
	return <RouterProvider router={router} />;
}
