import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Clock, MonitorPlay, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEnroll } from "@/components/EnrollProvider";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import heroImage from "@/assets/hero-student.jpg";
import emblem from "@/assets/aum-emblem.png.asset.json";

const badges = [
  { label: "100% ONLINE CLASSES", icon: MonitorPlay },
  { label: "FLEXIBLE TIMINGS", icon: Clock },
  { label: "WEEKDAYS & WEEKENDS", icon: CalendarCheck },
  { label: "PRACTICAL TRAINING", icon: Wrench },
];

export function Hero() {
  const { openEnroll } = useEnroll();

  return (
    <section id="home" className="bg-hero relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div
        aria-hidden="true"
        className="animate-glow-pan pointer-events-none absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.22em] text-primary">
              {site.anywhere}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-6xl">
              <span className="text-gradient-gold">A</span>chieve{" "}
              <span className="text-gradient-gold">U</span>r{" "}
              <span className="text-gradient-gold">M</span>ission
              <br />
              with <span className="text-gradient-gold">AUM IT</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg font-semibold text-primary/90 sm:text-xl">
              Build Skills. Gain Confidence. Shape Your Career.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Industry-relevant online IT training designed to help students, freshers and working
              professionals build practical technology skills.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {badges.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-primary/25 bg-secondary/60 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.12em] text-muted-foreground"
                >
                  <Icon className="size-4 shrink-0 text-primary" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="gold" size="xl" onClick={() => openEnroll()}>
                ENROLL NOW
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/" hash="courses">
                  EXPLORE COURSES
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm tracking-[0.2em] text-primary/80">{site.supportTagline}</p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-xl">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 shadow-[var(--shadow-elegant)]">
              <img
                src={heroImage}
                alt="Student attending a live online IT class with a laptop and headset"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-3 bg-navy-deep/85 px-4 py-4 text-center backdrop-blur-md">
                <img
                  src={emblem.url}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  className="size-10 shrink-0 rounded-lg object-contain"
                />
                <p className="text-[0.7rem] leading-snug font-semibold tracking-[0.14em] text-primary uppercase sm:text-sm">
                  {site.institute}
                </p>
              </div>

            </div>
            <div className="absolute -top-5 -right-3 rounded-2xl border border-primary/40 bg-navy-deep/90 px-4 py-3 text-center shadow-[var(--shadow-gold)] sm:-right-6">
              <p className="font-display text-xl font-bold text-primary">100%</p>
              <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-muted-foreground">
                ONLINE
                <br />
                CLASSES
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
