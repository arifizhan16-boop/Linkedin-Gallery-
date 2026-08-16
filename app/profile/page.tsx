import Link from "next/link";
import { getProfile } from "@/app/lib/profile";
import { TopNav } from "@/app/components/top-nav";
import { EditProfileForm } from "@/app/components/edit-profile-form";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const profile = await getProfile();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#0b1120]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(28,145,255,0.18),transparent)]"
      />
      <TopNav profile={profile} />
      <main className="relative mx-auto w-full max-w-2xl flex-1 px-4 py-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-[#5bb8ff]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to gallery
        </Link>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 shadow-lg shadow-black/40 backdrop-blur">
          <div className="h-20 bg-[repeating-linear-gradient(135deg,rgba(28,145,255,0.25)_0px,rgba(28,145,255,0.25)_8px,rgba(10,102,194,0.2)_8px,rgba(10,102,194,0.2)_16px)]" />
          <div className="flex flex-col items-center px-6 pb-6 text-center">
            <div
              className={`-mt-10 flex h-24 w-24 items-center justify-center rounded-full ${profile.avatarColor} text-2xl font-semibold text-white ring-4 ring-[#0f172a]`}
            >
              {profile.initials}
            </div>
            <h1 className="mt-4 text-2xl font-bold text-zinc-100">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-zinc-400">{profile.headline}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              {profile.location}
            </p>
            {profile.about && (
              <p className="mt-4 max-w-md text-sm leading-6 whitespace-pre-line text-zinc-300">
                {profile.about}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 shadow-lg shadow-black/40 backdrop-blur">
          <div className="border-b border-white/10 px-6 py-4">
            <h2 className="text-lg font-semibold text-zinc-100">Edit profile</h2>
          </div>
          <EditProfileForm profile={profile} />
        </div>
      </main>
    </div>
  );
}