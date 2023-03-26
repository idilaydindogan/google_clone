import React from "react";
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";

const ImageSearcgPage = async ({ searchParams }) => {
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image`
	);

	const data = await response.json();
	const results = data.items;
	console.log("results are", data);
	if (!response.ok) {
		throw new Error("Something went wrong!");
	}

	if (!results) {
		return (
			<div className="flex flex-col justify-center items-center pt-10">
				<h1 className="text-3xl mb-4">No Results Found</h1>
				<p className="text-lg">
					Try searching something else or go back to homepage{" "}
					<Link className="text-blue-500" href="/">
						Home
					</Link>
				</p>
			</div>
		);
	}
	return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearcgPage;
