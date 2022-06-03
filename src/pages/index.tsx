import { Text, Box, Container } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { LandingPage } from "../components/LandingPage";
import { Skills } from "../components/Skills";
import React from "react";
import { Quote } from "../components/Quote";
import { Contact } from "../components/Contact";
import { About } from "../components/about";
import { Projects } from "../components/Projects";
import { experiences } from "../../data/experiences";
import * as bio from "../../data/bio.json";
import * as skills from "../../data/skills";

const Index: React.FC = () => (
  <>
    <NavBar></NavBar>
    <Container as="main" maxW="100%" p={0} centerContent>
      <LandingPage {...bio} />
      <Container maxW="6xl" centerContent>
        <Box id="about" mt={12}>
          <About content={bio.about} />
        </Box>
        <Box id="projects" mt={12}>
          <Projects experiences={experiences}></Projects>
        </Box>
        <Box id="skills" width={"100%"} mt={12}>
          <Skills skills={skills.skills} mainSkills={skills.mainSkills} />
        </Box>
        <Box id="contact" width={"100%"} mt={12}>
          <Contact socials={bio.socials} />
        </Box>
        <Box id="quote" width={"100%"} mt={12}>
          <Quote />
        </Box>
        <Footer>
          <Text fontSize={"sm"}>Made with ❤️+☕ by hafid</Text>
        </Footer>
      </Container>
    </Container>
  </>
);

export default Index;
