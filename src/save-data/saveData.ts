import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { KeyedValueType, ValueType } from "./baseTypes";
import { FactionState } from "./section/factionState";
import { PlayerState } from "./section/playerState";

export type GameStateSection<T> = KeyedValueType<T>[] | Record<string, never>;

export const GameStateSections = {
  FactionState: "PavonisInteractive.TerraInvicta.TIFactionState",
  PlayerState: "PavonisInteractive.TerraInvicta.TIPlayerState",
} as const;

type GameSectionsType =
  typeof GameStateSections[keyof typeof GameStateSections];

interface GameStates extends Record<GameSectionsType, unknown> {
  [GameStateSections.FactionState]: GameStateSection<FactionState>;
  [GameStateSections.PlayerState]: GameStateSection<PlayerState>;
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

export function getItem<T>(section: GameStateSection<T>, id: number) {
  return getItemsRaw(section).find((v) => v.Key.value === id)?.Value;
}

export function getFactions(data: SaveData) {
  return getItems(data.gamestates[GameStateSections.FactionState]);
}
