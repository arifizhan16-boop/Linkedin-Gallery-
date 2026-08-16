import { LinkedinLogo, SearchIcon } from "@/app/components/icons";

export function LeftSidebar() {
  return (
    <aside className="hidden space-y-3 xl:block" aria-label="Sidebar">
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white text-center shadow-sm">
        <div className="h-14 bg-[repeating-linear-gradient(135deg,#dbeafe_0px,#dbeafe_8px,#bfdbfe_8px,#bfdbfe_16px)]" />
        <div className="-mt-8 px-4 pb-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xl font-semibold text-white">
            SC
          </div>
          <a href="#" className="mt-3 block text-base font-semibold text-zinc-900 hover:text-blue-700 hover:underline">
            Sarah Chen
          </a>
          <p className="mt-1 text-sm text-zinc-600">
            Product Lead · Northwind Labs
          </p>
          <div className="mt-3 border-t border-zinc-200 pt-3 text-left text-sm">
            <div className="flex items-center justify-between px-1 py-1 hover:bg-zinc-50">
              <span className="text-zinc-600">Profile viewers</span>
              <span className="font-semibold text-blue-700">421</span>
            </div>
            <div className="flex items-center justify-between px-1 py-1 hover:bg-zinc-50">
              <span className="text-zinc-600">Post impressions</span>
              <span className="font-semibold text-blue-700">38.2K</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white shadow-sm">
        <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Groups
        </p>
        <ul className="px-2 py-2 text-sm">
          {[
            "Product Management Leaders",
            "Women in Tech Global",
            "Remote & Hybrid Work",
            "AI Builders Network",
          ].map((group) => (
            <li key={group}>
              <a
                href="#"
                className="flex items-center gap-2 rounded px-2 py-1.5 font-medium text-blue-700 hover:bg-zinc-50 hover:underline"
              >
                <LinkedinLogo className="h-4 w-4 shrink-0 text-zinc-400" />
                <span className="truncate">{group}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white shadow-sm">
        <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Events
        </p>
        <ul className="px-2 py-2 text-sm">
          {[
            "Product Week 2026",
            "AI in Practice Summit",
            "Lean Startup Meetup",
          ].map((event) => (
            <li key={event}>
              <a
                href="#"
                className="block rounded px-2 py-1.5 font-medium text-zinc-700 hover:bg-zinc-50 hover:text-blue-700"
              >
                {event}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-2 text-xs leading-5 text-zinc-500">
        <p className="flex items-center gap-1.5">
          <SearchIcon className="h-3.5 w-3.5" />
          Follow hashtags
        </p>
        <p>Careers · Help · Privacy · Terms · About</p>
      </div>
    </aside>
  );
}