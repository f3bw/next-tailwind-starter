import Link from "next/link";

export default function PostsPage() {
  return (
    <section className="flex flex-col gap-4">
      <Link
        className="underline underline-offset-2 hover:text-muted-foreground"
        href="/posts/accessible-smooth-scrolling"
      >
        Accessible smooth scrolling
      </Link>

      <Link
        className="underline underline-offset-2 hover:text-muted-foreground"
        href="/posts/frontend-inspiration"
      >
        Frontend inspiration
      </Link>
    </section>
  );
}
