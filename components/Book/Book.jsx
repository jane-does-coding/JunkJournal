"use client";
import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book() {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		const updateSize = () => {
			setDimensions({
				width: window.innerWidth * 0.35, // each page = 35vw (total ~70vw)
				height: window.innerHeight * 0.8, // 80vh
			});
		};
		updateSize();
		window.addEventListener("resize", updateSize);
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	// ✅ Each page now has a `content` field containing JSX
	const pages = [
		{
			content: (
				<div className="flex relative flex-col items-center justify-center text-center h-full bg-gradient-to-br from-white to-neutral-100/90 p-[2vw] rounded-md shadow-md">
					<img
						src="/imgs/projects/banner.png"
						alt="Welcome"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg shadow-md"
					/>
					<h2 className="text-[7vh] w-[90%] mx-auto hand-coffe font-semibold text-[#2c3e50] mb-[1vh]">
						Who am I and what I do...
					</h2>
					<p className="text-[clamp(1rem,1.5vw,1.2rem)] text-[#555] italic mb-[1vh]">
						My Journey
					</p>
					<img
						src="/imgs/flower2.png"
						alt="About"
						className="w-[50%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-2vh] rotate-[0deg] right-[-5vw]"
					/>
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute bottom-[-6vh] rotate-[90deg] left-[-3.5vw]"
					/>
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-3vh] left-[-4vw] rotate-[180deg] opacity-80"
					/>
					{/* 	<p className="text-[clamp(0.9rem,1vw,1.1rem)] text-[#34495e] leading-[1.6] max-w-[80%]">
						From learning to code to building real-world projects — this is my
						personal journey through software development, creativity, and
						growth.
					</p> */}
				</div>
			),
		},
		{
			content: (
				<div className="flex flex-col items-center relative justify-center text-center h-full bg-gradient-to-br from-[#fafafa] to-[#f0f0f0]/90 p-[2vw] rounded-md shadow-md">
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute bottom-[-3vh] right-[-3.5vw]"
					/>
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-3vh] right-[-3vw] rotate-[-90deg] opacity-80"
					/>
					<img
						src="/imgs/smile.png"
						alt="About"
						className="w-[40%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute bottom-[-3vh] left-[-4vw] rotate-[-90deg] opacity-80"
					/>
					<img
						src="/imgs/smile.png"
						alt="About"
						className="w-[40%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-1vh] left-[2vw] rotate-[-0deg] opacity-80"
					/>

					<div className="relative isolate w-full">
						<img
							src="/imgs/paper4.png"
							alt="About"
							className="w-[50%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-3vh] left-[50%] translate-x-[-50%] opacity-80 z-[0]"
						/>
						<h2 className="relative z-[10] text-[clamp(1.5rem,2vw,2.2rem)] font-semibold text-[#2c3e50] mb-[1vh]">
							About Me
						</h2>
					</div>
					<p className="text-[3vh] text-[#34495e] leading-[1.6] max-w-[80%] mt-[5vh] hand-coffe">
						I'm a passionate developer who loves creating meaningful digital
						experiences. I enjoy problem-solving, learning new technologies, and
						bringing creative ideas to life through clean code and design.
					</p>
				</div>
			),
		},
		{
			content: (
				<div className="flex flex-col relative items-center justify-center text-center h-full bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb] p-[2vw] rounded-md shadow-md">
					<img
						src="/imgs/frame.png"
						alt="Skills"
						className="w-[40vw] max-h-[55vh] object-contain mb-[3vh] rounded-lg absolute top-[50%] translate-y-[-50%] left-0"
					/>
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute bottom-[-6vh] rotate-[90deg] left-[-3.5vw]"
					/>
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-3vh] left-[-4vw] rotate-[180deg] opacity-80"
					/>
					<p className="text-[2.5vh] text-[#34495e] leading-[1.6] max-w-[40%] hand-coffe">
						React • Next.js • TypeScript • Node.js • Prisma • Tailwind CSS •
						Framer Motion • PostgreSQL • Git & GitHub • REST APIs
					</p>
				</div>
			),
		},
		{
			content: (
				<div className="flex relative flex-col items-center justify-center text-center h-full bg-gradient-to-br from-[#fff7ed] to-[#fed7aa] p-[2vw] rounded-md shadow-md">
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute bottom-[-3vh] right-[-3.5vw]"
					/>
					<img
						src="/imgs/paper3.png"
						alt="About"
						className="w-[60%] max-h-[30vh] object-contain mb-[3vh] rounded-lg absolute top-[-3vh] right-[-3vw] rotate-[-90deg] opacity-80"
					/>

					<h2 className="text-[5vh] font-semibold text-[#2c3e50] mb-[1vh] hand-coffe">
						Thank You!
					</h2>
					<p className="text-[2.25vh] text-[#34495e] leading-[1.6] max-w-[80%] hand-coffe">
						Thanks for flipping through my story. I’m always open to new
						opportunities and collaborations - let’s build something amazing
						together.
					</p>
				</div>
			),
		},
	];

	// Avoid SSR rendering before client mounts
	if (dimensions.width === 0 || dimensions.height === 0) return null;

	return (
		<div className="flex items-center justify-center h-[100dvh] w-[100dvw] bg-[#0e1a26]/10 overflow-hidden">
			<HTMLFlipBook
				width={dimensions.width}
				height={dimensions.height}
				maxShadowOpacity={0.5}
				drawShadow={true}
				showCover={true}
				size="fixed"
				className="rounded-2xl overflow-hidden"
			>
				{/* Cover Page */}
				<div className="flex items-center justify-center h-full flex-col bg-gradient-to-br from-neutral-800 to-neutral-950 text-white font-bold rounded-md shadow-md px-[2vw]">
					<h1 className="text-[4vw] text-center hand-coffe mt-[4vh]">
						Jane’s Storybook
					</h1>
					<p className="text-[1.5vw] font-extralight italic text-white/80 px-[2vw] text-center mb-[2vh]">
						A journal about my growth and projects as a developer
					</p>
					<img
						src="/imgs/projects/banner.png"
						className="w-[90%] mx-auto rounded-md"
						alt=""
					/>
					<p className="text-[1.2vw] font-extralight italic text-white/80 text-center mt-[2vh]">
						Open to explore...
					</p>
				</div>

				{/* Pages */}
				{pages.map((page, i) => (
					<div key={i} className="h-full w-full">
						{page.content}
					</div>
				))}
			</HTMLFlipBook>
		</div>
	);
}
