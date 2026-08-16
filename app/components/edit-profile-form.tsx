"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_AVATAR_COLORS } from "@/app/lib/profile-types";
import type { Profile } from "@/app/lib/profile-types";

export function EditProfileForm({ profile }: { profile: Profile }) {
  const router = useRouter();
  const [form, setForm] = useState<Profile>(profile);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  function update<K extends keyof Profile>(key: K, value: Profile[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setStatus("idle");
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("saving");
    setError("");

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      setError(data?.error ?? "Failed to save profile.");
      setStatus("error");
      return;
    }

    setStatus("saved");
    router.refresh();
  }

  const inputClass =
    "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 focus:border-[#1c91ff] focus:ring-1 focus:ring-[#1c91ff]";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 px-6 py-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
          >
            Name
          </label>
          <input
            id="name"
            className={inputClass}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="headline"
            className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
          >
            Headline
          </label>
          <input
            id="headline"
            className={inputClass}
            value={form.headline}
            onChange={(e) => update("headline", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
        >
          Location
        </label>
        <input
          id="location"
          className={inputClass}
          value={form.location}
          onChange={(e) => update("location", e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="about"
          className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-zinc-400"
        >
          About
        </label>
        <textarea
          id="about"
          rows={4}
          className={inputClass}
          value={form.about}
          onChange={(e) => update("about", e.target.value)}
        />
      </div>

      <div>
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Avatar initials
        </span>
        <input
          aria-label="Avatar initials"
          className={inputClass}
          maxLength={2}
          value={form.initials}
          onChange={(e) => update("initials", e.target.value.toUpperCase())}
        />
      </div>

      <div>
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Avatar color
        </span>
        <div className="flex flex-wrap gap-2">
          {DEFAULT_AVATAR_COLORS.map((color) => (
            <button
              key={color}
              type="button"
              aria-label={`Select color ${color}`}
              onClick={() => update("avatarColor", color)}
              className={`flex h-9 w-9 items-center justify-center rounded-full ${color} transition ${
                form.avatarColor === color
                  ? "ring-2 ring-white ring-offset-2 ring-offset-[#0f172a]"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {form.avatarColor === color && (
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {error}
        </p>
      )}
      {status === "saved" && (
        <p className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
          Profile saved.
        </p>
      )}

      <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={() => setForm(profile)}
          className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-zinc-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={status === "saving"}
          className="rounded-lg bg-gradient-to-r from-[#1c91ff] to-[#0a66c2] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "saving" ? "Saving…" : "Save"}
        </button>
      </div>
    </form>
  );
}