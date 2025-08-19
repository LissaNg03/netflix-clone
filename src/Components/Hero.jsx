/** @format */

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
export default function Hero({ data }) {
	const [_data, set_Data] = useState([]);
	const navigateTo = useNavigate();

	useEffect(() => {
		set_Data(data.movies.slice(0, 10));
	}, [data]);

	function playHeroTrailer() {
		navigateTo("/watch-trailer", {
			replace: true,
			state: {
				trailer_URL: "https://www.youtube.com/embed/80dqOwAOhbo",
			},
		});
	}

	return (
		<section className="h-screen max-h-[1000px] max-small:min-h-[500px] max-md:h-[45vh] min-h-[700px] flex justify-start items-end relative w-full ">
			<img
				className="w-full z-[-1] align-middle object-cover object-center absolute top-0 left-0 h-full"
				src="assets/hero_banner.jpg"
				alt=""
			/>
			<div
				style={{
					background: "linear-gradient(to left, transparent,rgba(0, 0, 0, 1))",
				}}
				className="absolute z-0 top-0 left-0 w-[30%] h-full"
			></div>
			<div
				style={{
					background:
						"linear-gradient(to bottom, transparent,rgba(0, 0, 0, 1))",
				}}
				className="absolute z-10 bottom-0 left-0 w-full h-[50px]"
			></div>

			<div className="absolute top-1/2 max-lg:pl-[32px] left-0 pl-[64px] translate-y-[-30%] w-full flex-col items-start justify-end">
				<img
					className="w-1/4 object-cover mb-5 object-center"
					src="assets/hero_title.png"
					alt="hero_title"
				/>
				<p className=" small:max-w-[55%] text-white mb-5">
					Discovering his ties to a secret ancient order, a young man living in
					modern instanbul embarks on a quest to save the city from an immortal
					enemy.
				</p>
				<div className="flex mb-5 gap-3 w-fit justify-between items-center">
					<button
						onClick={playHeroTrailer}
						className="bg-white hover:opacity-90 transition-all duration-200 rounded-md cursor-pointer py-2 px-4 gap-2 flex justify-between items-center"
					>
						<img width={25} src="assets/play_icon.png" alt="" />
						Play
					</button>
					<button className="bg-slate-500 transition-all duration-200 hover:opacity-90 text-white rounded-md cursor-pointer py-2 px-4 gap-2 flex justify-between items-center">
						<img width={25} src="assets/info_icon.png" alt="" />
						More Info
					</button>
				</div>
				<div className="mb-11 max-small:hidden w-full h-[200px]">
					<h2 className="text-white text-2xl font-bold">Popular on Netflix</h2>
					<div className="flex gap-5 pl-4 overflow-x-auto w-full h-full ml-[-16px] justify-between items-center">
						{_data &&
							_data.map((movie, index) => {
								return (
									<MovieCard
										movieName={movie.title}
										index={index}
										duration={movie.duration}
										genres={movie.genres}
										year={movie.year}
										poster={movie.poster_url}
										trailer={movie.trailer_url}
										key={index}
										backdrop={movie.backdrop_url}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</section>
	);
}
