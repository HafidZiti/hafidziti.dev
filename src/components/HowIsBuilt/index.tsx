import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

interface Technology {
  type: string;
  name: string;
  link: string;
}

type howIsBuiltProps = {
  intro: string;
  technologies: Technology[];
};

export const HowIsBuilt: React.FC<howIsBuiltProps> = (
  props: howIsBuiltProps
) => {
  const { intro, technologies } = props;

  return (
    <Box>
      <Heading size={"xl"} textAlign={"left"}>
        About this website
      </Heading>
      <Text mt={5}>{intro}</Text>
      <UnorderedList mt={3} ml={10}>
        {technologies.map((techno: Technology, index: number) => (
          <ListItem key={index}>
            <Text as={"span"} fontSize="md" fontWeight={"bold"}>
              {techno.type}:&nbsp;
            </Text>
            <Link color={"blue.600"} href={techno.link} isExternal>
              {techno.name} <ExternalLinkIcon mx="1px" />
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
      <Text mt={4}>
        There are also other dependencies used on this website like&nbsp;
        <Link
          color={"blue.600"}
          href="https://react-icons.github.io/react-icons/"
          isExternal
        >
          React-icons
          <ExternalLinkIcon mx="1px" />
        </Link>
        for managing easily the icons,&nbsp;
        <Link color={"blue.600"} href="https://chartjs.org" isExternal>
          Chat.js
          <ExternalLinkIcon mx="1px" />
        </Link>
        for building the radar chart in the skills section, if you want to know
        more, feel free to take a look on the source code on&nbsp;
        <Link
          color={"blue.600"}
          href="https://github.com/HafidZiti/portfolio"
          isExternal
        >
          Github
          <ExternalLinkIcon mx="1px" />
        </Link>
      </Text>
      <Center mt={6}>
        <Text>No ads, no tracking. Enjoy your day!</Text>
      </Center>
    </Box>
  );
};
