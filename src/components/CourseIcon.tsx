import { cn } from "@/lib/utils";

import cProgramming from "@/assets/icons/c-programming.png";
import cpp from "@/assets/icons/cpp.png";
import java from "@/assets/icons/java.png";
import python from "@/assets/icons/python.png";
import webDevelopment from "@/assets/icons/web-development.png";
import devops from "@/assets/icons/devops.png";
import cloud from "@/assets/icons/cloud.png";
import aws from "@/assets/icons/aws.png";
import uiUx from "@/assets/icons/ui-ux.png";
import digitalMarketing from "@/assets/icons/digital-marketing.png";
import manualTesting from "@/assets/icons/manual-testing.png";
import automationTesting from "@/assets/icons/automation-testing.png";
import dataAnalytics from "@/assets/icons/data-analytics.png";
import advancedExcel from "@/assets/icons/advanced-excel.png";
import msWord from "@/assets/icons/ms-word.png";
import msExcel from "@/assets/icons/ms-excel.png";
import msPowerpoint from "@/assets/icons/ms-powerpoint.png";
import tally from "@/assets/icons/tally.png";
import autocad from "@/assets/icons/autocad.png";

const iconMap: Record<string, string> = {
  "c-programming": cProgramming,
  cpp,
  java,
  python,
  "web-development": webDevelopment,
  devops,
  cloud,
  aws,
  "ui-ux": uiUx,
  "digital-marketing": digitalMarketing,
  "manual-testing": manualTesting,
  "automation-testing": automationTesting,
  "data-analytics": dataAnalytics,
  "advanced-excel": advancedExcel,
  "MS Word": msWord,
  "MS Excel": msExcel,
  "MS PowerPoint": msPowerpoint,
  Tally: tally,
  AutoCAD: autocad,
};

const sizes = {
  sm: "size-[4.5rem] rounded-2xl",
  lg: "size-28 rounded-[1.75rem]",
} as const;

export function CourseIcon({
  name,
  size = "sm",
  className,
}: {
  name: string;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const src = iconMap[name] ?? cProgramming;

  return (
    <span
      className={cn(
        "group/icon relative grid shrink-0 place-items-center overflow-hidden",
        "border border-primary/25 bg-[radial-gradient(120%_120%_at_25%_0%,oklch(0.28_0.09_272_/_0.9),oklch(0.12_0.07_274_/_0.95))]",
        "shadow-[0_12px_34px_-16px_oklch(0.12_0.07_274_/_0.9),inset_0_1px_0_oklch(1_0_0_/_0.12)]",
        "transition-all duration-500 ease-out animate-icon-float",
        "hover:-translate-y-1 hover:scale-[1.07] hover:border-primary/60 hover:shadow-[var(--shadow-gold)]",
        sizes[size],
        className,
      )}
      aria-hidden="true"
    >
      {/* soft gold halo */}
      <span className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-500 group-hover/icon:opacity-90 bg-[radial-gradient(circle_at_50%_55%,oklch(0.85_0.15_88_/_0.35),transparent_70%)]" />
      {/* top sheen */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 opacity-25 bg-[linear-gradient(180deg,oklch(1_0_0_/_0.35),transparent)]" />
      {/* shimmer sweep */}
      <span className="pointer-events-none absolute -inset-10 -translate-x-full rotate-12 bg-[linear-gradient(105deg,transparent_30%,oklch(1_0_0_/_0.28)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover/icon:translate-x-full" />
      <img
        src={src}
        alt=""
        loading="lazy"
        width={512}
        height={512}
        className={cn(
          "relative z-10 object-contain drop-shadow-[0_6px_14px_oklch(0.12_0.07_274_/_0.6)] transition-transform duration-500 group-hover/icon:scale-110 group-hover/icon:rotate-[-4deg]",
          size === "lg" ? "size-20" : "size-12",
        )}
      />
    </span>
  );
}
