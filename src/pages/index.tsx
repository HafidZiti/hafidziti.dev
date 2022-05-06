import { Text, SimpleGrid, Box, Container } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { Experience } from "../types/experience";
import { NavBar } from "../components/NavBar";
import { LandingPage } from "../components/LandingPage";
import { Skills } from "../components/Skills";
import React from "react";
import { Skill } from "../types/skill";
import { Quote } from "../components/Quote";
import { Contact } from "../components/Contact";

const expec_mock: Experience = {
  title: "React.js developer",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  image:
    "https://programadoresbrasil.com.br/wp-content/uploads/2020/10/ibm.1.png",
  period: "March, 2020 - March, 2022",
  color: "pink",
  technos: [
    { name: "React.js", logo: "react" },
    { name: "Apollo client", logo: "apollo" },
    { name: "Carbon", logo: "" },
    { name: "Jest", logo: "" },
    { name: "React Testing Library", logo: "" },
  ],
  link: "ss",
};

const expec_mock2: Experience = {
  title: "React.js developer",
  description:
    "Lorem Ipsum is simply dummyorem Ipsum has been ty text ever since the 1500s, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  image:
    "https://programadoresbrasil.com.br/wp-content/uploads/2020/10/ibm.1.png",
  period: "March, 2020 - March, 2022",
  color: "pink",
  technos: [
    { name: "React.js", logo: "react" },
    { name: "Apollo client", logo: "apollo" },
    { name: "Carbon", logo: "" },
    { name: "Jest", logo: "" },
    { name: "React Testing Library", logo: "" },
  ],
  link: "ss",
};

const skills_mock: Skill[] = [
  {
    name: "React.js",
    level: 90,
  },
  {
    name: "Angular2+",
    level: 60,
  },
  {
    name: "Javascript es6",
    level: 90,
  },
  {
    name: "Next.js",
    level: 90,
  },
  {
    name: "Node.js",
    level: 70,
  },
];

const Index: React.ReactNode = () => (
  <>
    <NavBar></NavBar>
    <Container as="main" maxW="100%" p={0} centerContent>
      <LandingPage />
      <Container maxW="6xl" centerContent>
        <Box id="projects">
          <SimpleGrid columns={[1, 2, 3]} spacingX={12}>
            <Card experience={expec_mock} />
            <Card experience={expec_mock2} />
            <Card experience={expec_mock} />
            <Card experience={expec_mock} />
            <Card experience={expec_mock} />
          </SimpleGrid>
        </Box>
        <Box id="skills">
          <Skills skills={skills_mock} />
        </Box>
        <Box id="quote">
          <Quote />
        </Box>
        <Box>
          <Contact />
        </Box>
        <Footer>
          <Text fontSize={"sm"}>Made with ❤️+☕ by hafid</Text>
        </Footer>
      </Container>
    </Container>
  </>
);

export default Index;
