export type Site = {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
  creator: {
    name: string;
    url: string;
  };
  ogImage: string;
  links: {
    x: string;
    github: string;
  };
};

export interface Job {
  officialName: string;
  website: string;
  industryType: string;
  location: string;
  duration: string;
  position: string;
  techStack: string;
  highlights: string;
}
