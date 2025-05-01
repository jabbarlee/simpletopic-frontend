"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LevelSelector from "../LevelSelector";

export default function InputForm() {
  const [text, setText] = useState("");
  const [level, setLevel] = useState("5yo");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;

    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/explain`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, level }),
      }
    );

    const data = await res.json();
    setLoading(false);
    router.push(`/result?explanation=${encodeURIComponent(data.explanation)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-gray-700">
      {/* textarea */}
      <textarea
        rows={8}
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full resize-none rounded-md border border-gray-300 p-5 text-base placeholder-gray-400 focus:border-[#58935D] focus:outline-none focus:ring-[#58935D]/30"
      />

      {/* selector */}
      <div className="space-y-4">
        <label className="block text-[22px] leading-tight">
          Choose your explanation level
        </label>
        <LevelSelector selected={level} onChange={setLevel} />
      </div>

      {/* submit */}
      <button
        type="submit"
        disabled={!text || loading}
        className="w-full rounded-md bg-[#58935D] py-4 text-lg font-semibold text-white transition hover:bg-[#4C7E50] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Loading…" : "Explain it"}
      </button>
    </form>
  );
}
