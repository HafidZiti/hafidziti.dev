import { Link as ChakraLink, Text, SimpleGrid, Box } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Experience } from "../types/experience";
import { NavBar } from "../components/NavBar";
import { LandingPage } from "../components/LandingPage";

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

const Index = () => (
  <>
    <NavBar></NavBar>
    <Container as="main">
      <LandingPage />
      <SimpleGrid columns={[1, null, 3]} spacing="40px" my={10} mx={10}>
        <Card experience={expec_mock} />
        <Card experience={expec_mock} />
        <Card experience={expec_mock} />
        <Card experience={expec_mock} />
        <Card experience={expec_mock} />
      </SimpleGrid>
      <Hero />
      {/* <Main>
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{" "}
          <Code>TypeScript</Code>.
        </Text>
   
        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://chakra-ui.com"
              flexGrow={1}
              mr={2}
            >
              Chakra UI <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
              Next.js <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main> */}

      <Footer>{/* <Text>Made with ❤️ by Hafid</Text> */}</Footer>

      <Box id="skills">
        <Text> here is my skill</Text>
      </Box>
    </Container>
  </>
);

export default Index;
