import React from "react";

const loading = () => {
	return (
		<div className="flex flex-col sm:flex-row space-x-4">
			<div className="p-10 animate-pulse">
				<div className="bg-gray-200 rounded-xl mb-4 h-48 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-44"></div>
			</div>
			<div className="pl-10 sm:p-10 animate-pulse">
				<div className="bg-gray-200 rounded-xl mb-4 h-48 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-44"></div>
			</div>
			<div className="pl-10 pt-10 sm:p-10 animate-pulse">
				<div className="bg-gray-200 rounded-xl mb-4 h-48 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-48"></div>
				<div className="bg-gray-200 rounded-xl mb-2.5 h-2 w-44"></div>
			</div>
		</div>
	);
};

export default loading;
