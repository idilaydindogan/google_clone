import React from "react";
import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

const ImageSearchResults = ({ results }) => {
	return (
		<div className="sm:pb-24 pb-40 mt-4">
			<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 gap-3 mb-10">
				{results.items.map((result) => (
					<div key={result.link} className="group">
						<div className="bg-gray-100 rounded-xl items-center flex justify-center">
							<Link href={result.image.contextLink} target="_blank">
								<img
									src={result.link}
									alt={result.title}
									className="h-60 hover:shadow-xl rounded-xl"
								/>
							</Link>
						</div>
						<div className="py-2 pl-2 hover:underline hover:decoration-1">
							<Link href={result.image.contextLink} target="_blank">
								<h2 className="text-gray-600 truncate">{result.title}</h2>
							</Link>
							<Link href={result.image.contextLink} target="_blank">
								<p className="text-gray-700">{result.displayLink}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
			<div className="ml-8 mb-10">
				<PaginationButtons />
			</div>
		</div>
	);
};

export default ImageSearchResults;
