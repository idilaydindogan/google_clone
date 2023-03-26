"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const PaginationButtons = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const searchTerm = searchParams.get("searchTerm");
	const startIndex = +searchParams.get("start") || 1;

	return (
		<div className="flex justify-center sm:justify-start space-x-14 text-xl text-blue-700 pb-10">
			{startIndex >= 10 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
				>
					<div className="flex items-center space-x-4 hover:underline cursor-pointer">
						<p>Previous</p>
						<BsChevronLeft />
					</div>
				</Link>
			)}
			{startIndex <= 90 && (
				<Link
					href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
				>
					<div className="flex items-center space-x-4 hover:underline cursor-pointer">
						<BsChevronRight />
						<p>Next</p>
					</div>
				</Link>
			)}
		</div>
	);
};

export default PaginationButtons;
