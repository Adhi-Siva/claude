import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Brand } from "./Brand";
import { navLinks } from "@/data/site";
import { useEnroll } from "./EnrollProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openEnroll } = useEnroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-primary/20 bg-navy-deep/90 py-2 backdrop-blur-xl"
          : "border-b border-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Brand compact className="flex-1 lg:flex-none" />

        <ul className="hidden flex-1 items-center justify-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to="/"
                hash={link.hash}
                className="rounded-full px-3 py-2 text-[0.8rem] font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <Button variant="gold" size="lg" onClick={() => openEnroll()}>
            Enroll Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-primary/40 text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-primary/20 bg-navy-deep/97 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "mt-3 max-h-[32rem] border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to="/"
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <Button
              variant="gold"
              size="lg"
              className="w-full"
              onClick={() => {
                setOpen(false);
                openEnroll();
              }}
            >
              Enroll Now
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
