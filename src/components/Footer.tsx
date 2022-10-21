import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Link, Stack, Text } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box
      as="footer"
      backgroundColor={"gray.700"}
      color={"gray.100"}
      paddingX={2}
      paddingY={4}
      fontSize="xs"
      textAlign="right"
    >
      <Stack direction={["column", "row"]} justifyContent={"space-between"}>
        <Text as="span">
          All trademarks are property of their respective owners.
        </Text>
        <Link
          href="https://github.com/dstordy/ti-save-editor"
          isExternal
          display="flex"
          alignItems="center"
        >
          View on GitHub
          <ExternalLinkIcon mx={1} />
        </Link>
      </Stack>
    </Box>
  );
}
