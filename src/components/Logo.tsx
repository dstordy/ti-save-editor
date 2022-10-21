import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      as="span"
      fontFamily="heading"
      fontSize="xl"
      fontWeight="extrabold"
      color="gray.700"
      _dark={{ color: "gray.300" }}
    >
      TI Save Editor
    </Text>
  );
}
