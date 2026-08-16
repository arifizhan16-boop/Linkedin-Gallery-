import { posts } from "@/app/lib/posts";
import { getProfile } from "@/app/lib/profile";
import { PostCard } from "@/app/components/post-card";
import { TopNav } from "@/app/components/top-nav";
import {
  EventIcon,
  PhotoIcon,
  VideoIcon,
  WriteIcon,
} from "@/app/components/icons";

export const dynamic = "force-dynamic";

function StartPost({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0f172a]/80 shadow-lg shadow-black/40 backdrop-blur">
      <div className="flex items-center gap-3 px-4 pt-4">
        <div
          className={`flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full ${color} text-sm font-semibold text-white ring-2 ring-blue-400/30`}
        >
          {initials}
        </div>
        <button
          type="button"
          className="flex h-12 flex-1 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm text-zinc-400 transition hover:border-blue-400/40 hover:bg-white/10 hover:text-zinc-200"
        >
          Start a post
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
        >
          <PhotoIcon className="h-5 w-5 text-[#5bb8ff]" />
          <span className="hidden sm:inline">Photo</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
        >
          <VideoIcon className="h-5 w-5 text-[#6ee7b7]" />
          <span className="hidden sm:inline">Video</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
        >
          <EventIcon className="h-5 w-5 text-[#fbbf24]" />
          <span className="hidden sm:inline">Event</span>
        </button>
      </div>
      <div className="border-t border-white/10 px-4 py-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-zinc-200"
        >
          <WriteIcon className="h-5 w-5 text-zinc-500" />
          Write article
        </button>
      </div>
    </div>
  );
}

export default async function Home() {
  const profile = await getProfile();

  return (
    <div className="relative flex min-h-screen flex-col bg-[#0b1120]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(28,145,255,0.18),transparent)]"
      />
      <TopNav profile={profile} />
      <div className="relative mx-auto w-full max-w-7xl flex-1 px-4 py-5">
        <main>
          <StartPost
            initials={profile.initials}
            color={profile.avatarColor}
          />
          <div className="mt-5 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {posts.map((post) => (
              <div key={post.id} className="mb-5 break-inside-avoid">
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}