import { Center, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";
import { RouterButton } from "@/components/RouterLink";
import { NoSaveDataException } from "@/save-data/saveData";

export function ErrorPage() {
  const error = useRouteError();

  if (error instanceof NoSaveDataException) {
    return (
      <Center height="100%" flexDirection="column">
        <Container maxWidth={"container.md"}>
          <VStack direction="column" spacing={8} align="stretch">
            <Heading as={"h1"}>Oops!</Heading>
            <Text>No save data is loaded</Text>
            <RouterButton colorScheme="blue" to="/">
              Go to Start
            </RouterButton>
          </VStack>
        </Container>
      </Center>
    );
  }

  if (error instanceof Error) {
    return (
      <Center height="100%" flexDirection="column">
        <Container maxWidth={"container.md"}>
          <VStack direction="column" spacing={8} align="stretch">
            <Heading as={"h1"}>Oops!</Heading>
            <Text>An error has occurred.</Text>
            {error.message && <Text>{error.message}</Text>}
            <RouterButton colorScheme="blue" to="/">
              Go to Start
            </RouterButton>
          </VStack>
        </Container>
      </Center>
    );
  }
  throw error;
}
