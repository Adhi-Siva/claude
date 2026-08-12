import { Link } from "@tanstack/react-router";
import { Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useEnroll } from "@/components/EnrollProvider";
import { certificationPoints, site } from "@/data/site";

export function CareerCta() {
  const { openEnroll } = useEnroll();

  return (
    <section className="bg-navy-gradient relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="animate-glow-pan pointer-events-none absolute -bottom-32 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-primary uppercase">
            <span className="text-gradient-gold">A</span>chieve{" "}
            <span className="text-gradient-gold">U</span>r{" "}
            <span className="text-gradient-gold">M</span>ission with AUM IT
          </p>
          <h2 className="mt-5 font-display text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem]">
            Your Future Starts With the{" "}
            <span className="text-gradient-gold">Right Skills.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Learn practical technology skills, build real-world projects and take the next step
            toward your career goals.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/" hash="courses">
                Explore Courses
              </Link>
            </Button>
            <Button variant="gold" size="xl" onClick={() => openEnroll()}>
              Enroll Now
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Certification() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certification"
          title="Get Recognized for"
          highlight="Your Skills"
          subtitle="Finish your program with proof of what you can actually do — a certificate plus a portfolio of real work."
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <ul className="grid gap-4">
              {certificationPoints.map((point) => (
                <li
                  key={point}
                  className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4"
                >
                  <ShieldCheck className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-[2rem] border-2 border-primary/40 bg-navy-deep p-8 text-center shadow-[var(--shadow-gold)] sm:p-12">
              <div
                className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-primary/25"
                aria-hidden="true"
              />
              <Award className="mx-auto size-14 text-primary" strokeWidth={1.3} />
              <p className="mt-6 text-[0.65rem] font-semibold tracking-[0.26em] text-muted-foreground uppercase">
                Certificate of Completion
              </p>
              <p className="mt-4 font-display text-2xl font-bold text-primary">{site.institute}</p>
              <div className="gold-rule mx-auto mt-5 w-40" aria-hidden="true" />
              <p className="mt-5 text-sm text-muted-foreground">
                Awarded on successful completion of the curriculum, practical assignments and the
                final project.
              </p>
              <p className="mt-6 text-xs tracking-[0.18em] text-primary/80">
                {site.supportTagline}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
