import { Check } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AumTagline } from "@/components/AumWords";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import logo from "@/assets/aum-logo.jpg.asset.json";

const focus = [
  "Strong fundamentals",
  "Practical implementation",
  "Real-world projects",
  "Industry-relevant curriculum",
  "Mentorship",
  "Career guidance",
  "Hands-on learning",
];

export function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="About AUM IT"
          highlight="Training Institute"
          align="left"
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] bg-primary/10 blur-2xl"
              />
              <div className="glass-card relative overflow-hidden rounded-[2rem] p-8 text-center">
                <img
                  src={logo.url}
                  alt="AUM Sol Corp — A Unite for Multiple Solutions"
                  width={900}
                  height={600}
                  loading="lazy"
                  className="mx-auto w-full rounded-2xl border border-primary/20 object-cover"
                />
                <p className="mt-6 font-display text-lg font-bold text-primary">
                  {site.company} – <AumTagline />
                </p>

                <div className="gold-rule mx-auto mt-4 w-32" aria-hidden="true" />
                <p className="mt-4 text-sm tracking-[0.1em] text-muted-foreground uppercase">
                  AUM IT Training Institute – Empowering Minds. Building Careers.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg leading-relaxed font-medium text-foreground">
              AUM IT Training Institute is the training division of AUM Sol Corp, focused on
              delivering practical, industry-relevant IT education through flexible online learning.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our goal is to help learners transform their interest in technology into practical,
              career-ready skills. Every program is taught live by experienced trainers and built
              around doing the work, not just watching it.
            </p>

            <h3 className="mt-8 text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              We focus on
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {focus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-primary/15 bg-secondary/50 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/45 hover:text-foreground"
                >
                  <Check className="size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
