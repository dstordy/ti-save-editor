import {
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import numeral from "numeral";
import { useState } from "react";
import { ResourceType, storableResources } from "@/save-data/resources";
import {
  GameStateSections,
  getItem,
  getItems,
  useSaveDataValue,
  useSetSaveData,
} from "@/save-data/saveData";
import { FactionState } from "@/save-data/section/factionState";

function ResourceCell(props: {
  factionData: FactionState;
  resource: ResourceType;
}) {
  const [focused, setFocused] = useState(false);
  const setSaveData = useSetSaveData();
  const updateResourceValue = (resource: ResourceType, value: number) => {
    setSaveData((draft) => {
      if (!draft) return;
      const factionData = getItem(
        draft,
        GameStateSections.FactionState,
        props.factionData.ID.value
      );
      if (factionData) factionData.resources[resource] = value;
    });
  };
  const value = props.factionData.resources[props.resource];
  return (
    <Td p={1}>
      <Input
        size="sm"
        textAlign="right"
        type={focused ? "number" : "text"}
        value={
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          focused
            ? value
            : // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
              numeral(Math.floor(value)).format("0.[0] a").toUpperCase()
        }
        onChange={(e) =>
          updateResourceValue(props.resource, Number(e.target.value) ?? 0)
        }
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        step="any"
      />
    </Td>
  );
}

function FactionResourceRow(props: { factionData: FactionState }) {
  return (
    <Tr>
      <Th
        position="sticky"
        left={0}
        backgroundColor="gray.50"
        _dark={{ backgroundColor: "gray.700" }}
        zIndex={1}
      >
        {props.factionData.displayName}
      </Th>

      {storableResources.map((r) => (
        <ResourceCell key={r} factionData={props.factionData} resource={r} />
      ))}
    </Tr>
  );
}

export function FactionsResourcesTable() {
  const saveData = useSaveDataValue();

  if (!saveData) return null;

  const factions = getItems(saveData, GameStateSections.FactionState);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th
              minWidth="12em"
              position="sticky"
              left={0}
              backgroundColor="gray.50"
              _dark={{ backgroundColor: "gray.700" }}
            />
            {storableResources.map((r) => (
              <Th minWidth="9em" px={1} key={r}>
                {r}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {factions.map((f) => (
            <FactionResourceRow key={f.ID.value} factionData={f} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
