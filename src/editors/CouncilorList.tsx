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
  assertSaveLoaded,
  GameStateSections,
  useGetItems,
  useItemsMap,
  useSaveDataValue,
} from "@/save-data/saveData";
import {
  attributesAbbreviated,
  councilorAttributes,
  CouncilorAttributeType,
  CouncilorState,
} from "@/save-data/section/councilorState";
import {
  councilorBonusTarget,
  orgBonusesCouncilor,
} from "@/save-data/section/orgState";
import * as asserts from "@/util/asserts";

function CouncilorListRow(props: { councilor: CouncilorState }) {
  const saveData = useSaveDataValue();
  assertSaveLoaded(saveData);

  const factionMap = useItemsMap(saveData, GameStateSections.FactionState);
  const orgMap = useItemsMap(saveData, GameStateSections.OrgState);

  const orgs = props.councilor.orgs.map((id) => orgMap.get(id.value));

  const attrBonus: Partial<Record<CouncilorAttributeType, number>> = {};
  for (const org of orgs) {
    asserts.assertIsDefined(org);
    for (const bonusAttr of orgBonusesCouncilor) {
      const attrTarget = councilorBonusTarget[bonusAttr];
      attrBonus[attrTarget] = (attrBonus[attrTarget] ?? 0) + org[bonusAttr];
    }
  }

  return (
    <Tr key={props.councilor.ID.value}>
      <Td>
        {factionMap.get(props.councilor.faction?.value)?.displayName ?? "None"}
      </Td>
      <Td>{props.councilor.displayName}</Td>
      {councilorAttributes.map((attr) => (
        <Td key={attr}>
          {props.councilor.attributes[attr]}
          {(attrBonus[attr] ?? 0) > 0 &&
            ` / ${props.councilor.attributes[attr] + (attrBonus[attr] ?? 0)}`}
        </Td>
      ))}
    </Tr>
  );
}

export function CouncilorList() {
  const councilors = sortBy(useGetItems(GameStateSections.CouncilorState), [
    (v) => v.faction?.value,
  ]).filter((v) => v.faction != undefined);

  return (
    <TableContainer maxHeight="70vh" overflowY="scroll">
      <Table>
        <Thead>
          <Tr>
            <Th colSpan={2}></Th>
            <Th colSpan={councilorAttributes.length} textAlign="center">
              Base Stat / Org Modified
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
            <CouncilorListRow key={councilor.ID.value} councilor={councilor} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
