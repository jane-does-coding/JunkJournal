"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Page = () => {
	const images = [
		"/imgs/projects/project1.jpg",
		"/imgs/projects/project2.jpg",
		"/imgs/projects/project3.jpg",
		"/imgs/projects/project4.jpg",
		"/imgs/projects/project5.jpg",
		"/imgs/projects/project6.jpg",
		"/imgs/projects/project7.jpg",
		"/imgs/projects/project8.png",
		"/imgs/projects/project9.png",
		"/imgs/projects/project10.png",
		"/imgs/projects/project11.png",
		"/imgs/projects/project12.png",
		"/imgs/projects/project13.png",
		"/imgs/projects/project14.png",
		"/imgs/projects/project15.png",
		"/imgs/projects/project16.png",
		"/imgs/projects/project17.png",
		"/imgs/projects/project18.png",
		"/imgs/projects/project19.png",
		"/imgs/projects/project20.png",
	];

	const [offsetY, setOffsetY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setOffsetY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto pb-[35vh]">
			<img
				src="/imgs/board.jpg"
				className="w-full h-screen object-cover opacity-95 z-[1] fixed top-0 left-0"
				alt=""
			/>
			<img
				src="/imgs/flower2.png"
				className="w-[20vw] fixed top-[-3vh] rotate-[-30deg] right-[-4vw] z-[15]"
				alt=""
			/>
			<img
				src="/imgs/note2.png"
				className="w-[10vw] absolute top-[-1vh] rotate-[10deg] left-[25vw] z-[1]"
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

			<Link
				href={"/"}
				className="cursor-pointer w-[8vh] h-[8vh] bg-white flex items-start justify-start pt-[1.75vh] pl-[1vw] rounded-br-full  hover:scale-110 transition fixed top-0 left-0 z-[15]"
			>
				<FaCaretLeft className="text-[3vh]" />
			</Link>

			{/* Gallery Header */}
			<div className="relative z-10 flex flex-col items-center justify-center py-[5vh] text-black mb-[5vh] mt-[2vh]">
				<img
					src="/imgs/paper4.png"
					className="w-[40vw] h-[22.5vh] absolute top-[1vh] left-[50%] translate-x-[-50%] z-[1] opacity-80"
					alt=""
				/>
				<h1 className="text-[6vh] font-bold tracking-wide super-arena w-fit z-[10] mb-0 pb-0">
					My Project Gallery
				</h1>
				<p className="text-[2.75vh] text-neutral-900 hand-coffe z-[10] my-0 py-0">
					Scroll down to explore my work
				</p>
			</div>

			{/* Parallax Gallery Grid */}
			<div className="relative z-10 px-[8vw] pb-32">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{images.map((src, index) => {
						// Each column gets a slightly different parallax speed
						const columnSpeed = (index % 3) * 0.1 + 0.05; // 0.05, 0.15, 0.25
						return (
							<div
								key={index}
								className="overflow-hidden rounded-2xl shadow-xl"
								style={{
									transform: `translateY(${offsetY * columnSpeed}px)`,
								}}
							>
								<img
									src={src}
									alt={`Project ${index + 1}`}
									className="w-full aspect-[3/2] object-cover rounded-2xl transition-transform duration-200 hover:scale-105"
								/>
							</div>
						);
					})}
				</div>
			</div>

			{/* Footer */}
			{/* <div className="relative z-10 text-center py-12 text-neutral-500">
				<p>© {new Date().getFullYear()} Janey — All Rights Reserved</p>
			</div> */}
		</div>
	);
};

export default Page;
