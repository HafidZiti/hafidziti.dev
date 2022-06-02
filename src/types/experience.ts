export type Technology = {
  name: string;
  Icon: any; // It's a react component, comes from react-icons lib
};

export type Experience = {
  title: string;
  customer: string;
  description: string;
  image: string;
  period: string;
  colors: [string, string];
  technologies: Technology[];
  link?: string;
};
