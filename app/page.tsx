"use client";

import Link from "next/link";
import { PRACTICE_AREAS } from "@/lib/practice-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          KVNR Law Chambers
        </h1>
        <p className="mt-4 text-muted-foreground">
          25+ Years of Experience in Criminal and Civil Matters
        </p>
      </section>

      {/* Practice Areas */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight">
            Core Practice Domains
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/practice/${area.slug}`}
                className="block rounded-lg border p-6 hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {area.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
