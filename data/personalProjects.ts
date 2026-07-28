import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpo,
  SiSqlite,
  SiSentry,
  SiGoogle,
  SiOpenai,
  SiAppstore,
  SiSupabase,
  SiNestjs,
} from "react-icons/si";
import { IconType } from "react-icons";

export interface PersonalProject {
  name: string;
  description: string;
  image?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  technologies: { name: string; Icon: IconType }[];
}

export const personalProjects: PersonalProject[] = [
  {
    name: "DRIVEELY",
    description:
      "Personal mobile app designed and published on the App Store and Google Play for tracking vehicle expenses and managing automotive costs. Built with React Native and Expo, featuring SQLite for local storage and RevenueCat for in-app purchases.",
    image: "Driveely.jpg",
    appStoreLink: "https://apps.apple.com/app/id6755087908",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.hafidziti.driveely",
    technologies: [
      { name: "React Native", Icon: SiReact },
      { name: "Expo", Icon: SiExpo },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "SQLite", Icon: SiSqlite },
      { name: "EAS Build", Icon: SiExpo },
      { name: "Sentry", Icon: SiSentry },
      { name: "App Store Connect", Icon: SiAppstore },
    ],
  },
  {
    name: "VESTO",
    description:
      "Mobile application that transforms selfies into high-definition professional portraits using AI. Features advanced image processing with React Native Reanimated and Expo Image, powered by Gemini APIs for AI generation.",
    image: "vesto.jpg",
    appStoreLink: "https://apps.apple.com/app/id6760599438",
    technologies: [
      { name: "React Native", Icon: SiReact },
      { name: "Expo", Icon: SiExpo },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Supabase", Icon: SiSupabase },
      { name: "EAS Build", Icon: SiExpo },
      { name: "Sentry", Icon: SiSentry },
      { name: "Gemini", Icon: SiGoogle },
      { name: "App Store Connect", Icon: SiAppstore },
    ],
  },
  {
    name: "HUMANIFY",
    description:
      "Mobile app for detecting AI-generated content and reformulating texts to make them more natural. Built with a full-stack approach using React Native for the frontend and Node.js/Nest.js backend, integrated with OpenAI APIs.",
    image: "humanify.jpg",
    appStoreLink: "https://apps.apple.com/app/id6756985053",
    technologies: [
      { name: "React Native", Icon: SiReact },
      { name: "Expo", Icon: SiExpo },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Nest.js", Icon: SiNestjs },
      { name: "EAS Build", Icon: SiExpo },
      { name: "SQLite", Icon: SiSqlite },
      { name: "Sentry", Icon: SiSentry },
      { name: "OpenAI", Icon: SiOpenai },
      { name: "App Store Connect", Icon: SiAppstore },
    ],
  },
];
