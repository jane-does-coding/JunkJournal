"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
	const [current, setCurrent] = useState(0);

	const projects = [
		"/imgs/projects/project1.jpg",
		"/imgs/projects/project2.jpg",
		"/imgs/projects/project3.jpg",
		"/imgs/projects/project4.jpg",
		"/imgs/projects/project5.jpg",
		"/imgs/projects/project6.jpg",
	];

	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % projects.length);
	};

	const handlePrev = () => {
		setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
	};

	return (
		<div className="bg-neutral-600 h-screen w-full overflow-hidden relative">
			<Link
				href={"/"}
				className="cursor-pointer w-[8vh] h-[8vh] bg-white flex items-start justify-start pt-[1.75vh] pl-[1vw] rounded-br-full  hover:scale-110 transition absolute top-0 left-0 z-[10]"
			>
				<FaCaretLeft className="text-[3vh]" />
			</Link>

			<img
				src="/imgs/board.jpg"
				className="w-full h-screen object-cover opacity-95"
				alt=""
			/>
			<img
				src="/imgs/flower2.png"
				className="w-[20vw] absolute bottom-0 rotate-[-20deg] left-[-2vw] z-[1]"
				alt=""
			/>
			<img
				src="/imgs/paper3.png"
				className="w-[20vw] absolute top-[-4vh] rotate-[-90deg] right-[0vw] z-[1]"
				alt=""
			/>

			<img
				src="/imgs/smile.png"
				className="w-[20vw] absolute bottom-[1vh] rotate-[0deg] right-[10vw] z-[1]"
				alt=""
			/>

			<img
				src="/imgs/paper4.png"
				className="w-[25vw] h-[12.5vh] absolute bottom-[5vh] rotate-[0deg] right-[40vw] z-[1]"
				alt=""
			/>
			<h2 className="text-[3.5vh] font-extralight absolute bottom-[9vh] rotate-[0deg] right-[43.4vw] hand-coffe z-[10]">
				{"Cool Designsss (Figma)"}
			</h2>

			<div className="flex flex-col h-screen items-center justify-start absolute top-0 left-[5vw] w-[30vw]">
				<div className="relative w-[30vw] flex items-center justify-center mt-[5vh]">
					<img
						src="/imgs/paper4.png"
						className="w-[40vw] h-[20vh] absolute top-0 left-0 z-[1] opacity-80"
						alt=""
					/>
					<h2 className="text-[7vh] mt-[3.5vh] font-extralight hand-coffe relative z-[10]">
						My Designs
					</h2>
					<img
						src="/imgs/paper4.png"
						className="w-[17.5vw] h-[12.5vh] absolute bottom-[-13vh] right-[-5vw] z-[1]"
						alt=""
					/>
					<h2 className="text-[3.5vh] font-extralight absolute bottom-[-9vh] right-[-1vw] hand-coffe z-[10]">
						Take a look...
					</h2>
					<img
						src="/imgs/paper4.png"
						className="w-[40vw] h-[42.5vh] absolute top-[29vh] left-0 z-[1] opacity-75"
						alt=""
					/>
					<p className="absolute top-[37.5vh] text-center leading-[6vh] text-[3vh] font-extralight hand-coffe w-[27vw] pr-[3vw] pl-0 right-[0vw] z-[10]">
						The main reason I started web dev, is because I wanted to design
						websites, I was first a UI/UX designer, before I became a dev.
					</p>
				</div>
			</div>

			{/* Left Button */}
			<div className="flex flex-col h-[90vh] items-center justify-center absolute top-0 right-[57.5vw]">
				<button
					onClick={handlePrev}
					className="cursor-pointer w-[5vh] h-[5vh] bg-white flex items-center justify-center rounded-full hover:scale-110 transition"
				>
					<FaCaretLeft className="text-[3vh]" />
				</button>
			</div>

			{/* Project Display */}
			<div className="flex flex-col h-[90vh] items-center justify-center absolute top-0 right-[7.5vw]">
				<div className="flex flex-col h-fit items-center justify-center relative">
					<img
						src="/imgs/projects/cam-nobg.png"
						className="w-[50vw] h-[55vh] rounded-[0.5vh]"
						alt=""
					/>

					<AnimatePresence mode="wait">
						<motion.img
							key={current}
							src={projects[current]}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
							className="absolute top-[10vh] left-[3vw] w-[32.5vw] h-[40vh] object-cover rounded-[0.5vh] shadow-xl py-[1vh] px-[1vh]"
							alt={`Project ${current + 1}`}
						/>
					</AnimatePresence>
				</div>
			</div>

			{/* Right Button */}
			<div className="flex flex-col h-[90vh] items-center justify-center absolute top-0 right-[5vw]">
				<button
					onClick={handleNext}
					className="cursor-pointer w-[5vh] h-[5vh] bg-white flex items-center justify-center rounded-full hover:scale-110 transition"
				>
					<FaCaretRight className="text-[3vh]" />
				</button>
			</div>
		</div>
	);
};

export default Page;
