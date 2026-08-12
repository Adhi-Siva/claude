import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Approach } from "@/components/sections/Approach";
import { CareerCta, Certification } from "@/components/sections/CareerCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

const title = "AUM IT Training Institute | Online IT Courses & Professional Training";
const description =
  "AUM IT Training Institute under AUM Sol Corp provides practical online IT training in Java, Python, C, C++, Web Development, DevOps, AWS, Cloud, Software Testing, Data Analytics, UI/UX and Digital Marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "AUM IT Training Institute, AUM Sol Corp, online IT training, Java training, Python training, Full Stack training, software testing training, Selenium training, AWS training, DevOps training, Cloud training, Web development training, Data analytics training, UI UX training, Digital marketing training, online programming courses",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "AUM IT Training Institute",
            parentOrganization: { "@type": "Organization", name: "AUM Sol Corp" },
            slogan: "Achieve Ur Mission with AUM IT",
            description,
            telephone: "+91-99528-42808",
            email: "aumsoltraining@gmail.com",
          }),
        }}
      />
      <Hero />
      <About />
      <CoursesSection />
      <WhyChoose />
      <Approach />
      <CareerCta />
      <Certification />
      <FaqSection />
      <ContactSection />
    </>
  );
}
