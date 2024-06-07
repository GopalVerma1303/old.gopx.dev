// socialMediaLinks.ts

export type SocialProfile = {
  username: string;
  link: string;
};

const SOCIAL_MEDIA_LINKS: Record<string, SocialProfile> = {
  website: {
    username: "codedeployingsquad",
    link: "https://www.codedeployingsquad.tech",
  },
  github_cds: {
    username: "CodeDeployingSquad",
    link: "https://github.com/CodeDeployingSquad",
  },
  github_cds_website: {
    username: "cds-website",
    link: "https://github.com/CodeDeployingSquad/cds-website",
  },
  github_cds_website_docsRepositoryBase: {
    username: "cds-website",
    link: "https://github.com/CodeDeployingSquad/cds-website/tree/main",
  },
  discord: {
    username: "codedeployingsquad",
    link: "https://discord.gg/uR7DpxtaKw",
  },
  twitter: {
    username: "bettercallcds",
    link: "https://twitter.com/bettercallcds",
  },
  youtube: {
    username: "@codedeployingsquad537",
    link: "https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg",
  },
  instagram: {
    username: "bettercallcds",
    link: "https://www.instagram.com/bettercallcds/",
  },
  facebook: {
    username: "Code Deploying Squad",
    link: "https://www.facebook.com/profile.php?id=100069906660853",
  },
  reddit: {
    username: "CodeDeployingSquad",
    link: "https://www.reddit.com/r/CodeDeployingSquad",
  },
  linkedin: {
    username: "codedeployingsquad",
    link: "https://www.linkedin.com/company/codedeployingsquad/about/",
  },
};

export default SOCIAL_MEDIA_LINKS;
