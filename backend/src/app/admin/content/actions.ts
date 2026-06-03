"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/auth/session";
import { writeContentJson } from "@/lib/cms/store";

export async function saveContentAction(formData: FormData) {
  await requireAdminSession();
  const rawJson = formData.get("contentJson");

  if (typeof rawJson !== "string") {
    redirect("/admin/content?error=missing");
  }

  try {
    await writeContentJson(rawJson);
  } catch {
    redirect("/admin/content?error=invalid-json");
  }

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/content");
  redirect("/admin/content?saved=1");
}
