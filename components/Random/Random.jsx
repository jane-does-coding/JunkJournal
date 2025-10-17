import Link from "next/link";
import { FaCaretLeft } from "react-icons/fa";

const Random = () => {
	const items = [
		{
			img: "/imgs/keychain.png",
			text: "I love programming!",
		},
		{
			img: "/imgs/piercings.png",
			text: "I have 9 piercings :D",
		},
		{
			img: "/imgs/clock3.png",
			text: "Over 500+ hours on coding!",
		},
		{
			img: "/imgs/win.png",
			text: "Won 10+ hackathons!",
		},
		{
			img: "/imgs/cherry.png",
			text: "I love cherries!",
		},
		{
			img: "/imgs/player2.png",
			text: "I like listening to music!",
		},
	];

	return (
		<div className="bg-neutral-600 h-screen w-full overflow-hidden relative">
			{/* Floating Decorations */}
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
				className="w-[25vw] absolute bottom-[-8vh] right-[-7vw] z-[1]"
				alt=""
			/>

			{/* Back button */}
			<Link
				href={"/"}
				className="cursor-pointer w-[8vh] h-[8vh] bg-white flex items-start justify-start pt-[1.75vh] pl-[1vw] rounded-br-full hover:scale-110 transition absolute top-0 left-0 z-[50]"
			>
				<FaCaretLeft className="text-[3vh]" />
			</Link>
			<h2 className="text-[7vh] rotate-[-90deg] hand-coffe absolute left-0 top-[50%] translate-y-[-50%] z-[20]">
				Random Facts
			</h2>

			{/* Background */}
			<img
				src="/imgs/board.jpg"
				className="w-full h-screen object-cover opacity-95 absolute top-0 left-0 z-[0]"
				alt=""
			/>

			{/* Main Content Grid */}
			<div className="relative z-[30] h-full flex items-center justify-center top-[-5vh]">
				<div className="grid grid-cols-3 gap-y-[5vw] place-items-center w-[70vw] max-w-[1600px]">
					{items.map((item, i) => (
						<div key={i} className="flex flex-col items-center gap-[3vh]">
							<img
								src={item.img}
								className="w-[13vw] min-w-[180px] hover:scale-110 transition"
								alt={`item-${i}`}
							/>
							<div className="relative mt-[3vh] w-[15vw] min-w-[180px]">
								<img
									src="/imgs/paper4.png"
									className="w-full absolute top-[50%] translate-y-[-50%] left-0 z-[1]"
									alt=""
								/>
								<h2 className="relative z-[10] text-[2.5vh] hand-coffe text-center w-full">
									{item.text}
								</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Random;
