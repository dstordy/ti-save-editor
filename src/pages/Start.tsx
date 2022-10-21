import { Center, Code, Container, Text, VStack } from "@chakra-ui/react";
import { ImportSaveButton } from "@/components/ImportSaveButton";
import { useSaveDataIsLoaded } from "@/save-data/saveData";

export function Start() {
  const isLoaded = useSaveDataIsLoaded();
  return (
    <Center height="100%" flexDirection="column">
      <Container maxWidth={"container.md"}>
        <VStack
          direction="column"
          spacing={8}
          align="center"
          alignItems="stretch"
          textAlign="justify"
        >
          <Text>
            TI Save Editor is as work in progress third party save game viewer
            and editor for the game Terra Invicta.
          </Text>
          <Text>
            On Windows save files can be located in the{" "}
            <Code>%USERPROFILE%\Documents\My Games\TerraInvicta\Saves</Code>{" "}
            directory.
          </Text>
          <ImportSaveButton size="lg" colorScheme="blue">
            {isLoaded ? (
              <>Import a new save file</>
            ) : (
              <>Import a save file to begin</>
            )}
          </ImportSaveButton>
          <Text>
            Use this tool at your own risk. Information revealed by this tool
            could be considered spoilers. Editing a saved game may introduce
            unexpected issues leading to bugs or crashes. It is recommended to
            keep copies of saves from before any edits are made.
          </Text>
        </VStack>
      </Container>
    </Center>
  );
}
