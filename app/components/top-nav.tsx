import Link from "next/link";
import { LinkedinLogo, SearchIcon } from "@/app/components/icons";

const navItems = [
  { label: "Home", short: "Home", active: true },
  { label: "My Network", short: "Network" },
  { label: "Jobs", short: "Jobs" },
  { label: "Messaging", short: "Messaging" },
  { label: "Notifications", short: "Notifications" },
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-300 bg-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2">
        <Link href="/" aria-label="LinkedIn home" className="shrink-0">
          <LinkedinLogo className="h-9 w-9 text-[#0a66c2]" />
        </Link>
        <div className="hidden h-9 min-w-0 flex-1 items-center gap-2 rounded p-1.5 sm:flex">
          <SearchIcon className="h-5 w-5 shrink-0 text-zinc-500" />
          <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="w-full bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-500"
          />
        </div>
        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="group flex flex-col items-center gap-0.5 text-xs font-medium"
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-6 w-6 ${item.active ? "text-zinc-900" : "text-zinc-500 group-hover:text-zinc-900"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {item.short === "Home" && (
                  <>
                    <circle cx="12" cy="9" r="4" />
                    <path d="M4 21c.6-4 4-6 8-6s7.4 2 8 6" />
                  </>
                )}
                {item.short === "Network" && (
                  <>
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3 20c.5-3.4 3.2-5 6-5s5.5 1.6 6 5" />
                    <path d="M16 5.2a3.2 3.2 0 0 1 0 6" />
                    <path d="M18.5 20c-.3-1.9-1.4-3.3-3-4.2" />
                  </>
                )}
                {item.short === "Jobs" && (
                  <>
                    <rect x="5" y="4" width="14" height="17" rx="2" />
                    <path d="M9 4a3 3 0 0 1 6 0" />
                    <path d="M9 11h6M9 15h6" />
                  </>
                )}
                {item.short === "Messaging" && (
                  <>
                    <path d="M4 6h16v11H8l-4 3V6z" />
                    <path d="M8 10h8M8 13h5" />
                  </>
                )}
                {item.short === "Notifications" && (
                  <>
                    <path d="M12 4a6 6 0 0 0-6 6v4l-2 3h16l-2-3v-4a6 6 0 0 0-6-6z" />
                    <path d="M10 20a2 2 0 0 0 4 0" />
                  </>
                )}
              </svg>
              {item.active ? (
                <span className="text-zinc-900">{item.label}</span>
              ) : (
                <span className="text-zinc-500 group-hover:text-zinc-900">
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a href="#" className="flex flex-col items-center text-xs font-medium">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-zinc-500 hover:text-zinc-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <rect x="12" y="3" width="0.1" height="0.1" className="opacity-0" />
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
            </svg>
            <span className="text-zinc-500">Work</span>
          </a>
          <div className="hidden h-8 border-l border-zinc-300 sm:block" />
          <div className="hidden flex-col items-center sm:flex">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a66c2] text-xs font-semibold text-white">
              SC
            </div>
            <span className="mt-0.5 flex items-center text-xs text-zinc-500">
              Me
              <svg
                viewBox="0 0 24 24"
                className="ml-0.5 h-3 w-3"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 md:hidden">
        <nav className="mx-auto flex max-w-md items-center justify-around" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="flex flex-col items-center gap-0.5 px-3 py-2 text-[11px] font-medium"
            >
              <span className="h-5 w-5 rounded-full bg-zinc-300" />
              {item.short}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}