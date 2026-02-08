import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data?.note) {
      return NextResponse.json(
        { success: false, message: "Note is required" },
        { status: 400 }
      );
    }

    // Date folder: YYYY-MM-DD
    const date = new Date().toISOString().split("T")[0];

    // Unix time (seconds)
    const unixTime = Math.floor(Date.now() / 1000);

    // upload/{date}
    const dirPath = path.join(process.cwd(), "upload", date);
    await fs.mkdir(dirPath, { recursive: true });

    // person-note-{unix}.json
    const fileName = `person-note-${unixTime}.json`;
    const filePath = path.join(dirPath, fileName);

    await fs.writeFile(
      filePath,
      JSON.stringify(
        {
          ...data,
          createdAt: unixTime,
        },
        null,
        2
      ),
      "utf-8"
    );

    return NextResponse.json({
      success: true,
      file: `upload/${date}/${fileName}`,
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "File creation failed" },
      { status: 500 }
    );
  }
}
