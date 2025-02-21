export default function HomePage() {
  return (
    <main>
      <section>
        <h2 className="mb-4">
          Creative developer based in Rotterdam. Currently working at{" "}
          <a
            className="underline underline-offset-2 hover:text-bright-foreground"
            href="https://www.youweagency.nl/"
          >
            Youwe
          </a>
          .
        </h2>

        <h2 className="md:max-w-[70%] w-full">
          I am a developer focused on creating accessible yet smooth user
          experiences. I have previous experience in installation design and
          development. My latest installation work can be found{" "}
          <a
            className="underline underline-offset-2 hover:text-bright-foreground"
            target="_blank"
            href="https://www.avanscmd.nl/work/graduation-2022/me-table"
          >
            here
          </a>
          .
        </h2>
      </section>
    </main>
  );
}
