import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, BadgeCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useEnroll } from "@/components/EnrollProvider";
import { CourseIcon } from "@/components/CourseIcon";

import { courses, getCourse, type Course } from "@/data/courses";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }): { course: Course } => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const course = loaderData?.course;
    const title = course
      ? `${course.name} Training Online | AUM IT Training Institute`
      : "Course | AUM IT Training Institute";
    const description = course
      ? `${course.tagline} Live online ${course.name} training with practical projects, mentorship and certification at AUM IT Training Institute.`
      : "Online IT training courses at AUM IT Training Institute.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/courses/${course?.slug ?? ""}` }],
    };
  },
  component: CourseDetails,
});

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal className="glass-card rounded-2xl p-6 sm:p-8">
      <h2 className="font-display text-xl font-bold text-primary">{title}</h2>
      <div className="gold-rule mt-4 w-24" aria-hidden="true" />
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <BadgeCheck className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function CourseDetails() {
  const { course } = Route.useLoaderData() as { course: Course };
  const { openEnroll } = useEnroll();

  return (
    <article className="pt-28 pb-20 lg:pt-36">
      <header className="bg-hero border-b border-primary/20 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            hash="courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            All Courses
          </Link>
          <div className="group mt-8 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <CourseIcon name={course.slug} size="lg" className="shadow-[var(--shadow-gold)]" />

            <div className="min-w-0">
              <h1 className="font-display text-3xl leading-tight font-extrabold sm:text-4xl lg:text-5xl">
                <span className="text-gradient-gold">{course.name}</span> Training
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {course.tagline}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-2 rounded-full border border-primary/25 bg-secondary/60 px-4 py-2 text-xs font-semibold tracking-[0.1em] text-muted-foreground">
                  <Clock className="size-4 text-primary" />
                  {course.duration}
                </span>
                {course.tracks?.map((track) => (
                  <span
                    key={track}
                    className="rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    {track}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button variant="gold" size="lg" onClick={() => openEnroll(course.name)}>
                  ENROLL NOW
                </Button>
                <Button variant="goldOutline" size="lg" asChild>
                  <Link to="/" hash="contact">
                    Talk to an Advisor
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="glass-card mt-14 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-primary">Course Overview</h2>
          <div className="gold-rule mt-4 w-24" aria-hidden="true" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{course.overview}</p>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Block title="Who Should Learn This Course" items={course.audience} />
          <Block title="Prerequisites" items={course.prerequisites} />
        </div>

        <Reveal className="glass-card mt-8 rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold text-primary">Course Curriculum</h2>
          <div className="gold-rule mt-4 w-24" aria-hidden="true" />
          <ol className="mt-6 grid gap-5 sm:grid-cols-2">
            {course.curriculum.map((module, index) => (
              <li
                key={module.title}
                className="rounded-xl border border-primary/20 bg-secondary/50 p-5"
              >
                <p className="font-display text-sm font-bold tracking-[0.12em] text-primary">
                  MODULE {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-semibold">{module.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {module.topics.map((topic) => (
                    <li key={topic}>• {topic}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Block title="Key Concepts" items={course.keyConcepts} />
          <Block title="Practical Exercises" items={course.exercises} />
          <Block title="Projects" items={course.projects} />
          <Block title="Learning Outcomes" items={course.outcomes} />
          <Block title="Training Methodology" items={course.methodology} />
          <Reveal className="glass-card rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-primary">
              Duration &amp; Certification
            </h2>
            <div className="gold-rule mt-4 w-24" aria-hidden="true" />
            <p className="mt-5 text-sm font-semibold">{course.duration}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {course.certification}
            </p>
            <Button
              variant="gold"
              size="lg"
              className="mt-6 w-full"
              onClick={() => openEnroll(course.name)}
            >
              ENROLL NOW
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-14 rounded-2xl border border-primary/25 bg-navy-gradient p-8 text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
            Start Learning Today
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            <span className="text-gradient-gold">A</span>chieve{" "}
            <span className="text-gradient-gold">U</span>r{" "}
            <span className="text-gradient-gold">M</span>ission with{" "}
            <span className="text-gradient-gold">AUM IT</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="gold" size="lg" onClick={() => openEnroll(course.name)}>
              ENROLL NOW
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/" hash="courses">
                Explore Other Courses
              </Link>
            </Button>
          </div>
        </Reveal>

        <nav className="mt-14" aria-label="Other courses">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            Other Courses
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {courses
              .filter((item) => item.slug !== course.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: item.slug }}
                    className="inline-flex rounded-full border border-primary/25 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
