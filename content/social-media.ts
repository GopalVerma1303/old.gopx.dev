// socialMediaLinks.ts

export type SocialProfile = {
  username: string;
  link: string;
};

const SOCIAL_MEDIA_LINKS: Record<string, SocialProfile> = {
  website: {
    username: "old.gopx.dev",
    link: "https://old.gopx.dev",
  },
  github: {
    username: "GopalVerma1303",
    link: "https://github.com/GopalVerma1303/old.gopx.dev",
  },
  github_docsRepositoryBase: {
    username: "gopal__verma",
    link: "https://discord.com/users/777003660244418570",
  },
  discord: {
    username: "codedeployingsquad",
    link: "https://discord.gg/uR7DpxtaKw",
  },
  twitter: {
    username: "bettercallgopal",
    link: "https://twitter.com/bettercallgopal",
  },
  youtube: {
    username: "@codedeployingsquad537",
    link: "https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg",
  },
  instagram: {
    username: "bettercallgopal",
    link: "https://www.instagram.com/bettercallgopal/",
  },
  facebook: {
    username: "Gopal Verma",
    link: "https://www.facebook.com/profile.php?id=100067485754453",
  },
  reddit: {
    username: "Gopal__Verma",
    link: "https://www.reddit.com/user/Gopal__Verma/",
  },
  linkedin: {
    username: "Gopal Verma",
    link: "https://www.linkedin.com/in/vermagopal/",
  },
};

export default SOCIAL_MEDIA_LINKS;
