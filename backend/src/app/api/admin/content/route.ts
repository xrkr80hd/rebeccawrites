import { NextRequest, NextResponse } from "next/server";
import { requireAdminApiSession } from "@/lib/auth/session";
import { readContent, writeContent } from "@/lib/cms/store";
import { cmsContentSchema } from "@/lib/cms/schema";

export async function GET() {
  const session = await requireAdminApiSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await readContent();
  return NextResponse.json(content);
}

export async function PUT(request: NextRequest) {
  const session = await requireAdminApiSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = cmsContentSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid CMS content", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const content = await writeContent(parsed.data);
  return NextResponse.json(content);
}
