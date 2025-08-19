/** @format */

import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WatchTrailer() {
	const navigateBack = useNavigate();
	const location = useLocation();
	const videoURL = location.state || "";

	useEffect(() => {
		console.log(videoURL);
	}, []);
	return (
		<section className="relative overflow-hidden flex justify-center items-center w-screen h-screen bg">
			<img
				onClick={() => navigateBack("/home", { replace: true })}
				className="absolute top-6 cursor-pointer w-[50px] left-6"
				src="assets/back_arrow_icon.png"
				alt="go_back_icon"
			/>

			<iframe
				className="w-[100%] mx-auto max-h-full h-auto aspect-video"
				src={videoURL.trailer_URL}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; fullscreen ; encrypted-media; "
				allowFullScreen
			></iframe>
		</section>
	);
}
