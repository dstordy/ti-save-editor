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

interface GameStates
  extends Record<GameSectionsType, GameStateSection<unknown>> {
  [GameStateSections.FactionState]: GameStateSection<FactionState>;
  [GameStateSections.PlayerState]: GameStateSection<PlayerState>;
  [GameStateSections.CouncilorState]: GameStateSection<CouncilorState>;
}

export interface SaveData {
  currentID: ValueType<number>;
  gamestates: GameStates;
}

export const saveDataAtom = atomWithImmer<SaveData | undefined>(undefined);

export const useSaveData = () => useAtom(saveDataAtom);
export const useSaveDataValue = () => useAtomValue(saveDataAtom);
export const useSetSaveData = () => useSetAtom(saveDataAtom);
export const useSaveDataIsLoaded = () => useSaveDataValue() != undefined;

export function getItemsRaw<T>(section: GameStateSection<T>) {
  return Array.isArray(section) ? section : [];
}

export function getItems<T>(section: GameStateSection<T>) {
  return getItemsRaw(section).map((v) => v.Value);
}

export function getItemsMap<T>(section: GameStateSection<T>) {
  return toKeyedValueToMap(getItemsRaw(section));
}

export function getItem<T>(section: GameStateSection<T>, id: number) {
  return getItemsRaw(section).find((v) => v.Key.value === id)?.Value;
}

export function getFactions(data: SaveData) {
  return getItems(data.gamestates[GameStateSections.FactionState]);
}
