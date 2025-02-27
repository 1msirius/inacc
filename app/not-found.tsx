import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section className="prose prose-neutral dark:prose-invert">
      <h2>404 - Page not found</h2>
      <p>Oops! The page you&apos;re looking for doesn&apos;t seem to exist.</p>
    </section>
  );
}
