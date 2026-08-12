import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { AumTagline } from "@/components/AumWords";
import { Brand } from "./Brand";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-navy-deep">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Brand />
          <p className="mt-6 font-display text-lg font-semibold tracking-wide text-primary uppercase">
            {site.institute}
          </p>
          <p className="mt-3 text-sm text-muted-foreground">“{site.mainTagline}”</p>
          <p className="mt-1 text-sm tracking-[0.14em] text-primary/90">{site.supportTagline}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks
              .filter((l) => l.label !== "Training Approach")
              .map((link) => (
                <li key={link.label}>
                  <Link
                    to="/"
                    hash={link.hash}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/privacy-policy" className="text-muted-foreground transition-colors hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground transition-colors hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 break-all text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            {site.company} — <AumTagline />
          </p>

        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
          © {new Date().getFullYear()} AUM Sol Corp. All Rights Reserved.
        </div>
    </footer>
  );
}
