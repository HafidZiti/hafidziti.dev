import { FC } from "react";

export interface Technology {
  name: string;
  Icon: FC;
}

export interface Experience {
  title: string;
  customer: string;
  description: string;
  image: string;
  period: string;
  colors: [string, string];
  technologies: Technology[];
  link?: string;
}
