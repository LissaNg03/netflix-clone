/** @format */
import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import Footer from "../Components/Footer";
import FetchMovies from "../Components/FetchMovies";
export default function HomePage() {
	const { data, loading, error } = FetchMovies();

	if (loading) {
		return (
			<main className="bg w-screen h-screen grid place-content-center">
				<img src="/netflix-clone/assets/netflix_spinner.gif" alt="Loading..." />
			</main>
		);
	}

	if (error) {
		return (
			<main className="bg text-white w-screen h-screen grid place-content-center">
				<h2>Server Error:</h2>
			</main>
		);
	}

	return (
		<main className="w-screen">
			<Header />
			<Hero data={data} />
			<CategorySection index="0" data={data} name="BlockBuster Movies" />
			<CategorySection index="1" data={data} name="Only on Netflix" />
			<CategorySection index="2" data={data} name="Editor's Choice" />
			<CategorySection index="3" data={data} name="Top Picks for you" />
			<Footer />
		</main>
	);
}
