/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCard({
	movieName,
	duration,
	genres,
	year,
	poster,
	trailer,
}) {
	const navigateToWatch = useNavigate();

	function handleCardClick() {
		navigateToWatch("/watch-trailer", {
			replace: true,
			state: {
				trailer_URL: trailer,
			},
		});
	}

	return (
		<div
			onClick={handleCardClick}
			className="relative group p-4  flex flex-col justify-between items-start rounded-md cursor-pointer hover:scale-[1.1] transition-all duration-200 overflow-hidden group w-[260px] min-w-[260px] h-[150px] text-white"
		>
			<img
				className="absolute object-cover  object-top top-0 left-0 w-full h-full"
				src={poster}
				alt="move_poster"
			/>
			<div className="absolute transition-all opacity-0 duration-200 top-0 left-0 w-full h-full bg group-hover:opacity-50"></div>

			<h3 className="translate-y-[-500%] text-xl transition-all duration-200 group-hover:translate-y-0 overflow-hidden">
				{movieName} <span> ({year})</span>
			</h3>
			<p className="translate-y-[500%] text-slate-200 text-sm w-full flex justify-between items-center group-hover:translate-y-0 transition-all duration-200 overflow-hidden">
				<span>{genres}</span> <span>{duration}</span>
			</p>
		</div>
	);
}
