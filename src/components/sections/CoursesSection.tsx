import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { CourseIcon } from "@/components/CourseIcon";
import { Reveal } from "@/components/Reveal";
import { courses, professionalCourses } from "@/data/courses";

export function CoursesSection() {
  return (
    <section id="courses" className="bg-navy-gradient relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Courses"
          title="Skills That Build"
          highlight="Careers"
          subtitle="Live online, project-driven programs across programming, cloud, testing, design, data, marketing and workplace business skills."
        />
        <div
          id="professional-courses"
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {courses.map((course, index) => (
            <CourseCard key={course.slug} course={course} delay={index * 50} />
          ))}

          {professionalCourses.map((course, index) => (
            <Reveal key={course.name} delay={(courses.length + index) * 50} className="h-full">
              <article className="glass-card group flex h-full flex-col rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1">
                <CourseIcon name={course.name} />
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{course.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
