"use client";

import { useEffect, useState } from "react";
import { FaCaretLeft } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
	const [notes, setNotes] = useState([]);
	const [message, setMessage] = useState("");

	useEffect(() => {
		fetch("/api/notes")
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message.trim()) return;

		const res = await fetch("/api/notes", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ message }),
		});

		if (res.ok) {
			const newNote = await res.json();
			setNotes((prev) => [newNote, ...prev]);
			setMessage("");
		}
	};

	return (
		<div className="bg-neutral-600 h-screen w-full overflow-hidden relative">
			{/* Back button */}
			<Link
				href={"/"}
				className="cursor-pointer w-[8vh] h-[8vh] bg-white flex items-start justify-start pt-[1.75vh] pl-[1vw] rounded-br-full hover:scale-110 transition absolute top-0 left-0 z-[10]"
			>
				<FaCaretLeft className="text-[3vh]" />
			</Link>

			{/* Background */}
			<img
				src="/imgs/board.jpg"
				className="w-full h-screen object-cover opacity-95"
				alt=""
			/>

			{/* Decorations */}
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
				className="w-[20vw] absolute bottom-[1vh] right-[10vw] z-[1]"
				alt=""
			/>
			<img
				src="/imgs/paper4.png"
				className="w-[25vw] h-[12.5vh] absolute bottom-[5vh] right-[40vw] z-[1]"
				alt=""
			/>

			<h2 className="text-[3.5vh] font-extralight absolute bottom-[9vh] right-[43.4vw] hand-coffe z-[10]">
				Leave a note! (be nice)
			</h2>

			{/* Notes Section */}
			<div className="absolute top-[10vh] left-1/2 -translate-x-1/2 z-[20] flex gap-[5vw]">
				{/* Notes List */}
				<div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 w-[40vw] h-[70vh] overflow-y-scroll">
					<h3 className="text-[4vh] mb-4 font-semibold text-center hand-coffe">
						Notes
					</h3>
					{notes.length < 1 ? (
						<p className="text-gray-600">No notes yet, be the first!</p>
					) : (
						<div className="space-y-[1vh]">
							{notes.map((note) => (
								<div
									key={note.id}
									className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl shadow-sm"
								>
									<h3>{note.content}</h3>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Note Input */}
				<form
					onSubmit={handleSubmit}
					className="bg-white/0 relative rounded-2xl shadow-lg w-[40vw] h-[60vh] max-h-[70vh] flex flex-col"
				>
					<img
						src="/imgs/notepad.jpg"
						className="w-full h-[55vh] absolute top-0 left-0"
						alt=""
					/>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="flex-grow p-3 rounded-xl mt-[10vh] hand-coffe text-[2.5vh] ml-[1vw] mr-[3vw] min-h-[40vh] resize-none focus:outline-none focus:ring-0 focus:ring-blue-400 z-[30]"
						placeholder="Type something kind..."
					/>
					<button
						type="submit"
						className="mt-[7.5vh] bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition cursor-pointer"
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Page;
