import Link from "next/link";
import Container from "../layout/container";

export default function Header() {
  return (
    <>
      <div className="h-24" />
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent ">
        <Container className="transition-[padding] duration-400 ease-smooth-out scrolling:p-4 scrolling:md:p-0">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-xl font-bold underline underline-offset-2 hover:text-bright-foreground group"
              >
                <div className="relative">
                  <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-10 h-10 dark:hidden block group-hover:opacity-0"
                  />
                  <img
                    src="/logo-w.svg"
                    alt="Logo"
                    className="w-10 h-10 hidden dark:block group-hover:opacity-0"
                  />
                  <img
                    src="/logo-c.svg"
                    alt="Logo"
                    className="w-10 h-10 absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </Link>
            </div>
            <nav>
              <div className="flex gap-3 items-center">
                <Link
                  href="/posts"
                  className="text-xl underline underline-offset-5 hover:text-bright-foreground"
                >
                  Posts
                </Link>
                <Link
                  href="https://github.com/f3bw"
                  target="_blank"
                  className="text-xl underline underline-offset-2 hover:text-bright-foreground"
                >
                  Github
                </Link>
              </div>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}
