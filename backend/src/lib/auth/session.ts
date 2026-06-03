import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const sessionCookieName = "rjw_admin_session";
const sessionDurationMs = 1000 * 60 * 60 * 8;

type SessionPayload = {
  username: string;
  expiresAt: number;
};

function getAuthSecret(): string {
  return process.env.AUTH_SECRET ?? "local-dev-change-me";
}

function encodeBase64Url(value: string): string {
  return Buffer.from(value).toString("base64url");
}

function decodeBase64Url(value: string): string {
  return Buffer.from(value, "base64url").toString("utf8");
}

function sign(value: string): string {
  return crypto.createHmac("sha256", getAuthSecret()).update(value).digest("base64url");
}

export function createSessionToken(username: string): string {
  const payload: SessionPayload = {
    username,
    expiresAt: Date.now() + sessionDurationMs,
  };
  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function verifySessionToken(token: string | undefined): SessionPayload | null {
  if (!token) {
    return null;
  }

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature || sign(encodedPayload) !== signature) {
    return null;
  }

  const payload = JSON.parse(decodeBase64Url(encodedPayload)) as SessionPayload;
  if (payload.expiresAt < Date.now()) {
    return null;
  }

  return payload;
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const expectedUsername = process.env.ADMIN_USERNAME ?? "admin";
  const expectedPassword = process.env.ADMIN_PASSWORD ?? "change-this-password";
  return username === expectedUsername && password === expectedPassword;
}

export async function setSessionCookie(username: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(sessionCookieName, createSessionToken(username), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionDurationMs / 1000,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
}

export async function getAdminSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get(sessionCookieName)?.value);
}

export async function requireAdminSession(): Promise<SessionPayload> {
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

export async function requireAdminApiSession(): Promise<SessionPayload | null> {
  return getAdminSession();
}
