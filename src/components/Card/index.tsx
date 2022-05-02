import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { Experience as ExperienceType } from "../../types/experience";

type Props = {
  experience: ExperienceType;
};

export const Card = ({
  experience: { title, image, description, period, color, technos, link },
}: Props) => {
  return (
    <Center py={10} w={"full"}>
      <Box
        maxW={"300px"}
        w={"100%"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box h={"100px"} w={"full"} bg={`${color}.100`} />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={image}
            objectFit={"cover"}
            name={"Author"}
            border={"2px"}
            borderColor={"white"}
          />
        </Flex>

        <Box py={3} px={4}>
          <Stack spacing={0} mb={3}>
            <Heading fontSize={"lg"} fontWeight={500} fontFamily={"body"}>
              {title}
            </Heading>
            <Text as="i" fontSize={"xs"} color={"gray.500"}>
              {period}
            </Text>
            <Text
              fontSize={"sm"}
              color={useColorModeValue("gray.800", "white")}
              pt={1}
            >
              {description}
            </Text>
          </Stack>
          <Wrap mb={2}>
            {technos.map((techno, index) => (
              <WrapItem key={index}>
                <Tag size={"sm"} variant={"subtle"}>
                  <Avatar
                    src={`${techno.logo}.svg`}
                    bg="white"
                    size="xs"
                    name={techno.name}
                    ml={-1}
                    mr={2}
                  />
                  <TagLabel>{techno.name}</TagLabel>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
          {link && (
            <Flex align={"self-end"} alignSelf="flex-end">
              <Spacer />
              <Box>
                <Link href="link" isExternal>
                  <Text fontSize="sm" color={"blue.400"}>
                    Take a look <ExternalLinkIcon />
                  </Text>
                </Link>
              </Box>
            </Flex>
          )}
        </Box>
      </Box>
    </Center>
  );
};
