import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { useEnroll } from "@/components/EnrollProvider";
import { site } from "@/data/site";

export function ContactSection() {
  const { openEnroll } = useEnroll();

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Contact"
          highlight="Us"
          subtitle="Talk to our team about batches, timings and the right course for your goals."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                {site.supportTagline}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Your Future Is Just a{" "}
                <span className="text-gradient-gold">Click Away!</span>
              </h3>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center gap-4 rounded-xl border border-primary/20 bg-secondary/50 px-4 py-4 transition-colors hover:border-primary/50"
                  >
                    <Phone className="size-5 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                        Phone
                      </span>
                      <span className="block truncate font-semibold">{site.phone}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-4 rounded-xl border border-primary/20 bg-secondary/50 px-4 py-4 transition-colors hover:border-primary/50"
                  >
                    <Mail className="size-5 shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                        Email
                      </span>
                      <span className="block truncate font-semibold">{site.email}</span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="lg" className="flex-1" onClick={() => openEnroll()}>
                  ENROLL NOW
                </Button>
                <Button variant="goldOutline" size="lg" className="flex-1" asChild>
                  <a
                    href={`https://wa.me/${site.phoneDigits}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <Button variant="navy" size="lg" className="mt-3 w-full" asChild>
                <a href={`mailto:${site.email}`}>
                  <Mail className="size-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
