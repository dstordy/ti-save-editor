import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithImmer } from "jotai/immer";
import { KeyedValueType, toKeyedValueToMap, ValueType } from "./baseTypes";
import { CouncilorState } from "./section/councilorState";
import { FactionState } from "./section/factionState";
import { OrgState } from "./section/orgState";
import { PlayerState } from "./section/playerState";

export type GameStateSection<T> = KeyedValueType<T>[] | Record<string, never>;

const GoalStates = [
  "BuildFullStation",
  "FoundBase",
  "AssembleFleet",
  "SurveilEarth",
  "TransportCouncilorsWithFleet",
  "CaptureNation_Clean",
  "CaptureNation_Dirty",
  "FoundMaxStation",
  "SecureEarthSpace",
  "DefendWithFleet",
  "BuildMiningBase",
  "DevelopNation",
  "PillageNation",
  "ExpandNation",
  "MilitarizeNation",
  "AttackWithFleet",
  "ProspectSites",
  "BuildFullBase",
  "RepairFleet",
  "NonAggressionPact",
  "ResupplyFleet",
  "FoundPlatform",
  "BuildRefuellingStation",
  "WarOnFaction",
  "CaptureHab",
  "NeutralizeNation",
  "JoinFleet",
] as const;

export const GameStateSections = {
  BodySate: "PavonisInteractive.TerraInvicta.TISpaceBodyState",
  HabSiteState: "TIHabSiteState",
  LagrangePointState: "PavonisInteractive.TerraInvicta.TILagrangePointState",
  OrbitState: "PavonisInteractive.TerraInvicta.TIOrbitState",
  TimeState: "PavonisInteractive.TerraInvicta",
  RegionState: "PavonisInteractive.TerraInvicta",
  LaunchFacilityState: "PavonisInteractive.TerraInvicta.TILaunchFacilityState",
  MissionControlFacilityState:
    "PavonisInteractive.TerraInvicta.TIMissionControlFacilityState",
  SpaceDefensesFacilityState:
    "PavonisInteractive.TerraInvicta.TISpaceDefensesFacilityState",
  RegionAlienFacilityState:
    "PavonisInteractive.TerraInvicta.TIRegionAlienFacilityState",
  RegionAlienActivityState:
    "PavonisInteractive.TerraInvicta.TIRegionAlienActivityState",
  RegionUFOLandingState:
    "PavonisInteractive.TerraInvicta.TIRegionUFOLandingState",
  RegionUFOCrashdownState:
    "PavonisInteractive.TerraInvicta.TIRegionUFOCrashdownState",
  RegionXenoformingState:
    "PavonisInteractive.TerraInvicta.TIRegionXenoformingState",
  NationState: "PavonisInteractive.TerraInvicta.TINationState",
  ControlPoint: "PavonisInteractive.TerraInvicta.TIControlPoint",
  ArmyState: "PavonisInteractive.TerraInvicta.TIArmyState",
  CouncilorState: "PavonisInteractive.TerraInvicta.TICouncilorState",
  SpaceFleetState: "PavonisInteractive.TerraInvicta.TISpaceFleetState",
  OrgState: "PavonisInteractive.TerraInvicta.TIOrgState",
  HabState: "PavonisInteractive.TerraInvicta.TIHabState",
  TimeEvent: "PavonisInteractive.TerraInvicta.TITimeEvent",
  FactionState: "PavonisInteractive.TerraInvicta.TIFactionState",
  PlayerState: "PavonisInteractive.TerraInvicta.TIPlayerState",
  SpaceShipState: "PavonisInteractive.TerraInvicta.TISpaceShipState",
  SectorState: "PavonisInteractive.TerraInvicta.TISectorState",
  HabModuleState: "PavonisInteractive.TerraInvicta.TIHabModuleState",
  WarState: "PavonisInteractive.TerraInvicta.TIWarState",
  FederationState: "PavonisInteractive.TerraInvicta.TIFederationState",
  MissionPhaseState: "PavonisInteractive.TerraInvicta.TIMissionPhaseState",
  NotificationQueueState:
    "PavonisInteractive.TerraInvicta.TINotificationQueueState",
  EffectsState: "PavonisInteractive.TerraInvicta.TIEffectsState",
  GlobalResearchState: "PavonisInteractive.TerraInvicta.TIGlobalResearchState",
  GlobalValuesState: "PavonisInteractive.TerraInvicta.TIGlobalValuesState",
  PromptQueueState: "PavonisInteractive.TerraInvicta.TIPromptQueueState",
  MissionState: "PavonisInteractive.TerraInvicta.TIMissionState",
  MegafaunaArmyState: "PavonisInteractive.TerraInvicta.TIMegafaunaArmyState",
  SpaceCombatState: "PavonisInteractive.TerraInvicta.TISpaceCombatState",
  SpaceCombatProjectileState:
    "PavonisInteractive.TerraInvicta.TISpaceCombatProjectileState",
  AdHocOrbitState: "PavonisInteractive.TerraInvicta.TIAdHocOrbitState",
  ...(Object.fromEntries(
    GoalStates.map(
      (v) => [v, `PavonisInteractive.TerraInvicta.FactionGoal_${v}`] as const
    )
  ) as {
    [G in typeof GoalStates[number]]: `PavonisInteractive.TerraInvicta.FactionGoal_${G}`;
  }),
} as const;

type GameSectionsType =
  typeof GameStateSections[keyof typeof GameStateSections];

interface GameStateSectionTypes extends Record<GameSectionsType, unknown> {
  [GameStateSections.FactionState]: FactionState;
  [GameStateSections.PlayerState]: PlayerState;
  [GameStateSections.CouncilorState]: CouncilorState;
  [GameStateSections.OrgState]: OrgState;
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

export function useGetItem<T extends GameSectionsType>(section: T, id: number) {
  const saveData = useSaveDataValue();
  assertSaveLoaded(saveData);
  return getItem(saveData, section, id);
}
