import { Box, BoxProps, StackProps, VStack } from "@chakra-ui/react";

export function Card(props: BoxProps) {
  const { children, ...otherProps } = props;

  return (
    <Box
      minW={0}
      rounded="md"
      shadow="md"
      as="section"
      backgroundColor="white"
      _dark={{
        backgroundColor: "gray.900",
      }}
      p={4}
      {...otherProps}
    >
      {children}
    </Box>
  );
}

export function CardVStack(props: StackProps) {
  const { children, ...otherProps } = props;

  return (
    <VStack spacing={4} alignItems="stretch" {...otherProps}>
      {children}
    </VStack>
  );
}
