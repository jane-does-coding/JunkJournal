"use client";
import React from "react";
import Book from "../../../components/Book/Book";
import Link from "next/link";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Page = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			{/* Background image */}
			<img
				src="/imgs/board.jpg"
				alt="Background board"
				className="absolute inset-0 w-full h-full object-cover opacity-95 -z-10"
			/>

			{/* Back button */}
			<Link
				href={"/"}
				className="cursor-pointer w-[8vh] h-[8vh] bg-white flex items-start justify-start pt-[1.75vh] pl-[1vw] rounded-br-full hover:scale-110 transition absolute top-0 left-0 z-[20]"
			>
				<FaCaretLeft className="text-[3vh]" />
			</Link>

			<img
				src="/imgs/flower2.png"
				className="w-[20vw] fixed top-[-3vh] rotate-[-30deg] right-[-4vw] z-[15]"
				alt=""
			/>
			<img
				src="/imgs/smile.png"
				className="w-[15vw] absolute top-[-2vh] rotate-[5deg] left-[20vw] z-[1]"
				alt=""
			/>
			<img
				src="/imgs/eyes.png"
				className="w-[25vw] fixed bottom-[-8vh] rotate-[0deg] right-[-7vw] z-[15]"
				alt=""
			/>
			<img
				src="/imgs/paper3.png"
				className="w-[20vw] fixed bottom-[-4vh] rotate-[90deg] left-[0vw] z-[15]"
				alt=""
			/>

			{/* Flipbook content */}
			<div className="relative z-10 flex items-center justify-center h-full">
				<Book />
			</div>
		</div>
	);
};

export default Page;
