import { PRACTICE_AREAS } from "@/lib/practice-data";
import { notFound } from "next/navigation";

export default function PracticePage({
    params,
}: {
    params: { slug: string };
}) {
    const practice = PRACTICE_AREAS.find(
        (item) => item.slug === params.slug
    );

    if (!practice) {
        notFound();
    }

    return (
        <main className="min-h-screen px-6 py-24">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-3xl font-semibold mb-4">
                    {practice.title}
                </h1>

                <p className="text-lg text-muted-foreground">
                    {practice.shortDescription}
                </p>
            </div>
        </main>
    );
}
