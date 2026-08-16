import { promises as fs } from "fs";
import path from "path";
import type { Profile } from "@/app/lib/profile-types";

const DATA_DIR = path.join(process.cwd(), "data");
const PROFILE_FILE = path.join(DATA_DIR, "profile.json");

export const DEFAULT_PROFILE: Profile = {
  name: "Sarah Chen",
  headline: "Product Lead · Northwind Labs",
  location: "San Francisco, CA",
  about: "",
  initials: "SC",
  avatarColor: "bg-blue-600",
};

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

export async function getProfile(): Promise<Profile> {
  try {
    const raw = await fs.readFile(PROFILE_FILE, "utf8");
    const parsed = JSON.parse(raw) as Partial<Profile>;
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export async function saveProfile(profile: Profile): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(
    PROFILE_FILE,
    JSON.stringify(profile, null, 2),
    "utf8",
  );
}