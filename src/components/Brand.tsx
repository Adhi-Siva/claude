import { Link } from "@tanstack/react-router";
import emblem from "@/assets/aum-emblem.png.asset.json";
import { AumTagline } from "@/components/AumWords";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";


export function Brand({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("flex min-w-0 items-center gap-3", className)}
      aria-label={`${site.company} — ${site.institute}`}
    >
      <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/40 bg-navy-deep shadow-[var(--shadow-gold)] sm:size-12">
        <img
          src={emblem.url}
          alt="AUM Sol Corp logo"
          width={96}
          height={96}
          className="size-full object-contain p-0.5"
        />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-bold text-primary sm:text-lg">
          {site.company}
        </span>
        {compact ? (
          <span className="block truncate text-[0.62rem] tracking-[0.16em] text-muted-foreground uppercase">
            AUM IT Training Institute
          </span>
        ) : (
          <AumTagline className="block truncate text-[0.6rem] tracking-[0.12em] text-muted-foreground sm:text-[0.68rem]" />
        )}

      </span>
    </Link>
  );
}
