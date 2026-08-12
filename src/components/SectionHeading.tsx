import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem]">
        {title} {highlight ? <span className="text-gradient-gold">{highlight}</span> : null}
      </h2>
      <div
        className={cn("gold-rule mt-5 w-40", align === "center" && "mx-auto")}
        aria-hidden="true"
      />
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
