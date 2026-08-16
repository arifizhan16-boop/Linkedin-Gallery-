export type Profile = {
  name: string;
  headline: string;
  location: string;
  about: string;
  initials: string;
  avatarColor: string;
};

export const DEFAULT_AVATAR_COLORS = [
  "bg-blue-600",
  "bg-emerald-600",
  "bg-teal-600",
  "bg-violet-600",
  "bg-rose-500",
  "bg-indigo-600",
  "bg-amber-600",
] as const;