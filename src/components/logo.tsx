import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <path
          d="M16 7.5c.4 0 .8.1 1.1.3l6.2 3.1c.7.4 1.2 1.1 1.2 1.9V18c0 4.2-3.1 6.6-8.1 8.8-.2.1-.5.1-.8 0C10.6 24.6 7.5 22.2 7.5 18v-5.2c0-.8.5-1.5 1.2-1.9l6.2-3.1c.3-.2.7-.3 1.1-.3z"
          className="fill-primary-fg"
        />
        <path
          d="M16 12.2l-4.2 3.1v4.2h2.4v-2.7h3.6v2.7h2.4v-4.2L16 12.2z"
          className="fill-primary"
        />
      </svg>
      <span className="font-display text-lg font-medium tracking-tight">SiagaKu</span>
    </span>
  );
}
