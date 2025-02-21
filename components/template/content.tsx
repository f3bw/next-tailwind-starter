import * as Craft from "@/components/craft";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <Craft.Section className="flex-1">
      <Craft.Container>{children}</Craft.Container>
    </Craft.Section>
  );
}
