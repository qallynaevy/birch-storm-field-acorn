import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Home, Phone, Backpack } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const nav = [
  {
    to: "/",
    label: "Beranda",
    icon: Home,
    match: (p: string) => p === "/",
  },
  {
    to: "/darurat",
    label: "Darurat",
    icon: Phone,
    match: (p: string) => p.startsWith("/darurat"),
  },
  {
    to: "/panduan",
    label: "Panduan",
    icon: BookOpen,
    match: (p: string) =>
      p.startsWith("/panduan") || p.startsWith("/pertolongan") || p.startsWith("/bencana"),
  },
  {
    to: "/siaga",
    label: "Siaga",
    icon: Backpack,
    match: (p: string) => p.startsWith("/siaga"),
  },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-border bg-surface lg:flex">
        <div className="px-5 py-6">
          <Link to="/" aria-label="Beranda SiagaKu">
            <Logo />
          </Link>
          <p className="mt-2 text-xs leading-normal text-muted">
            Siap sebelum bencana
          </p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {nav.map((item) => {
            const active = item.match(pathname);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors duration-quick",
                  active ? "bg-primary text-primary-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
                )}
              >
                <Icon className="size-4" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <p className="px-5 py-5 text-xs leading-normal text-subtle">
          Edukasi, bukan pengganti 112.
        </p>
      </aside>

      <div className="lg:pl-60">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-sm lg:hidden">
          <Link to="/" aria-label="Beranda SiagaKu">
            <Logo />
          </Link>
        </header>
        <main className="app-main mx-auto w-full max-w-3xl px-4 pt-5 lg:px-8 lg:pt-10">
          {children}
        </main>
      </div>

      <nav className="app-bottom-nav fixed inset-x-0 bottom-0 z-20 border-t border-border bg-surface lg:hidden">
        <ul className="grid grid-cols-4">
          {nav.map((item) => {
            const active = item.match(pathname);
            const Icon = item.icon;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex min-h-12 flex-col items-center justify-center gap-0.5 pt-2 text-[11px] font-medium",
                    active ? "text-primary" : "text-muted",
                  )}
                >
                  <Icon className="size-5" strokeWidth={active ? 2.2 : 1.75} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
