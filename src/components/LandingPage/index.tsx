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

export const LandingPage: React.FC = () => {
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
        <Flex
          flexDir={{ base: "column", sm: "row" }}
          // border={"1px"}
          alignItems={"center"}
        >
          <Box
            flex={1}
            // border={"1px"}
            mr={{ base: 0, sm: 10 }}
          >
            <motion.div initial={{ x: -300 }} whileInView={{ x: 0 }}>
              <Heading size={"3xl"}>Hi, I&apos;m Hafid ZITI.</Heading>
              <Text mt={1}>
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, b
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
            // border={"1px"}
            ml={{ base: 0, sm: 10 }}
          >
            <motion.div initial={{ x: 300 }} whileInView={{ x: 0 }}>
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
