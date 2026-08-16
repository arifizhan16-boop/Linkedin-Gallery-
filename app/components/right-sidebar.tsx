export function RightSidebar() {
  return (
    <aside className="hidden space-y-3 lg:block" aria-label="Sidebar">
      <div className="rounded-lg border border-zinc-200 bg-white shadow-sm">
        <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-zinc-500">
          LinkedIn News
        </p>
        <ul className="px-2 pb-2 pt-1 text-sm">
          {[
            { n: 1, title: "Remote work is here to stay", reads: "12,410 readers" },
            { n: 2, title: "The rise of AI agents in hiring", reads: "8,932 readers" },
            { n: 3, title: "How salaries are climbing in tech", reads: "6,754 readers" },
            { n: 4, title: "Four-day workweeks go mainstream", reads: "5,388 readers" },
            { n: 5, title: "Startups hiring for green roles", reads: "4,120 readers" },
          ].map((item) => (
            <li key={item.n}>
              <a
                href="#"
                className="block rounded px-2 py-1.5 hover:bg-zinc-50"
              >
                <p className="text-sm font-medium text-zinc-800 hover:text-blue-700 hover:underline">
                  <span className="font-bold" aria-hidden="true">
                    {item.n}.{" "}
                  </span>
                  {item.title}
                </p>
                <p className="text-xs text-zinc-500">{item.reads}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          Sponsored
        </p>
        <div className="mt-3 flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold text-white">
            B
          </div>
          <div className="text-xs leading-5">
            <p className="font-semibold text-zinc-800">
              Build skills that pay off
            </p>
            <p className="text-zinc-500">Brand Yourself · Sponsored</p>
            <a
              href="#"
              className="mt-2 inline-flex rounded-full border border-zinc-300 px-4 py-1 font-medium text-zinc-700 hover:bg-zinc-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-semibold text-zinc-800">
          Who&apos;s following you
        </p>
        <ul className="mt-2 space-y-3 text-sm">
          {[
            { initials: "RK", name: "Ravi Kumar", title: "Backend Engineer", color: "bg-emerald-500" },
            { initials: "JM", name: "Jessica Moore", title: "UX Researcher", color: "bg-indigo-500" },
            { initials: "AL", name: "André Lima", title: "VP Engineering", color: "bg-rose-500" },
          ].map((person) => (
            <li key={person.initials} className="flex items-center gap-2">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${person.color} text-xs font-semibold text-white`}
              >
                {person.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-zinc-800">
                  {person.name}
                </p>
                <p className="truncate text-xs text-zinc-500">{person.title}</p>
              </div>
              <button
                type="button"
                className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-50"
              >
                Follow
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}