import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl mx-auto p-6 sm:p-10", className)}>
      {children}
    </div>
  );
}
