import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

const title = "Terms & Conditions | AUM IT Training Institute";
const description =
  "Terms and conditions for training programs, batches, certification and communication at AUM IT Training Institute, a division of AUM Sol Corp.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:pt-40">
      <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
        Terms &amp; <span className="text-gradient-gold">Conditions</span>
      </h1>
      <div className="gold-rule mt-6 w-40" aria-hidden="true" />
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Enrollment</h2>
          <p className="mt-3">
            Submitting an enquiry or enrollment form is a request for information and batch
            allocation. Enrollment is confirmed only after our team communicates with you and batch
            details are agreed.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Batches and schedules</h2>
          <p className="mt-3">
            Course durations, batch timings and trainer allocation may be adjusted to maintain
            training quality. Any change will be communicated to enrolled learners in advance.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Certification</h2>
          <p className="mt-3">
            Certificates are issued by AUM IT Training Institute upon completion of the curriculum,
            practical assignments and the final project. Certification is institute-issued and does
            not represent university or government accreditation.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Course material</h2>
          <p className="mt-3">
            All training material shared during the program is for personal learning use only and may
            not be redistributed, resold or reproduced without written permission.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Contact</h2>
          <p className="mt-3">
            For any clarification, reach us at{" "}
            <a href={`mailto:${site.email}`} className="text-primary">
              {site.email}
            </a>{" "}
            or {site.phone}.
          </p>
        </section>
      </div>
    </article>
  );
}
