import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const WebSearchResults = ({ results }) => {
	return (
		<div className="w-full mx-auto px-3 pb-24 pl-10">
			<p className="text-gray-600 text-sm mt-3 mb-5">
				About {results.searchInformation?.formattedTotalResults} results (
				{results.searchInformation?.formattedSearchTime} seconds)
			</p>
			{results.items?.map((result) => (
				<div key={result.cacheId} className="space-y-1 mb-8 max-w-xl">
					<div className="text-sm text-gray-700">
						<Link href={result.link} className="truncate" target="_blank">
							{result.formattedUrl}
						</Link>
					</div>
					<div className="text-blue-800 text-xl truncate font-semibold hover:underline hover:decoration-2">
						<Link href={result.link} target="_blank">
							{result.title}
						</Link>
					</div>
					<div className="text-base">
						<p>{parse(result.htmlSnippet)}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default WebSearchResults;
