import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie, verifyAdminCredentials } from "@/lib/auth/session";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !verifyAdminCredentials(username, password)
  ) {
    return NextResponse.redirect(new URL("/admin/login?error=1", request.url));
  }

  await setSessionCookie(username);
  return NextResponse.redirect(new URL("/admin", request.url));
}
