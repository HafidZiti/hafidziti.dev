import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const LandingPage = () => {
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
      <Container pt={36} pb={28} maxW="container.xl" centerContent>
        <Flex
          flexDir={{ base: "column", sm: "row" }}
          // border={"1px"}
          alignItems={"center"}
        >
          <Box
            flex={1}
            // border={"1px"}
            mr={{ base: 0, sm: 10 }}
            mb={{ base: 16, sm: 0 }}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0, transition: { type: "spring" } }}
            >
              <Heading size={"3xl"}>Hi, I'm Hafid ZITI.</Heading>
              <Text mt={1}>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, b
              </Text>
              <HStack mt={2}>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href="https://chakra-ui.com" isExternal>
                    <Image src="github.svg" alt="github logo"></Image>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                >
                  <Link href="https://chakra-ui.com" isExternal>
                    <Image src="linkedin.svg" alt="linkedin logo"></Image>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.25,
                  }}
                >
                  <Link href="https://chakra-ui.com" isExternal>
                    <Image src="twitter.svg" alt="twitter logo"></Image>
                  </Link>
                </motion.div>
              </HStack>
              <Box mt={4}>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  size="sm"
                  mr={6}
                  p={5}
                >
                  Get in touch
                </Button>
                <Button colorScheme="blue" variant="solid" size="sm" p={5}>
                  Resume
                </Button>
              </Box>
            </motion.div>
          </Box>

          <Box
            flex={1}
            flexShrink={"unset"}
            flexGrow={1}
            ml={{ base: 0, sm: 10 }}
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0, transition: { type: "spring" } }}
            >
              <Image
                src="/landing-page-illustration.svg"
                alt="illustration"
                // border={"1px"}
              />
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
