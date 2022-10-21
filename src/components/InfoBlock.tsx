import { InfoIcon } from "@chakra-ui/icons";
import { BoxProps, Container, HStack } from "@chakra-ui/react";

export function InfoBlock(props: BoxProps) {
  const { children, ...otherProps } = props;
  return (
    <HStack spacing={0} {...otherProps}>
      <InfoIcon />
      <Container as="p" maxW="container.md" textAlign="justify" fontSize="sm">
        {children}
      </Container>
    </HStack>
  );
}
