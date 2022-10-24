import {
  DateTimeValue,
  EntityInstanceType,
  EntityReferenceList,
  OptionalKeyedValueArray,
  OptionalEntityReference,
  RefValue,
} from "../baseTypes";

export interface NationState extends EntityInstanceType {
  regions: EntityReferenceList;
  allies: EntityReferenceList;
  rivals: EntityReferenceList;
  claims: EntityReferenceList;
  wars: EntityReferenceList;
  armies: EntityReferenceList;
  publicOpinion: Record<string, number>;
  StartOfTurnNativeControlPoints: number;
  advisingCouncilors: EntityReferenceList;
  numControlPoints: number;
  numControlPoints_unclamped: number;
  economyScore: number;
  spaceFlightProgram: boolean;
  nuclearProgram: boolean;
  numNuclearWeapons: number;
  maxMilitaryTechLevel: number;
  GDP: number;
  inequality: number;
  education: number;
  democracy: number;
  cohesion: number;
  unrest: number;
  militaryTechLevel: number;
  controlPoints: EntityReferenceList;
  capital: OptionalEntityReference;
  federation: OptionalEntityReference;
  breakawayParent: OptionalEntityReference;
  breakaways: EntityReferenceList;
  adjacentNations: OptionalKeyedValueArray<string>;
  factionUnrestAttempts: OptionalKeyedValueArray<number>;
  historyCohesion: number[];
  historyDemocracy: number[];
  historyUnrest: number[];
  historyInequality: number[];
  historyGDP: number[];
  historySpaceFunding: number[];
  historyEducation: number[];
  historyPopulation: number[];
  historyBoost: number[];
  historyMissionControl: number[];
  historyMiltech: number[];
  historyNukes: number[];
  historyResearch: number[];
  historyInvestmentPoints: number[];
  historyPublicOpinion: Record<string, number>[];
  historyWarStatus: number[];
  historyNumRegions: number[];
  baseInvestmentPoints_month: number;
  directInvestmentedIPsThisYear: number;
  canBuildSpaceDefenses: boolean;
  alienNation: boolean;
  aggregateNation: boolean;
  improveRelationsCooldowns: OptionalKeyedValueArray<DateTimeValue | RefValue>;
  lastExecutiveChange: {
    newExecutive: OptionalEntityReference;
    date: DateTimeValue | null;
    cause: string;
  };
  spaceFunding_year: number;
  _accumulatedInvestmentPoints: {
    Economy: number;
    Welfare: number;
    Knowledge: number;
    Unity: number;
    Military: number;
    Spoils: number;
    SpaceDevelopment: number;
    SpaceflightProgram: number;
    LaunchFacilities: number;
    MissionControl: number;
    BuildArmy: number;
    UpgradeArmy: number;
    InitiateNuclearProgram: number;
    BuildNuclearWeapons: number;
    BuildSpaceDefenses: number;
  };
  oldRivalsCount: number;
}
