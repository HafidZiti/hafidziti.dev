import React from "react";
import {
  Flex,
  FlexProps,
  Text,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

export const Footer: React.FC<FlexProps> = ({
  children,
  ...props
}: FlexProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      w={"full"}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      mt={6}
      px={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      py={4}
      {...props}
    >
      <Stack spacing={2} textAlign="center">
        {children}
        <Text fontSize="xs" color={useColorModeValue("gray.600", "gray.400")}>
          © 2022-{currentYear}
        </Text>
      </Stack>
    </Flex>
  );
};
