import Image from "next/image";
import type { Post } from "@/app/lib/posts";
import {
  CommentIcon,
  GlobeIcon,
  LikeIcon,
  MoreIcon,
  RepostIcon,
  SendIcon,
  ThumbsUpIcon,
} from "@/app/components/icons";

function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K`;
  }
  return String(count);
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white shadow-sm">
      <div className="flex items-start gap-3 px-4 pt-4">
        <div
          className={`flex h-12 w-12 select-none items-center justify-center rounded-full ${post.author.color} text-sm font-semibold text-white`}
        >
          {post.author.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-zinc-900 hover:text-blue-700 hover:underline">
            {post.author.name}
          </p>
          <p className="truncate text-xs text-zinc-600">{post.author.headline}</p>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500">
            <span>{post.time}</span>
            <span aria-hidden="true">·</span>
            <GlobeIcon className="h-3.5 w-3.5" />
          </p>
        </div>
        <button
          type="button"
          aria-label="More options"
          className="rounded-full p-1.5 text-zinc-600 hover:bg-zinc-100"
        >
          <MoreIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="px-4 pt-3 whitespace-pre-line text-sm leading-6 text-zinc-800">
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

      <div className="flex items-center justify-between px-4 py-3 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
            <ThumbsUpIcon className="h-3 w-3" />
          </span>
          <span>{formatCount(post.reactions)}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hover:text-blue-700 hover:underline"
          >
            {formatCount(post.comments)} comments
          </button>
          <button
            type="button"
            className="hover:text-blue-700 hover:underline"
          >
            {formatCount(post.reposts)} reposts
          </button>
        </div>
      </div>

      <div className="border-t border-zinc-200 px-2 py-1">
        <div className="flex">
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
          >
            <LikeIcon className="h-5 w-5" />
            Like
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
          >
            <CommentIcon className="h-5 w-5" />
            Comment
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
          >
            <RepostIcon className="h-5 w-5" />
            Repost
          </button>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-2 rounded px-2 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
          >
            <SendIcon className="h-5 w-5" />
            Send
          </button>
        </div>
      </div>
    </article>
  );
}