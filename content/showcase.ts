import { title } from "process";

export type ShowcaseItem = {
  title: string;
  href: string;
  img: string;
};

const FIRE_WORKS: any[] = [
  {
    title: "gopx.dev",
    href: "https://github.com/GopalVerma1303/gopx.dev",
    img: "https://bettercallgopal.vercel.app/og.jpeg",
  },
  {
    title: "Kitchensink RNR",
    href: "https://github.com/GopalVerma1303/KitchenSinkRNR",
    img: "https://opengraph.githubassets.com/1/GopalVerma1303/KitchenSinkRNR",
  },
  {
    title: "SquadBook",
    href: "https:github.com/CodeDeployingSquad/SquadBook",
    img: "https://opengraph.githubassets.com/1/CodeDeployingSquad/SquadBook",
  },
];

const WORKS: any[] = [
  {
    title: "My Dotfiles",
    href: "https://github.com/GopalVerma1303/dotfiles",
    img: "/showcase/dotfiles.png",
  },
  {
    title: "CDS Website",
    href: "https://github.com/CodeDeployingSquad/WWW",
    img: "/showcase/cds.png",
  },
  {
    title: "Old Devsite",
    href: "https://github.com/GopalVerma1303/portfolio",
    img: "/showcase/old-devsite.png",
  },
  {
    title: "GitHub Repo Tree Generator",
    href: "https://github.com/GopalVerma1303/github-repo-tree-generator",
    img: "/showcase/github-repo-tree.png",
  },
  {
    title: "Thirdfunding",
    href: "https://github.com/GopalVerma1303/thirdfunding",
    img: "/showcase/thirdfunding.png",
  },
  {
    title: "VogueGenie",
    href: "https://github.com/GopalVerma1303/voguegenie",
    img: "/showcase/voguegenie.png",
  },
  {
    title: "Unite",
    href: "https://github.com/GopalVerma1303/Stimulus-Unite",
    img: "/showcase/unite.png",
  },
  {
    title: "Pictrovert",
    href: "https://github.com/GopalVerma1303/pictrovert",
    img: "/showcase/pictrovert.png",
  },
  {
    title: "TapTick",
    href: "https://github.com/GopalVerma1303/taptick",
    img: "/showcase/taptick.png",
  },
  {
    title: "TapTalk",
    href: "https://github.com/GopalVerma1303/taptalk",
    img: "/showcase/taptalk.png",
  },
];

const COLLABORATIONS: any[] = [
  {
    title: "Gane Solutions",
    href: "/showcase/gane",
    img: "/showcase/gane.png",
  },
  {
    title: "Quillbook",
    href: "/showcase/quillbook",
    img: "/showcase/quillbook.png",
  },
  {
    title: "Ghai Group",
    href: "/showcase/ghai",
    img: "/showcase/ghai.png",
  },
];

const CONTRIBUTIONS: any[] = [
  {
    title: "Rocket.Chat.ReactNative",
    href: "https://github.com/RocketChat/Rocket.Chat.ReactNative/pulls?q=is%3Apr+author%3Agopalverma1303",
    img: "https://opengraph.githubassets.com/1/RocketChat/Rocket.Chat.ReactNative",
  },
  {
    title: "Would-You-Bot/website",
    href: "https://github.com/Would-You-Bot/website/pulls?q=is%3Apr+author%3Agopalverma1303",
    img: "https://opengraph.githubassets.com/1/Would-You-Bot/website",
  },
];

const JOBS: any[] = [
  {
    title: "SDE Intern @BHEL",
    href: "/showcase/bhel",
    img: "/showcase/bhel.png",
  },
];

export { CONTRIBUTIONS, WORKS, COLLABORATIONS, FIRE_WORKS, JOBS };
