import { Heading, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import {
  assertSaveLoaded,
  GameStateSections,
  getItem,
  useSaveDataValue,
} from "@/save-data/saveData";
import { assertIsDefined } from "@/util/asserts";

export function FactionDetail() {
  const { factionId } = useParams();
  const factionIdValue = Number(factionId);

  const saveData = useSaveDataValue();
  assertSaveLoaded(saveData);

  const factionData = getItem(
    saveData,
    GameStateSections.FactionState,
    factionIdValue
  );
  assertIsDefined(factionData);

  return (
    <VStack direction="column" spacing={4} align="stretch">
      <Heading as="h1">{factionData.displayName}</Heading>
    </VStack>
  );
}
