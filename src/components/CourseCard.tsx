import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";
import { Reveal } from "./Reveal";
import { CourseIcon } from "./CourseIcon";

export function CourseCard({ course, delay = 0 }: { course: Course; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
        <CourseIcon name={course.slug} />

        <h3 className="mt-5 font-display text-xl font-bold text-primary">{course.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.tagline}
        </p>

        {course.tracks ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {course.tracks.map((track) => (
              <li
                key={track}
                className="rounded-full border border-primary/30 px-3 py-1 text-[0.7rem] font-medium text-primary"
              >
                {track}
              </li>
            ))}
          </ul>
        ) : null}

        <Link
          to="/courses/$slug"
          params={{ slug: course.slug }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
        >
          View Course
          <ArrowRight className="size-4" />
        </Link>
      </article>
    </Reveal>
  );
}
