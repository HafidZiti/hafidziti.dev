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
  TagLeftIcon,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Experience as ExperienceType,
  Technology,
} from "../../types/experience";
import { iconColors } from "../../utils/IconColors";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

type Props = {
  experience: ExperienceType;
  minHeight: number;
  appStoreLink?: string;
  playStoreLink?: string;
};

export const Card: React.FC<Props> = ({
  experience: {
    title,
    customer,
    image,
    description,
    period,
    colors = ["blue.400", "purple.500"],
    technologies,
    link,
  },
  minHeight,
  appStoreLink,
  playStoreLink,
}: Props) => {
  const isPersonal = !period;

  return (
    <motion.div
      style={{ height: "100%" }}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      animate={{ transition: { type: "spring", duration: 0.1 } }}
    >
      <Center py={6} w={"full"} h={"100%"}>
        <Flex
          maxW={"400px"}
          w={"100%"}
          h={"100%"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          minHeight={{ base: 0, sm: `${minHeight}px` }}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box>
            <Center
              h={"100px"}
              w={"full"}
              bgGradient={`linear(to-l, ${colors[0]}, ${colors[1]})`}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={image}
                name={customer}
                objectFit={"cover"}
                bg="white"
                boxShadow={"xl"}
              />
            </Flex>

            <Box py={3} px={4}>
              <Stack spacing={0} mb={3}>
                <Heading
                  as={isPersonal ? undefined : "i"}
                  fontSize={isPersonal ? "2xl" : "lg"}
                  fontWeight={isPersonal ? 600 : 500}
                  fontFamily={"body"}
                  color={
                    isPersonal
                      ? useColorModeValue("gray.800", "white")
                      : undefined
                  }
                >
                  {title}
                </Heading>
                {period && (
                  <Text as="i" fontSize={"xs"} color={"gray.500"}>
                    {period}
                  </Text>
                )}
                <Text
                  fontSize={"sm"}
                  color={useColorModeValue("gray.800", "white")}
                  pt={isPersonal ? 3 : 1}
                >
                  {description}
                </Text>
              </Stack>
              <Wrap mb={2}>
                {technologies.map((techno: Technology, index: number) => (
                  <WrapItem key={index}>
                    <Tag size={"sm"} variant={"subtle"} px={2} py={1}>
                      <TagLeftIcon boxSize="30px">
                        <techno.Icon
                          color={
                            iconColors[
                              techno.name.replace(" ", "").toLowerCase()
                            ]
                          }
                          size={24}
                        ></techno.Icon>
                      </TagLeftIcon>
                      <TagLabel ml="0">{techno.name}</TagLabel>
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>
          </Box>

          {(link || appStoreLink || playStoreLink) && (
            <Flex
              align={"center"}
              alignSelf="flex-end"
              py={3}
              px={4}
              gap={4}
              w="full"
              justifyContent="flex-end"
            >
              {link && (
                <Box>
                  <Link href={link} isExternal>
                    <Text fontSize="sm" color={"blue.400"}>
                      Take a look <ExternalLinkIcon />
                    </Text>
                  </Link>
                </Box>
              )}
              {appStoreLink && (
                <Link href={appStoreLink} isExternal>
                  <Flex align="center" gap={1}>
                    <Icon as={SiAppstore} color="#0D96F6" />
                    <Text fontSize="sm" color={"blue.400"}>
                      App Store <ExternalLinkIcon />
                    </Text>
                  </Flex>
                </Link>
              )}
              {playStoreLink && (
                <Link href={playStoreLink} isExternal>
                  <Flex align="center" gap={1}>
                    <Icon as={SiGoogleplay} color="#34A853" />
                    <Text fontSize="sm" color={"blue.400"}>
                      Play Store <ExternalLinkIcon />
                    </Text>
                  </Flex>
                </Link>
              )}
            </Flex>
          )}
        </Flex>
      </Center>
    </motion.div>
  );
};
