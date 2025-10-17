import { NextResponse } from "next/server";
import prisma from "../../libs/prismadb";

export async function GET() {
	try {
		const notes = await prisma.note.findMany({});
		return NextResponse.json(notes);
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to load notes" },
			{ status: 500 }
		);
	}
}

export async function POST(req) {
	try {
		const { message } = await req.json();
		if (!message || typeof message !== "string") {
			return NextResponse.json({ error: "Invalid message" }, { status: 400 });
		}

		const newNote = await prisma.note.create({
			data: { content: message },
		});

		return NextResponse.json(newNote);
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "Failed to save note" }, { status: 500 });
	}
}
