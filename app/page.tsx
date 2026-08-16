import { posts } from "@/app/lib/posts";
import { PostCard } from "@/app/components/post-card";
import { TopNav } from "@/app/components/top-nav";
import { LeftSidebar } from "@/app/components/left-sidebar";
import { RightSidebar } from "@/app/components/right-sidebar";
import {
  EventIcon,
  PhotoIcon,
  VideoIcon,
  WriteIcon,
} from "@/app/components/icons";

function StartPost() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 px-4 pt-4">
        <div className="flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          SC
        </div>
        <button
          type="button"
          className="flex h-12 flex-1 items-center rounded-full border border-zinc-300 px-4 text-sm text-zinc-500 hover:bg-zinc-50"
        >
          Start a post
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
        >
          <PhotoIcon className="h-5 w-5 text-blue-600" />
          <span className="hidden sm:inline">Photo</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
        >
          <VideoIcon className="h-5 w-5 text-emerald-600" />
          <span className="hidden sm:inline">Video</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50"
        >
          <EventIcon className="h-5 w-5 text-amber-500" />
          <span className="hidden sm:inline">Event</span>
        </button>
      </div>
      <div className="border-t border-zinc-200 px-4 py-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded px-2 py-2 text-sm text-zinc-600 hover:bg-zinc-50"
        >
          <WriteIcon className="h-5 w-5 text-zinc-400" />
          Write article
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100">
      <TopNav />
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr_1fr]">
          <LeftSidebar />
          <main className="w-full max-w-xl justify-self-center space-y-3">
            <StartPost />
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </main>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}