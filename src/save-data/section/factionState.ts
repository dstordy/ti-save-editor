import {
  EntityInstanceType,
  KeyedValueType,
  EntityReferenceList,
  ValueType,
  TypedKeyedValueType,
  DateTimeValue,
  TypedValueType,
} from "../baseTypes";
import { Resources, ResourceType } from "../resources";

interface ShipyardQueueItem {
  shipDesignTemplateName: string;
  // Todo: Fill interface
}

interface ActiveProjectTrigger {
  projectTemplateName: string;
  monthlyTriggerValue: number;
}

interface ProjectProgress {
  projectTemplateName: string;
  accumulatedResearch: number;
  slot: number;
  completed: false;
}

interface DesiredShipClass {
  shipDataName: null | string;
  destination: null | TypedValueType<number>;
  associatedFactionGoal: null | TypedValueType<number>;
}

interface AISavingTarget {
  faction: ValueType<number>;
  desiredPurchaseDataName: string;
  location: TypedValueType<number>;
  relatedGoal: TypedValueType<number>;
  bankingPercentage: number;
  bankedResources: Resources;
  yesterdaysResources: Resources;
  active: boolean;
}

interface ScenarioCustomizations {
  usingCustomizations: boolean;
  customDisplayName: null | string;
  customAdjective: null | string;
  customLeaderAddress: null | string;
  customFleetNameBase: null | string;
}

export interface FactionState extends EntityInstanceType {
  nShipyardQueues: KeyedValueType<ShipyardQueueItem>[];
  techNameContributionHistory: Record<string, number>;
  unlockedVictoryObjective: boolean;
  finishedProjectNames: string[];
  orgProjectSlotUnlocked: boolean;
  habProjectSlotUnlocked: boolean;
  atrocities: number;
  milestones: string[];
  factionOperationCompleteName: string;
  plannedPolicies: void[]; // Unknown
  missionControlUsage: number;
  player: ValueType<number>;
  councilors: EntityReferenceList;
  turnedCouncilors: EntityReferenceList;
  knownSpies: EntityReferenceList; // Assumed
  unassignedOrgs: EntityReferenceList;
  fleets: EntityReferenceList;
  habSectors: EntityReferenceList;
  availableOrgs: EntityReferenceList;
  availableCouncilors: EntityReferenceList;
  shipDesigns: unknown[];
  shipRefitDesigns: unknown[];
  obsoleteShipDesigns: unknown[];
  customPresets: unknown[];
  controlPoints: EntityReferenceList;
  armies: EntityReferenceList;
  resources: Record<ResourceType, number>;
  baseIncomes_year: Record<ResourceType, number>;
  dailyResourceTransfers: unknown[];
  lastWeeksSpoils: number;
  thisWeeksCumulativeSpoils: number;
  objectiveNames: Record<string, "Locked" | "Unlocked" | "Completed">;
  availableProjectNames: string[];
  activeProjectTriggers: ActiveProjectTrigger[];
  currentProjectProgress: ProjectProgress[];
  researchWeights: number[];
  intel: TypedKeyedValueType<number>[];
  highestIntel: TypedKeyedValueType<number>[];
  factionFleetsEncountered: KeyedValueType<number>[];
  lastRecordedLoyalty: KeyedValueType<number>[];
  defaultPriorityPresetTemplateName: string;
  primaryHab: null | ValueType<number>;
  nextRefitNumber: number;
  abductions: number;
  councilorsGenerated: number;
  specialRegionAdjacencies: null | {
    region1: ValueType<number>;
    region2: ValueType<number>;
  };
  alienInvestigations: number;
  aliensRemoved: number;
  armiesLost: Record<string, number>;
  aiValues: Record<string, number>;
  factionHate: KeyedValueType<number>[] | Record<string, never>;
  assessedAlienHateOfMe: number;
  lastDateOfFixedAlienHate: DateTimeValue;
  internalCouncilorSuspicion: KeyedValueType<number>[];
  factionGoals: Record<string, TypedValueType<number>[]>;
  desiredShipClass: DesiredShipClass;
  factionEarlyToDoList: string[];
  factionLateToDoList: string[];
  knownAlienSites: TypedKeyedValueType<DateTimeValue>;
  AIReviewProjects: boolean;
  knowsWinCondition: boolean;
  updateShipDesignsFlag: boolean;
  updateHabPlanningFlag: boolean;
  resourceIncomeDeficiencies: string[];
  mostPowerfulHumanEnemy: ValueType<number>;
  selfAssessement: string;
  AISavingTarget: AISavingTarget;
  focusGoal: null | TypedValueType<number>;
  lostControlPoints: KeyedValueType<DateTimeValue>[];
  initialAINationGoals: null | unknown[];
  boostAccounts: Record<
    "Base" | "Station" | "Probe" | "Org",
    null | DateTimeValue
  >;
  scenarioCustomizations: ScenarioCustomizations;
  showRegularNotifications: boolean;
  showTimerNotifications: boolean;
  showAlerts: boolean;
  showTurnSummary: boolean;
  alertSpaceTimerNotifications: boolean;
  showMonthlyIncomesInTopBarAndIntel: boolean;
  mapColorationStyle: string;
  shipsBuiltInClass: Record<number, string>;
  gameStateSubjectCreated: boolean;
  shipDesignCount: number;
}
