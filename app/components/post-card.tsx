import Image from "next/image";
import type { Post } from "@/app/lib/posts";
import {
  CommentIcon,
  GlobeIcon,
  LikeIcon,
  MoreIcon,
  RepostIcon,
  SendIcon,
} from "@/app/components/icons";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/80 shadow-lg shadow-black/40 transition-colors hover:border-blue-400/30 backdrop-blur">
      <div className="flex items-start gap-3 px-4 pt-4">
        <div
          className={`flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full ${post.author.color} text-sm font-semibold text-white ring-2 ring-white/10`}
        >
          {post.author.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-100 transition-colors hover:text-[#5bb8ff] hover:underline">
            {post.author.name}
          </p>
          <p className="truncate text-xs text-zinc-400">{post.author.headline}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500">
            <span>{post.time}</span>
            <span aria-hidden="true">·</span>
            <GlobeIcon className="h-3.5 w-3.5" />
          </p>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="rounded-full p-1.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100"
        >
          <MoreIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="px-4 pt-3 whitespace-pre-line text-sm leading-6 text-zinc-200">
        {post.content}
      </div>

      {post.image && (
        <div className="mt-3">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={1600}
            height={900}
          />
        </div>
      )}

      <div className="border-t border-white/10 px-2 py-1">
        <div className="flex">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-[#6ec2ff]"
          >
            <LikeIcon className="h-5 w-5" />
            Like
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-[#6ec2ff]"
          >
            <CommentIcon className="h-5 w-5" />
            Comment
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-[#6ec2ff]"
          >
            <RepostIcon className="h-5 w-5" />
            Repost
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl px-2 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-[#6ec2ff]"
          >
            <SendIcon className="h-5 w-5" />
            Send
          </button>
        </div>
      </div>
    </article>
  );
}