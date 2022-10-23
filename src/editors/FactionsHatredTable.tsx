import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FormattedInput } from "@/components/FormattedInput";
import { getKeyedValue, setKeyedValue } from "@/save-data/baseTypes";
import {
  GameStateSections,
  getItem,
  getItems,
  useSaveDataValue,
  useSetSaveData,
} from "@/save-data/saveData";
import { FactionState } from "@/save-data/section/factionState";

function HatredCell(props: { factionData: FactionState; targetId: number }) {
  const setSaveData = useSetSaveData();
  const updateHatred = (value: number) => {
    setSaveData((draft) => {
      if (!draft) return;
      const factionData = getItem(
        draft,
        GameStateSections.FactionState,
        props.factionData.ID.value
      );
      if (factionData && Array.isArray(factionData.factionHate))
        setKeyedValue(factionData.factionHate, props.targetId, value);
    });
  };
  // On a start of game save factionHate is not yet populated.
  if (!Array.isArray(props.factionData.factionHate)) return <Td />;
  const hatred = getKeyedValue(props.factionData.factionHate, props.targetId);
  // There is no reflective hate, you can only hate others
  if (hatred == undefined) return <Td />;
  return (
    <Td p={1}>
      <FormattedInput
        size="sm"
        type="number"
        textAlign="right"
        value={hatred}
        formatter={(v) => v.toFixed(1)}
        onChange={(e) => updateHatred(Number(e.target.value) ?? 0)}
        step="any"
      />
    </Td>
  );
}

function FactionHatredRow(props: {
  factionData: FactionState;
  targetIds: number[];
}) {
  return (
    <Tr key={props.factionData.ID.value}>
      <Th
        position="sticky"
        left={0}
        backgroundColor="gray.50"
        _dark={{ backgroundColor: "gray.700" }}
        zIndex={1}
      >
        {props.factionData.displayName}
      </Th>
      {props.targetIds.map((targetId) => (
        <HatredCell
          key={targetId}
          factionData={props.factionData}
          targetId={targetId}
        />
      ))}
    </Tr>
  );
}

export function FactionsHatredTable() {
  const saveData = useSaveDataValue();

  if (!saveData) return null;

  const factions = getItems(saveData, GameStateSections.FactionState);

  const factionIds = factions.map((v) => v.ID.value);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th
              position="sticky"
              left={0}
              backgroundColor="gray.50"
              _dark={{ backgroundColor: "gray.700" }}
              textAlign="right"
              zIndex={1}
            >
              Hatred of &#10132;
            </Th>
            {factions.map((f) => (
              <Th key={f.ID.value}>{f.displayName}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {factions.map((f) => (
            <FactionHatredRow
              key={f.ID.value}
              factionData={f}
              targetIds={factionIds}
            />
          ))}
          <Tr>
            <Th
              position="sticky"
              left={0}
              backgroundColor="gray.50"
              _dark={{ backgroundColor: "gray.700" }}
              zIndex={1}
            >
              Aliens (Assessed)
            </Th>
            {factionIds.map((id) => (
              <Td key={id} textAlign="right">
                {getItem(
                  saveData,
                  GameStateSections.FactionState,
                  id
                )?.assessedAlienHateOfMe.toFixed(1)}
              </Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
