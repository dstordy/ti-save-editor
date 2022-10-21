import { Box, Flex } from "@chakra-ui/react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Sidebar } from "@/components/Sidebar";
import { useSaveDataIsLoaded } from "@/save-data/saveData";

export function Root() {
  const isLoaded = useSaveDataIsLoaded();

  return (
    <>
      <ScrollRestoration />
      <Flex
        direction={"column"}
        flex={1}
        minW={0}
        backgroundColor="gray.100"
        _dark={{ backgroundColor: "gray.800" }}
      >
        <PageHeader />
        <Flex flex={1} position="relative">
          {isLoaded && <Sidebar />}
          <Box
            flex={1}
            minW={0}
            as="main"
            paddingLeft={isLoaded ? 64 : 0}
            m={4}
          >
            <Outlet />
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </>
  );
}
