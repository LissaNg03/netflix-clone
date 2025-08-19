/** @format */

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
export default function CategorySection({ index, data, name }) {
	const [_data, set_Data] = useState([]);

	useEffect(() => {
		if (index == "0") {
			set_Data(data.movies.slice(10, 21));
			console.log(_data);
		} else if (index == "1") {
			set_Data(data.movies.slice(21, 31));
			console.log(_data);
		} else if (index == "2") {
			set_Data(data.movies.slice(31, 41));
			console.log(_data);
		} else if (index == "3") {
			set_Data(data.movies.slice(51, 61));
			console.log(_data);
		}
	}, [data]);

	return (
		<section className="bg-[#010101]  w-full h-200px">
			<h2 className="text-white text-2xl  font-bold">{name}</h2>
			<div className="flex gap-5 py-4  pl-4 overflow-x-auto w-full h-full justify-between ml-[-16px] items-center ">
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
		</section>
	);
}
