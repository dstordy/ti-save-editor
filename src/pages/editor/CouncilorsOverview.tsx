import { Heading, VStack } from "@chakra-ui/react";
import { Card } from "@/components/Card";
import { CouncilorList } from "@/editors/CouncilorList";

export function CouncilorOverview() {
  return (
    <VStack direction="column" spacing={4} align="stretch">
      <Heading as="h1">Councilors</Heading>
      <Card>
        <CouncilorList />
      </Card>
    </VStack>
  );
}
