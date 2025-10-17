import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "app/data/notes.json");

export async function GET() {
	try {
		if (!fs.existsSync(filePath)) {
			fs.writeFileSync(filePath, "[]", "utf-8");
		}
		const data = fs.readFileSync(filePath, "utf-8");
		return NextResponse.json(JSON.parse(data));
	} catch (err) {
		return NextResponse.json(
			{ error: "Failed to read notes" },
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

		if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, "[]", "utf-8");

		const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
		const newNote = { id: Date.now(), message };
		data.unshift(newNote);

		fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
		return NextResponse.json(newNote);
	} catch (err) {
		return NextResponse.json({ error: "Failed to save note" }, { status: 500 });
	}
}
