"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const MainPage = () => {
	useEffect(() => {
		// Preload the sound
		const clickSound = new Audio("/sounds/click.mp3");

		// Attach to all links
		const handleClick = () => {
			clickSound.currentTime = 0; // rewind if clicked rapidly
			clickSound.play();
		};

		const links = document.querySelectorAll("a");
		links.forEach((link) => link.addEventListener("click", handleClick));

		return () => {
			links.forEach((link) => link.removeEventListener("click", handleClick));
		};
	}, []);

	return (
		<div>
			<div className="bg-neutral-600 h-screen w-full overflow-hidden relative">
				<img
					src="/imgs/board.jpg"
					className="w-full h-screen object-cover opacity-85"
					alt=""
				/>

				<img
					src="/imgs/paper3.png"
					className="absolute bottom-[0vw] right-[0vh] w-[20vw] rounded-[0.5vh] transition"
					alt=""
				/>

				<img
					src="/imgs/paper4.png"
					className="absolute right-[10vw] top-[3vh] h-[15vh] w-[40vw] rounded-[0.5vh]"
					alt=""
				/>
				<img
					src="/imgs/letter-j.png"
					className="absolute right-[40vw] top-[3vh] h-[15vh] rounded-[0.5vh]"
					alt=""
				/>
				<img
					src="/imgs/letter-a.png"
					className="absolute right-[31vw] top-[4vh] h-[13vh] rounded-[0.5vh]"
					alt=""
				/>
				<img
					src="/imgs/letter-n.png"
					className="absolute right-[23vw] top-[4vh] h-[13vh] rounded-[0.5vh]"
					alt=""
				/>
				<img
					src="/imgs/letter-e.png"
					className="absolute right-[16vw] top-[4vh] h-[13vh] rounded-[0.5vh]"
					alt=""
				/>

				<Link href={"/book"}>
					<img
						src="/imgs/pile.png"
						className="absolute right-[40vw] bottom-[4vh] w-[30vw] rounded-[0.5vh] hover:rotate-[0deg] hover:scale-105 transition rotate-[3deg] cursor-pointer"
						alt=""
					/>
				</Link>

				<Link href={"/calendar"}>
					<img
						src="/imgs/calendar.jpg"
						className="absolute right-[11vw] bottom-[11vh] w-[27.5vw] rounded-[0.5vh] shadow-neutral-800/70 hover:shadow-2xl hover:rotate-[2deg] hover:scale-105 transition rotate-[0deg] cursor-pointer shadow-lg"
						alt=""
					/>
				</Link>

				<Link href={"/gallery"}>
					<img
						src="/imgs/note2.png"
						className="absolute right-[38vw] bottom-[45vh] w-[20vw] rounded-[0.5vh] hover:rotate-[-2deg] hover:scale-110 transition rotate-[-4deg] cursor-pointer"
						alt=""
					/>
				</Link>

				<Link href={"https://mood-memoir.vercel.app/"}>
					<img
						src="/imgs/receipt.png"
						className="absolute right-[75vw] bottom-[12vh] w-[15vw] rounded-[0.5vh] shadow-neutral-800/70 hover:shadow-2xl hover:rotate-[-4deg] hover:scale-105 transition rotate-[-0deg] cursor-pointer shadow-lg"
						alt=""
					/>
				</Link>

				<Link href={"/notes"}>
					<img
						src="/imgs/dollar.png"
						className="absolute right-[65vw] bottom-[65vh] w-[25vw] rounded-[0.5vh] shadow-neutral-800/70 hover:shadow-2xl hover:rotate-[-0deg] hover:scale-[103%] transition rotate-[-0deg] cursor-pointer shadow-lg"
						alt=""
					/>
				</Link>

				<Link href={"/random"}>
					<img
						src="/imgs/keychain.png"
						className="absolute right-[50vw] bottom-[65vh] w-[13.5vw] rounded-[0.5vh] hover:rotate-[5deg] hover:scale-110 transition rotate-[10deg] cursor-pointer"
						alt=""
					/>
				</Link>

				<Link href={"/cam"}>
					<img
						src="/imgs/cam.png"
						className="absolute right-[59vw] bottom-[42.5vh] opacity-80 w-[12.5vw] rounded-[0.5vh] hover:rotate-[0deg] hover:scale-110 transition rotate-[0deg] cursor-pointer"
						alt=""
					/>
				</Link>

				<h2 className="absolute bottom-[3vh] left-[3vw] text-white text-2xl font-light">
					Hello
				</h2>
			</div>
		</div>
	);
};

export default MainPage;
