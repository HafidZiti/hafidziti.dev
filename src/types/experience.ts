type Techno = {
  name: string;
  logo: string;
};

export type Experience = {
  title: string;
  description: string;
  image: string;
  period: string;
  color: string;
  technos: Techno[];
  link?: string;
};
