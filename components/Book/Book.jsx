"use client";
import React from "react";
import HTMLFlipBook from "react-pageflip";

export default function Book() {
	const pages = [
		{
			title: "Welcome",
			subtitle: "The Journey of Janey",
			description:
				"From learning to code to building real-world projects — this is my personal journey through software development, creativity, and growth.",
			bg: "from-[#6366f1] to-[#3b82f6]",
			image: "/imgs/me.png",
		},
		{
			title: "About Me",
			description:
				"I'm a passionate developer who loves creating meaningful digital experiences. I enjoy problem-solving, learning new technologies, and bringing creative ideas to life through clean code and design.",
			image: "/imgs/about.png",
		},
		{
			title: "Core Skills",
			description:
				"React • Next.js • TypeScript • Node.js • Prisma • Tailwind CSS • Framer Motion • PostgreSQL • Git & GitHub • REST APIs",
			image: "/imgs/skills.png",
		},
		{
			title: "Internship Experience",
			subtitle: "Software Development Intern (July - August)",
			description:
				"Worked on modern web applications, helped improve team workflows, and implemented new UI components. Learned a ton about real-world software processes and collaboration.",
			image: "/imgs/internship.png",
		},
		{
			title: "Hackathon Win",
			subtitle: "April Hackathon — Project Nova",
			description:
				"Won 1st place by developing *Project Nova*, a web app that helps teams organize tasks visually and collaboratively. Built with Next.js, Tailwind, and Firebase.",
			image: "/imgs/hackathon.png",
		},
		{
			title: "Featured Project",
			subtitle: "Milestone Tracker App",
			description:
				"A productivity tool that allows HR teams to create, track, and review employee exit interviews and milestones. Built with Prisma, Next.js, and animations using Framer Motion.",
			image: "/imgs/project1.jpg",
		},
		{
			title: "Another Project",
			subtitle: "Portfolio Website",
			description:
				"A clean, animated portfolio built with Next.js and Tailwind. Includes carousel sections, parallax scrolling, and responsive design — designed to reflect creativity and precision.",
			image: "/imgs/project2.jpg",
		},
		{
			title: "Creative Coding",
			subtitle: "Interactive Experiments",
			description:
				"I love experimenting with front-end visuals — creating parallax effects, animated components, and interactive UIs using Framer Motion and Three.js.",
			image: "/imgs/creative.png",
		},
		{
			title: "Continuous Growth",
			description:
				"I believe that every project, challenge, and bug teaches something new. My focus is always on learning, adapting, and evolving as both a developer and a creator.",
			image: "/imgs/growth.png",
		},
		{
			title: "Thank You!",
			description:
				"Thanks for flipping through my story. I’m always open to new opportunities and collaborations — let’s build something amazing together.",
			bg: "from-[#f97316] to-[#fb923c]",
			image: "/imgs/thanks.png",
		},
	];

	return (
		<div className="flex items-center justify-center h-[100dvh] w-[100dvw] bg-[#0e1a26] overflow-hidden">
			<HTMLFlipBook
				width={600}
				height={800}
				maxShadowOpacity={0.5}
				drawShadow={true}
				showCover={true}
				size="fixed"
				className="shadow-2xl rounded-md"
			>
				{/* Cover Page */}
				<div className="flex items-center justify-center flex-col bg-gradient-to-br from-[#6366f1] to-[#3b82f6] text-white font-bold rounded-md shadow-md">
					<h1 className="text-4xl mb-4">Janey’s Storybook</h1>
					<p className="text-lg text-white/80 px-10 text-center">
						A digital flipbook of my journey in tech 🌟
					</p>
				</div>

				{/* Pages */}
				{pages.map((page, i) => (
					<div
						key={i}
						className={`bg-gradient-to-br ${
							page.bg || "from-white to-[#f5f5f5]"
						} rounded-md shadow-md`}
					>
						<div className="flex flex-col justify-center items-center text-center p-8 h-full">
							{page.image && (
								<img
									src={page.image}
									alt={page.title}
									className="w-[70%] max-h-[300px] object-contain mb-6 rounded-lg shadow-md"
								/>
							)}
							<h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#2c3e50] mb-2">
								{page.title}
							</h2>
							{page.subtitle && (
								<p className="text-[clamp(1rem,2vw,1.2rem)] text-[#555] italic mb-3">
									{page.subtitle}
								</p>
							)}
							<p className="text-[16px] text-[#34495e] mt-2 leading-[1.6] max-w-[80%]">
								{page.description}
							</p>
						</div>
					</div>
				))}
			</HTMLFlipBook>
		</div>
	);
}
