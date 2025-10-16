import React from "react";
import Book from "../../../components/Book/Book";

const Page = () => {
	return (
		<div className="">
			{/* Background */}
			{/* <img
				src="/imgs/board.jpg"
				className="w-full h-screen object-cover opacity-95 z-[1]"
				alt=""
			/> */}
			<div className="z-[20]">
				<Book />
			</div>
		</div>
	);
};

export default Page;
