import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

const title = "Privacy Policy | AUM IT Training Institute";
const description =
  "How AUM IT Training Institute, the training division of AUM Sol Corp, collects and uses the information you share through our enquiry and enrollment forms.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-24 sm:px-6 lg:pt-40">
      <h1 className="font-display text-3xl font-extrabold sm:text-4xl">
        Privacy <span className="text-gradient-gold">Policy</span>
      </h1>
      <div className="gold-rule mt-6 w-40" aria-hidden="true" />
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Information we collect</h2>
          <p className="mt-3">
            We collect only the details you submit through our enquiry and enrollment forms — your
            name, email address, phone number, course of interest, preferred batch and timing, and
            any message you send us.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">How we use it</h2>
          <p className="mt-3">
            Your details are used to respond to your enquiry, guide you on course and batch
            selection, and share training-related updates. We do not sell or rent your information.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Data retention</h2>
          <p className="mt-3">
            Enquiry information is retained only as long as required to support your learning journey
            and our internal record keeping.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg font-bold text-primary">Your choices</h2>
          <p className="mt-3">
            You may request correction or deletion of your details at any time by writing to{" "}
            <a href={`mailto:${site.email}`} className="text-primary">
              {site.email}
            </a>{" "}
            or calling {site.phone}.
          </p>
        </section>
      </div>
    </article>
  );
}
