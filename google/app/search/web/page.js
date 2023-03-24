import React from "react";
import Link from "next/link";

const WebSearcgPage = async ({ searchParams }) => {
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
	);

	const data = await response.json();
	const results = data.items;

	if (!results) {
		return (
			<div className="flex flex-col justify-center items-center pt-10">
				<h1 className="text-3xl mb-4">No Results Found</h1>
				<p className="text-lg">
					Try searcing something else or go back to homepage{" "}
					<Link className="text-blue-500" href="/">
						Home
					</Link>
				</p>
			</div>
		);
	}
	return (
		<>
			{results &&
				results.map((result) => <h1 KEY={result.cacheId}>{result.title}</h1>)}
		</>
	);
};

export default WebSearcgPage;
