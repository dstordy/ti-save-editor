import { Box, Flex, HStack } from "@chakra-ui/react";
import { ColorModeToggle } from "./ColorModeToggle";
import { Logo } from "./Logo";
import { ExportSaveButton } from "@/components/ExportSaveButton";

export function PageHeader() {
  return (
    <Box
      as="header"
      backgroundColor="white"
      _dark={{ backgroundColor: "gray.900" }}
      px={2}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={2}
    >
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        <Logo />
        <HStack>
          <ExportSaveButton colorScheme="gray" />
          <ColorModeToggle />
        </HStack>
      </Flex>
    </Box>
  );
}
