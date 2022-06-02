import { Heading, Text } from "@chakra-ui/react";

type aboutProps = {
  content: string;
};

export const About: React.FC<aboutProps> = (props: aboutProps) => {
  return (
    <>
      <Heading size={"xl"} textAlign={"left"}>
        {"About me"}
      </Heading>
      <Text fontSize={"xl"}>{props.content}</Text>
    </>
  );
};
