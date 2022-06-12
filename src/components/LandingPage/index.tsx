import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  Link,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as reactLink } from "react-scroll";
import { Social } from "../../types/social";
import { Socials } from "../Socials";

type LandingPageProps = {
  first_name: string;
  last_name: string;
  socials: Social[];
  summary: string;
  about: string;
  isMobile?: boolean;
};

export const LandingPage: React.FC<LandingPageProps> = (
  props: LandingPageProps
) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      w={"100%"}
      height={"100vh"}
      bgImage={
        colorMode === "dark" ? "/background-dark.png" : "/background-white.png"
      }
      bgRepeat="no-repeat"
    >
      <Container pt={{ base: 20, sm: 36 }} pb={28} maxW="6xl" centerContent>
        <Flex flexDir={{ base: "column", sm: "row" }} alignItems={"center"}>
          <Box flex={1} mr={{ base: 0, sm: 10 }} mt={{ base: 12, sm: 0 }}>
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0, transition: { type: "spring" } }}
            >
              <Heading size={"2xl"}>
                Hi👋, I&apos;m {props.first_name} {props.last_name}
              </Heading>
              <Text mt={2} fontSize="lg">
                {props.summary}
              </Text>
              <HStack mt={2}>
                <Socials socials={props.socials} />
              </HStack>
              <Box mt={4}>
                <Link
                  as={reactLink}
                  to={"contact"}
                  spy={true}
                  smooth={true}
                  py={1}
                  borderRadius={"lg"}
                  offset={-75}
                >
                  Get in touch
                </Link>
                <Link ml={6} py={1} href="hafid_ziti_resume.pdf" isExternal>
                  Resume
                </Link>
              </Box>
            </motion.div>
          </Box>

          <Box
            flex={1}
            flexShrink={"unset"}
            flexGrow={1}
            ml={{ base: 0, sm: 10 }}
            mt={{ base: 2, sm: 0 }}
          >
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0, transition: { type: "spring" } }}
            >
              <Image
                src="/landing-page-illustration.svg"
                alt="illustration"
                width={{ base: "344px", sm: "100%" }}
                height={{ base: "259px", sm: "100%" }}
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
