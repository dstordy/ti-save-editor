import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { sortBy } from "lodash-es";
import {
  GameStateSections,
  getItems,
  getItemsMap,
  useSaveDataValue,
} from "@/save-data/saveData";
import {
  attributesAbbreviated,
  councilorAttributes,
} from "@/save-data/section/councilorState";

export function CouncilorList() {
  const saveData = useSaveDataValue();

  if (!saveData) return null;

  const councilors = sortBy(
    getItems(saveData, GameStateSections.CouncilorState),
    [(v) => v.faction?.value]
  ).filter((v) => v.faction != undefined);

  const factionMap = getItemsMap(saveData, GameStateSections.FactionState);

  return (
    <TableContainer maxHeight="70vh" overflowY="scroll">
      <Table>
        <Thead>
          <Tr>
            <Th colSpan={2}></Th>
            <Th colSpan={councilorAttributes.length} textAlign="center">
              Base Stats
            </Th>
          </Tr>
          <Tr
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: "gray.50",
              _dark: { backgroundColor: "gray.700" },
              zIndex: 1,
            }}
          >
            <Th>Faction</Th>
            <Th>Name</Th>
            {councilorAttributes.map((attr) => (
              <Th key={attr}>{attributesAbbreviated[attr]}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {councilors.map((councilor) => (
            <Tr key={councilor.ID.value}>
              <Td>
                {factionMap.get(councilor.faction?.value)?.displayName ??
                  "None"}
              </Td>
              <Td>{councilor.displayName}</Td>
              {councilorAttributes.map((attr) => (
                <Td key={attr}>{councilor.attributes[attr]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
