/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
	const navigateToHome = useNavigate();
	const [signUp, setSignUp] = useState(true);

	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (signUp) {
			localStorage.setItem("username", username.trim());
			localStorage.setItem("email", email.trim());
			localStorage.setItem("password", password.trim());
			setSignUp(false);
			setUserName("");
			setEmail("");
			setPassword("");
		} else {
			if (
				email.trim() === localStorage.getItem("email") &&
				password.trim() === localStorage.getItem("password")
			) {
				navigateToHome("/home", { replace: true });
			} else {
				alert("WRONG CREDENTIALS");
			}
		}
	}
	return (
		<section className="relative  w-screen h-screen bg-no-repeat bg-cover bg-center bg-[url('/netflix-clone/assets/background_banner.jpg')] grid place-content-center">
			<img
				className="absolute top-5 left-[10vw]  max-sm:left-[20px] max-sm:w-[140px] w-[180px]"
				src="/netflix-clone/assets/logo.png"
				alt=""
			/>
			<form
				className="bg-[rgba(0,0,0,0.9)] scale-90 rounded-lg opacity-100 text-white max-smallest:scale-90 max-w-[400px] w-[90vw] p-12 h-fit"
				onSubmit={handleSubmit}
			>
				<h1 className="text-[2rem] mb-5">Sign {signUp ? "Up" : "In"}</h1>
				{signUp && (
					<input
						onChange={(e) => setUserName(e.target.value)}
						value={username}
						className=""
						type="text"
						placeholder="Your Name"
						required
					/>
				)}

				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					type="email"
					placeholder="Email"
					required
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					placeholder="Password"
					required
				/>
				<button type="submit">Sign {signUp ? "Up" : "In"}</button>
				<div className="flex justify-between items-center text-sm text-slate-300 mb-12">
					<span className="flex text-sm justify-start gap-2 items-center">
						<input
							className="scale-125"
							type="checkbox"
							name="remember_me"
							id="remember_me"
						/>
						<label className="text-sm " htmlFor="remember_me">
							Remember Me
						</label>
					</span>
					<span className="hover:underline cursor-pointer">Need Help?</span>
				</div>
				<div className="flex mb-5 text-sm gap-2 justify-start items-center">
					<p className="text-slate-300">
						{signUp ? "Already have an account? " : "New to Netflix ? "}
					</p>
					<button
						onClick={() => setSignUp(!signUp)}
						className="hover:underline cursor-pointer"
					>
						Sign {signUp ? "In" : "Up"} Now
					</button>
				</div>
			</form>
		</section>
	);
}
