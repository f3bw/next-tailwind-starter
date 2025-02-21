import Container from "../layout/container";

export default function Footer() {
  return (
    <footer className="py-4 md:py-6">
      <Container>
        <p className="text-sm">
          <span>©</span> <span>Fabrice Werger, 2025</span>
        </p>
      </Container>
    </footer>
  );
}
