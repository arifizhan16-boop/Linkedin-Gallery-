import { NextResponse } from "next/server";
import { getProfile, saveProfile } from "@/app/lib/profile";
import {
  DEFAULT_AVATAR_COLORS,
  type Profile,
} from "@/app/lib/profile-types";

export const dynamic = "force-dynamic";

export async function GET() {
  const profile = await getProfile();
  return NextResponse.json(profile);
}

function isValidProfile(value: unknown): value is Profile {
  if (!value || typeof value !== "object") return false;
  const p = value as Record<string, unknown>;
  return (
    typeof p.name === "string" &&
    typeof p.headline === "string" &&
    typeof p.location === "string" &&
    typeof p.about === "string" &&
    typeof p.initials === "string" &&
    (typeof p.avatarColor === "string" &&
      (DEFAULT_AVATAR_COLORS as readonly string[]).includes(p.avatarColor))
  );
}

export async function PUT(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!isValidProfile(body)) {
    return NextResponse.json(
      { error: "Invalid profile payload." },
      { status: 400 },
    );
  }

  await saveProfile(body);
  return NextResponse.json(body);
}