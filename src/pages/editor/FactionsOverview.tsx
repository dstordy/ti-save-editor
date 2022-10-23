import {
  Badge,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Card, CardVStack } from "@/components/Card";
import { DataList } from "@/components/DataList";
import { InfoBlock } from "@/components/InfoBlock";
import { RouterButton } from "@/components/RouterLink";
import { FactionsHatredTable } from "@/editors/FactionsHatredTable";
import { FactionsResourcesTable } from "@/editors/FactionsResourcesTable";
import {
  GameStateSections,
  useGetItem,
  useGetItems,
} from "@/save-data/saveData";
import { FactionState } from "@/save-data/section/factionState";
import { assertIsDefined } from "@/util/asserts";

function FactionCard(props: { faction: FactionState }) {
  const player = useGetItem(
    GameStateSections.PlayerState,
    props.faction.player.value
  );
  assertIsDefined(player);
  return (
    <Card p={2}>
      <CardVStack spacing={2}>
        <Flex justifyContent="space-between" alignItems="start">
          <Heading size="md">{props.faction.displayName}</Heading>
          {!player.isAI && <Badge colorScheme="blue">Player</Badge>}
        </Flex>
        <DataList
          items={[
            ["Control Points", props.faction.controlPoints.length],
            ["Fleets", props.faction.fleets.length],
            ["Armies", props.faction.armies.length],
            ["Finished Projects", props.faction.finishedProjectNames.length],
          ]}
        />
        <RouterButton
          alignSelf="end"
          to={`${props.faction.ID.value}`}
          size="sm"
          variant="outline"
        >
          Details
        </RouterButton>
      </CardVStack>
    </Card>
  );
}

export function FactionsOverview() {
  const factions = useGetItems(GameStateSections.FactionState);

  return (
    <VStack direction="column" spacing={4} align="stretch">
      <Heading as="h1">Factions</Heading>
      <SimpleGrid minChildWidth="xs" gap={4}>
        {factions.map((faction) => (
          <FactionCard key={faction.ID.value} faction={faction} />
        ))}
      </SimpleGrid>
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
