import {
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  MonitorPlay,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { aboutTraining, trainingFeatures, whyChooseUs } from "@/data/site";

const featureIcons: Record<string, LucideIcon> = {
  CalendarClock,
  MonitorPlay,
  Users,
  BadgeCheck,
  TrendingUp,
};

export function WhyChoose() {
  return (
    <section id="why-choose-us" className="bg-navy-gradient relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Choose AUM IT"
          highlight="Training?"
          subtitle="Everything about our training is built around one outcome — making you genuinely employable."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="h-full">
                <article className="glass-card flex h-full gap-4 rounded-2xl p-6">
                  <ShieldCheck className="mt-0.5 size-6 shrink-0 text-primary" />
                  <div className="min-w-0">
                    <h3 className="font-display text-base leading-snug font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="glass-card h-full rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold text-primary">About Our Training</h3>
              <div className="gold-rule mt-4 w-24" aria-hidden="true" />
              <ul className="mt-6 space-y-4">
                {aboutTraining.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary transition-transform duration-300 hover:scale-110" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-xl border border-primary/25 bg-primary/10 px-4 py-3 text-center text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                Skills Today · Success Tomorrow
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {trainingFeatures.map((feature, index) => {
            const Icon = featureIcons[feature.icon] ?? BadgeCheck;
            return (
              <Reveal key={feature.title} delay={index * 60} className="h-full">
                <article className="glass-card flex h-full flex-col items-center rounded-2xl p-6 text-center">
                  <Icon className="size-8 text-primary" strokeWidth={1.4} />
                  <h3 className="mt-4 text-[0.8rem] font-bold tracking-[0.12em] text-primary">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{feature.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
