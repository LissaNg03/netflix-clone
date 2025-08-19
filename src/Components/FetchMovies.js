/** @format */

import React, { useState, useEffect } from "react";

// Example custom hook
export default function FetchMovies() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("/netflix-clone/movies.json")
			.then((res) => res.json())
			.then(setData)
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	return { data, loading, error };
}
