import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

const SearchHeader = () => {
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center justify-between">
				<Link href={"/"}>
					<Image
						src={"/Google.png"}
						width={120}
						height="40"
						alt="google logo"
					/>
				</Link>
				<div className="flex-1">
					<SearchBox />
				</div>
				<div className=" hidden md:inline-flex space-x-2 text-gray-600">
					<RiSettings3Line className="header-icon" />
					<TbGridDots className="header-icon" />
				</div>
				<button className="bg-blue-500 rounded-md px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-all text-white ml-2">
					Sign In
				</button>
			</div>
			<SearchHeaderOptions />
		</header>
	);
};

export default SearchHeader;
