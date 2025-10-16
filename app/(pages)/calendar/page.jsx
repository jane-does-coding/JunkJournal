"use client";

import { useState } from "react";
import Link from "next/link";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const Page = () => {
	const slides = [
		{
			id: 1,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<div className="flex z-[10] gap-[1vw]">
						{/* <img
							src="/imgs/devpost-ss.png"
							className="z-[10] rounded-[1vh] h-[20vw]"
							alt=""
						/> */}
						<div className="flex flex-col items-center justify-center">
							<h1 className="text-[6vh] font-bold super-arena z-[10]">
								January 2025
							</h1>
							<p className="text-lg z-[10] text-[2.25vh] italic w-[25vw] text-center hand-coffe">
								First Month of 2025! <br /> Finishing of 2024 strong, and
								starting 2025 by learinng Nextjs, and exploring new things
							</p>
							<img
								src="/imgs/github-chart.png"
								className="z-[10] rounded-[1vh] w-[30vw] mt-[2.5vh]"
								alt=""
							/>
						</div>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 2,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<div className="flex flex-col z-[10] items-center justify-center">
						<h1 className="text-[6vh] font-bold super-arena z-[10]">
							Febuary 2025
						</h1>
						<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
							Second month of 2025!
						</p>
						<div className="flex items-center justify-center z-[10] w-[50vw] gap-[2vw] mt-[2vh]">
							<img
								src="/imgs/projects/project3.jpg"
								className="w-[22.5vw] h-[20vh] object-cover z-[10] rounded-[1vh]"
								alt="??"
							/>
							<div className="flex flex-col items-start justify-center">
								<h2 className="text-[4vh] mb-[1vh] hand-coffe">
									Built first Nextjs project
								</h2>
								<p className="text-[2.5vh] font-extralight hand-coffe">
									I learned nextjs, and started building new projects with it,
									my first real project was Eclipso and it ended up winning a
									hackathon with it!
								</p>
							</div>
						</div>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 3,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<div className="flex flex-col z-[10] items-center justify-center">
						<h1 className="text-[6vh] font-bold super-arena z-[10]">
							March 2025
						</h1>
						<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
							Third month of 2025!
						</p>
						<div className="flex flex-col z-[10] items-center justify-center w-[50vw] gap-[2vw] mt-[2vh]">
							<img
								src="/imgs/wins-ss.png"
								className="w-[35vw] h-[12.5vh] object-cover z-[10] rounded-[1vh]"
								alt="??"
							/>
							<div className="flex flex-col items-start justify-center">
								{/* <h2 className="text-[4vh] mb-[1vh] hand-coffe">
									Won a hackathon!
								</h2> */}
								<p className="text-[2.5vh] font-extralight hand-coffe">
									Finally got my skills in Nextjs good enough to win a hackathon
								</p>
							</div>
						</div>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 4,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<div className="flex flex-col z-[10] items-center justify-center">
						<h1 className="text-[6vh] font-bold super-arena z-[10]">
							April 2025
						</h1>
						<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
							{"My birthday is that month!"}
						</p>
						<div className="flex z-[10] items-center justify-center w-[50vw] gap-[2vw] mt-[2vh]">
							<img
								src="/imgs/projects/project7.jpg"
								className="w-[25vw] h-[20.5vh] object-cover z-[10] rounded-[1vh]"
								alt="??"
							/>
							<img
								src="/imgs/projects/project8.png"
								className="w-[25vw] h-[20.5vh] object-cover z-[10] rounded-[1vh]"
								alt="??"
							/>
							<div className="flex flex-col items-start justify-center">
								{/* <h2 className="text-[4vh] mb-[1vh] hand-coffe">
									Won a hackathon!
								</h2> */}
								<p className="text-[2.5vh] font-extralight hand-coffe">
									Making some more projects
								</p>
							</div>
						</div>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 5,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<div className="flex flex-col z-[10] items-center justify-center">
						<h1 className="text-[6vh] font-bold super-arena z-[10]">
							May 2025
						</h1>
						<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
							ALmost Summer :D
						</p>
						<div className="flex items-center justify-center z-[10] w-[50vw] gap-[2vw] mt-[2vh]">
							<img
								src="/imgs/projects/project9.png"
								className="w-[22.5vw] h-[20vh] object-cover z-[10] rounded-[1vh]"
								alt="??"
							/>
							<div className="flex flex-col items-start justify-center">
								<h2 className="text-[4vh] mb-[1vh] hand-coffe">
									Discovering Animation
								</h2>
								<p className="text-[2.5vh] font-extralight hand-coffe">
									Started Learning Animations with Framer Motion
								</p>
								<div className="flex items-center justify-evenly w-full">
									<Link
										className="text-blue-800 text-[2vh] underline mt-[1vh] hover:text-blue-600"
										href={"https://face-scape.vercel.app/"}
									>
										Demo
									</Link>
									<Link
										className="text-blue-800 text-[2vh] underline mt-[1vh] hover:text-blue-600"
										href={"https://github.com/jane-does-coding/FaceScape"}
									>
										Github
									</Link>
								</div>
							</div>
						</div>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 6,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<div className="flex flex-col z-[10] items-center justify-center">
						<h1 className="text-[6vh] font-bold super-arena z-[10]">
							June 2025
						</h1>
						<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
							First month of Summer! :D
						</p>
						<div className="flex flex-col items-center justify-center z-[10] w-[50vw] gap-[2vw] mt-[2vh]">
							<div className="flex gap-[2vw]">
								<img
									src="/imgs/projects/project10.png"
									className="w-[18vw] h-[20vh] object-cover z-[10] rounded-[1vh]"
									alt="??"
								/>
								<img
									src="/imgs/projects/project11.png"
									className="w-[18vw] h-[20vh] object-cover z-[10] rounded-[1vh]"
									alt="??"
								/>
							</div>
							<div className="flex flex-col items-start justify-center">
								<p className="text-[2.5vh] font-extralight hand-coffe">
									Started Implimenting AI into my websites
								</p>
							</div>
						</div>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 7,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<h1 className="text-[6vh] font-bold super-arena z-[10]">July 2025</h1>
					<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
						Middle of Summer! :D
					</p>
					<div className="flex gap-[2vw] w-[45vw] items-center justify-center">
						<p className="text-lg z-[10] hand-coffe text-[2.5vh]">
							I started applying for jobs, and started a part-time internship at
							Reffeered.fyi for designing and developing their website and
							workflows
						</p>
						<img
							src="/imgs/referred.png"
							className="w-[20vh] h-[20vh] object-cover z-[10] rounded-[1vh]"
							alt="??"
						/>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 8,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<h1 className="text-[6vh] font-bold super-arena z-[10]">July 2025</h1>
					<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
						Last month of Summer! :{"("}
					</p>
					<div className="flex gap-[2vw] w-[40vw] items-center justify-center">
						<p className="text-lg z-[10] hand-coffe text-[2.5vh]">
							Finished my internship at Reffered.fyi, and learned a lot about
							structiring workflows and web development.
						</p>
						<img
							src="/imgs/referred.png"
							className="w-[20vh] h-[20vh] object-cover z-[10] rounded-[1vh]"
							alt="??"
						/>
					</div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 9,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<h1 className="text-[6vh] font-bold super-arena z-[10]">
						September 2025
					</h1>
					<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
						Started participating in Athena Award event!! and made many awesome
						websites
					</p>
					<div className="grid grid-cols-4 gap-[1vw] z-[10] mt-[1vh]">
						<img
							src="/imgs/projects/project1.jpg"
							className="w-[12.5vw] h-[17.5vh] object-cover rounded-[1vh]"
							alt=""
						/>
						<img
							src="/imgs/projects/project2.jpg"
							className="w-[12.5vw] h-[17.5vh] object-cover rounded-[1vh]"
							alt=""
						/>
						<img
							src="/imgs/projects/project5.jpg"
							className="w-[12.5vw] h-[17.5vh] object-cover rounded-[1vh]"
							alt=""
						/>
						<img
							src="/imgs/projects/project6.jpg"
							className="w-[12.5vw] h-[17.5vh] object-cover rounded-[1vh]"
							alt=""
						/>
					</div>

					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 10,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<h1 className="text-[6vh] font-bold super-arena z-[10]">
						October 2025
					</h1>
					<p className="text-lg z-[10] hand-coffe text-[2.25vh]">
						Done with Athena Award, and got over 140 hours of coding withing 3
						months!
					</p>
					<div className="flex w-[50vw] items-center justify-center">
						<p className="text-lg z-[10] hand-coffe text-[2.75vh]">
							During Athena Hacks, I spent over 140 hours coding, and made over
							12 fullstack, complete projects.
						</p>
						<img
							src="/imgs/projects/banner.png"
							className="w-[25vw] h-[25vh] z-[10] object-cover rounded-[1vh]"
							alt=""
						/>
					</div>
					<div className="grid grid-cols-2 gap-[2vw]"></div>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 11,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<h1 className="text-[6vh] font-bold super-arena z-[10]">
						November 2025
					</h1>
					<p className="text-[2.25vh] z-[10] hand-coffe">
						Excited to see what comes next!
					</p>
					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
		{
			id: 12,
			content: (
				<div className="flex flex-col items-center justify-center gap-4 relative w-[70vw] h-[55vh]">
					<h1 className="text-[6vh] font-bold super-arena z-[10]">
						December 2025
					</h1>
					<p className="text-[2.25vh] z-[10] hand-coffe">
						Excited to see what comes next!
					</p>

					<img
						src="/imgs/paper4.png"
						alt="???"
						className="absolute top-[0vh] left-0 w-[80vw] h-[55vh] z-[1] opacity-80"
					/>
				</div>
			),
		},
	];

	const [index, setIndex] = useState(0);

	const handlePrev = () => {
		setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="bg-neutral-600 h-screen w-full overflow-hidden relative">
			<img
				src="/imgs/paper3.png"
				className="w-[20vw] absolute bottom-[-4vh] rotate-[90deg] left-[0vw] z-[1]"
				alt=""
			/>

			<img
				src="/imgs/smile.png"
				className="w-[20vw] absolute top-[0vh] rotate-[15deg] right-[1vw] z-[1]"
				alt=""
			/>

			<img
				src="/imgs/eyes.png"
				className="w-[25vw] absolute bottom-[-8vh] rotate-[0deg] right-[-7vw] z-[1]"
				alt=""
			/>

			{/* Back button */}
			<Link
				href={"/"}
				className="cursor-pointer w-[8vh] h-[8vh] bg-white flex items-start justify-start pt-[1.75vh] pl-[1vw] rounded-br-full hover:scale-110 transition absolute top-0 left-0 z-[20]"
			>
				<FaCaretLeft className="text-[3vh]" />
			</Link>

			{/* Background */}
			<img
				src="/imgs/board.jpg"
				className="w-full h-screen object-cover opacity-95"
				alt=""
			/>

			{/* Center image */}
			<img
				src="/imgs/2025.png"
				className="w-[25vw] absolute top-[5vh] rounded-[1vh] rotate-[-0deg] left-[40vw] z-[10] shadow-neutral-800/60 hover:shadow-2xl hover:rotate-[2deg] hover:scale-105 transition shadow-lg cursor-pointer"
				alt=""
			/>

			{/* Carousel container */}
			<div className="w-full h-[55vh] absolute bottom-[17.5vh]">
				<div
					className="flex transition-transform duration-500 ease-in-out h-full pl-[10vw]"
					style={{ transform: `translateX(-${index * 80}vw)` }}
				>
					{slides.map((slide, i) => (
						<div
							key={i}
							className={`w-[80vw] min-w-[80vw] flex items-center justify-center text-3xl font-bold ${
								i % 3 === 0
									? "bg-green-100/0"
									: i % 3 === 1
									? "bg-blue-100/0"
									: "bg-purple-100/0"
							} 	${i === 0 ? "rounded-l-[2vh]" : ""} 
								${i === slides.length - 1 ? "rounded-r-[2vh]" : ""}`}
						>
							{slide.content}
						</div>
					))}
				</div>

				{/* Bottom controls */}
				<div className="absolute bottom-[-9vh] left-0 w-full flex items-center justify-center gap-6">
					<button
						onClick={handlePrev}
						className="bg-white/95 hover:bg-white text-black rounded-full p-3 shadow-lg transition z-[20] cursor-pointer "
					>
						<FaCaretLeft className="text-2xl" />
					</button>

					{/* Progress Dots */}
					<div className="flex gap-2">
						{slides.map((_, i) => (
							<div
								key={i}
								onClick={() => setIndex(i)}
								className={`w-[1.2vh] h-[1.2vh] rounded-full cursor-pointer transition-all ${
									index === i
										? "bg-black scale-125"
										: "bg-white/70 hover:bg-white"
								}`}
							></div>
						))}
					</div>

					<button
						onClick={handleNext}
						className="bg-white/95 hover:bg-white text-black rounded-full p-3 shadow-lg transition z-[20] cursor-pointer "
					>
						<FaCaretRight className="text-2xl" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
