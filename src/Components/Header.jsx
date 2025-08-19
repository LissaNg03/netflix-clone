/** @format */
import React, { useEffect, useState } from "react";
import { localAPI } from "../index"; // assuming navLinks are here
import { useNavigate } from "react-router-dom";

export default function Header() {
	const { navLinks } = localAPI;
	const navigate = useNavigate();
	const [scrollY, setScrollY] = useState(window.scrollY);

	useEffect(() => {
		function handleScroll() {
			setScrollY(window.scrollY);
		}
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	console.log("scrollY: " + scrollY);
	return (
		<header
			style={{
				background: scrollY >= 100 ? "rgba(30,30,30,1)" : "rgba(0,0,0,0)",
			}}
			className="fixed transition-all duration-200 z-50 top-0 left-0 w-full flex justify-between items-center text-white px-6 py-4"
		>
			<div className="flex items-center gap-6">
				<img
					className="w-[100px] max-xl:w-[80px]"
					src="assets/logo.png"
					alt="logo"
				/>
				<nav className="max-md:hidden">
					<ul className="flex gap-4">
						{navLinks.map((link, i) => (
							<li
								key={i}
								className="cursor-pointer whitespace-nowrap hover:text-red-600  max-lg:text-sm transition-colors"
							>
								{link}
							</li>
						))}
					</ul>
				</nav>
			</div>

			<div className="flex items-center gap-4">
				<img
					className="cursor-pointer"
					src="assets/search_icon.svg"
					alt="search"
				/>
				<p className="max-smallest:max-w-[70px] truncate">
					{localStorage.getItem("username") || "Children"}
				</p>
				<img
					className="cursor-pointer"
					src="assets/bell_icon.svg"
					alt="notifications"
				/>
				<div className="relative group flex items-center gap-2 cursor-pointer">
					<img
						className="rounded-sm"
						src="assets/profile_img.png"
						alt="profile"
					/>
					<img src="assets/caret_icon.svg" alt="caret" />
					<p
						onClick={() => navigate("/", { replace: true })}
						className="absolute top-[150%] right-0 bg-slate-600 rounded-md p-3 text-sm whitespace-nowrap invisible group-hover:visible hover:underline transition-all"
					>
						Sign Out of Netflix
					</p>
				</div>
			</div>
		</header>
	);
}
