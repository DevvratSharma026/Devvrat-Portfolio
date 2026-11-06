import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Devvrat Sharma — Middleware & AI-native Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Devvrat Sharma — IBM Associate System Engineer (Oracle Integration Cloud) and MERN + LLM full-stack developer based in Bengaluru.",
      },
      { name: "keywords", content: "middleware engineer, Oracle Integration Cloud, MERN developer, full stack developer, LLM, AI-native, Bengaluru" },
      { name: "author", content: "Devvrat Sharma" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "revisit-after", content: "7 days" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://devvrat-portfolio.vercel.app" },
      { property: "og:title", content: "Devvrat Sharma — Full Stack & Middleware Engineer" },
      { property: "og:description", content: "IBM Associate System Engineer specializing in Oracle Integration Cloud and building AI-native MERN products. Based in Bengaluru." },
      { property: "og:image", content: "https://devvrat-portfolio.vercel.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Devvrat Sharma Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@DevvratSharma" },
      { name: "twitter:title", content: "Devvrat Sharma — Full Stack & Middleware Engineer" },
      { name: "twitter:description", content: "IBM Associate System Engineer specializing in Oracle Integration Cloud and building AI-native MERN products." },
      { name: "twitter:image", content: "https://devvrat-portfolio.vercel.app/og-image.png" },
      { name: "theme-color", content: "#000000" },
      { name: "color-scheme", content: "dark" },
    ],
    links: [
      { rel: "canonical", href: "https://devvrat-portfolio.vercel.app" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "alternate", hrefLang: "en", href: "https://devvrat-portfolio.vercel.app" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Devvrat Sharma",
    url: "https://devvrat-portfolio.vercel.app",
    image: "https://devvrat-portfolio.vercel.app/og-image.png",
    description: "IBM Associate System Engineer specializing in Oracle Integration Cloud and building AI-native MERN products",
    jobTitle: "Associate System Engineer",
    worksFor: {
      "@type": "Organization",
      name: "IBM",
    },
    sameAs: [
      "https://github.com/DevvratSharma026",
      "https://linkedin.com/in/devvrat-sharma",
      "https://twitter.com/DevvratSharma",
    ],
    email: "devsharma.pcm.2003@gmail.com",
    location: {
      "@type": "City",
      name: "Bengaluru",
      addressCountry: "India",
    },
    knowsAbout: [
      "Oracle Integration Cloud",
      "MERN Stack",
      "Full Stack Development",
      "Middleware Engineering",
      "AI-native Applications",
      "LLM",
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
