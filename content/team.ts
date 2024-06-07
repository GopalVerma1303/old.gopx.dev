const TURBO_TEAM: Record<string, AuthorDetails> = {
  gopalverma: {
    name: "Gopal Verma",
    picture: "/people/gopalverma.png",
    xUsername: "bettercallgopal",
  },
};

export type Author = keyof typeof TURBO_TEAM;
export type AuthorDetails = {
  name: string;
  picture: string;
  xUsername?: string;
};

export default TURBO_TEAM;
