import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { courses } from "./src/data/courses";

// Change this if you rename the GitHub repo. It must match the repo name
// exactly, with leading and trailing slashes, e.g. "/my-repo/".
// If you deploy to a custom domain instead of the github.io/<repo> URL,
// set this back to "/".
const BASE_PATH = "/aumittraining-cc6292a8/";

export default defineConfig({
  base: BASE_PATH,
  tanstackStart: {
    // No Node server on GitHub Pages: build everything to static HTML/JS/CSS
    // instead of relying on the "server" entry.
    prerender: {
      enabled: true,
      crawlLinks: true,
      pages: [
        "/",
        "/privacy-policy",
        "/terms",
        ...courses.map((c) => `/courses/${c.slug}`),
      ],
    },
  },
});
