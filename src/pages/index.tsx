import { Text, Box, Container, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { LandingPage } from "../components/LandingPage";
import { Skills } from "../components/Skills";
import { Quote } from "../components/Quote";
import { Contact } from "../components/Contact";
import { About } from "../components/about";
import { Projects } from "../components/Projects";
import { experiences } from "../../data/experiences";
import bio from "../../data/bio.json";
import links from "../../data/links.json";
import { skills, mainSkills } from "../../data/skills";

const Index: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 480px)", { ssr: false });

  return (
    <>
      <NavBar {...links}></NavBar>
      <Container as="main" maxW="100%" p={0} centerContent>
        <LandingPage {...bio} isMobile={isMobile} />
        <Container maxW="6xl" centerContent>
          <Box id="about" mt={12}>
            <About content={bio.about} />
          </Box>
          <Box id="projects" mt={12}>
            <Projects experiences={experiences}></Projects>
          </Box>
          <Box id="skills" width={"100%"} mt={12}>
            <Skills skills={skills} mainSkills={mainSkills} />
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
};

export default Index;
