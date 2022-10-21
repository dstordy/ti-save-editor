import { Box, Heading, VStack } from "@chakra-ui/react";
import { Card, CardVStack } from "@/components/Card";
import { InfoBlock } from "@/components/InfoBlock";
import { FactionsHatredTable } from "@/editors/FactionsHatredTable";
import { FactionsResourcesTable } from "@/editors/FactionsResourcesTable";

export function FactionsOverview() {
  return (
    <VStack direction="column" spacing={4} align="stretch">
      <Heading as="h1">Factions</Heading>
      <Card>
        <Heading size="lg">Stored Resources</Heading>
        <Box mt={4}>
          <FactionsResourcesTable />
        </Box>
      </Card>
      <Card>
        <CardVStack>
          <Heading size="lg">Hatred</Heading>
          <FactionsHatredTable />
          <InfoBlock>
            The values of how a faction assesses the other factions. Also
            displayed is the hatred a faction estimates the aliens have for
            them, as displayed by threat on the intel screen. Human factions are
            considered tolerated when below 20 hatred and at war when above 50.
            The aliens are at war with values above 50.
          </InfoBlock>
        </CardVStack>
      </Card>
    </VStack>
  );
}
