import { NextResponse } from "next/server";
import { readContent } from "@/lib/cms/store";

export async function GET() {
  const content = await readContent();
  return NextResponse.json(content);
}
