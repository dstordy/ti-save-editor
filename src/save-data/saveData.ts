import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { KeyedValueType, toKeyedValueToMap, ValueType } from "./baseTypes";
import { CouncilorState } from "./section/councilorState";
import { FactionState } from "./section/factionState";
import { PlayerState } from "./section/playerState";

export type GameStateSection<T> = KeyedValueType<T>[] | Record<string, never>;

export const GameStateSections = {
  FactionState: "PavonisInteractive.TerraInvicta.TIFactionState",
  PlayerState: "PavonisInteractive.TerraInvicta.TIPlayerState",
  CouncilorState: "PavonisInteractive.TerraInvicta.TICouncilorState",
} as const;

type GameSectionsType =
  typeof GameStateSections[keyof typeof GameStateSections];

interface GameStateSectionTypes extends Record<GameSectionsType, unknown> {
  [GameStateSections.FactionState]: FactionState;
  [GameStateSections.PlayerState]: PlayerState;
  [GameStateSections.CouncilorState]: CouncilorState;
}

type GameSectionTypeArray<T extends GameSectionsType> = KeyedValueType<
  GameStateSectionTypes[T]
>[];
type GameStates = {
  [key in keyof GameStateSectionTypes]: GameStateSection<
    GameStateSectionTypes[key]
  >;
};

export interface SaveData {
  currentID: ValueType<number>;
  gamestates: GameStates;
}

export const saveDataAtom = atomWithImmer<SaveData | undefined>(undefined);

export class NoSaveDataException extends Error {
  constructor() {
    super("Save data is not loaded");
  }
}

export function assertSaveLoaded(
  saveData: SaveData | undefined
): asserts saveData is SaveData {
  if (saveData == undefined) throw new NoSaveDataException();
}

export const useSaveData = () => useAtom(saveDataAtom);
export const useSaveDataValue = () => useAtomValue(saveDataAtom);
export const useSetSaveData = () => useSetAtom(saveDataAtom);
export const useSaveDataIsLoaded = () => useSaveDataValue() != undefined;

export function getItemsRaw<T extends GameSectionsType>(
  saveData: SaveData,
  section: T
): GameSectionTypeArray<T> {
  const sectionData = saveData.gamestates[section];
  return Array.isArray(sectionData) ? sectionData : [];
}

export function getItems<T extends GameSectionsType>(
  saveData: SaveData,
  section: T
) {
  return getItemsRaw(saveData, section).map((v) => v.Value);
}

export function getItemsMap<T extends GameSectionsType>(
  saveData: SaveData,
  section: T
) {
  return toKeyedValueToMap(getItemsRaw(saveData, section));
}

export function getItem<T extends GameSectionsType>(
  saveData: SaveData,
  section: T,
  id: number
) {
  return getItemsRaw(saveData, section).find((v) => v.Key.value === id)?.Value;
}

export function useGetItems<T extends GameSectionsType>(section: T) {
  const saveData = useSaveDataValue();
  assertSaveLoaded(saveData);
  return getItems(saveData, section);
}
