import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { approachSteps } from "@/data/site";

export function Approach() {
  return (
    <section id="training-approach" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Methodology"
          title="Our Training"
          highlight="Approach"
          subtitle="A five-step journey that takes you from your first concept to your first career-ready project."
        />

        <ol className="relative mt-16 grid gap-6 lg:grid-cols-5">
          <div
            aria-hidden="true"
            className="absolute top-9 right-6 left-6 hidden h-px bg-[linear-gradient(90deg,transparent,var(--gold),transparent)] opacity-50 lg:block"
          />
          {approachSteps.map((step, index) => (
            <Reveal key={step.no} delay={index * 80} className="relative h-full">
              <li className="glass-card flex h-full flex-col rounded-2xl p-6 text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-full border border-primary/40 bg-navy-deep font-display text-lg font-bold text-primary shadow-[var(--shadow-gold)]">
                  {step.no}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
