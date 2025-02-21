import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section>
        <h2 className="mb-4">
          404 - Something went wrong. Please return to the{" "}
          <Link
            className="underline underline-offset-2 hover:text-bright-foreground"
            href="/"
          >
            homepage
          </Link>
          .
        </h2>
      </section>
    </main>
  );
}
