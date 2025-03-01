import nextra from "nextra";
import withPWA from "next-pwa";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

const nextConfig = {
  images: {
    domains: [
      "bettercallgopal.vercel.app",
      "webui.gopx.dev",
      "webui-gopx.vercel.app",
      "gopx.dev",
      "www.gopx.dev",
      "old.gopx.dev",
      "www.codedeployingsquad.tech",
      "media.licdn.com",
      "github.com",
      "opengraph.githubassets.com",
    ],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  redirects: () => [
    {
      source: "/docs/guide/:slug(typescript|latex|tailwind-css|mermaid)",
      destination: "/docs/guide/advanced/:slug",
      permanent: true,
    },
    {
      source: "/docs/docs-theme/built-ins/:slug(callout|steps|tabs)",
      destination: "/docs/guide/built-ins/:slug",
      permanent: true,
    },
  ],
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/;
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );
    fileLoaderRule.exclude = allowedSvgRegex;
    config.module.rules.push({
      test: allowedSvgRegex,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

const withPWAConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default withPWAConfig(withNextra(nextConfig));
