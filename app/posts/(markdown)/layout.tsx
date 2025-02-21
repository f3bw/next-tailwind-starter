import * as Craft from "@/components/craft";

export default function MarkdownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Craft.Main>{children}</Craft.Main>;
}
