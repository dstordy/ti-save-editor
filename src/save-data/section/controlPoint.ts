import {
  DateTimeValue,
  EntityInstanceType,
  EntityReference,
  OptionalEntityReference,
} from "../baseTypes";

export interface ControlPointPriorities {
  Economy: number;
  Spoils: number;
  Welfare: number;
  Knowledge: number;
  Unity: number;
  Military: number;
  SpaceDevelopment: number;
  SpaceflightProgram: number;
  LaunchFacilities: number;
  MissionControl: number;
  BuildArmy: number;
  UpgradeArmy: number;
  InitiateNuclearProgram: number;
  BuildNuclearWeapons: number;
  BuildSpaceDefenses: number;
}

export interface ControlPoint extends EntityInstanceType {
  nation: EntityReference;
  faction: OptionalEntityReference;
  benefitsDisabled: boolean;
  defended: boolean;
  crackdownExpiration: DateTimeValue;
  defendExpiration: DateTimeValue;
  controlPointType: string;
  positionInNation: number;
  controlPointPriorities: ControlPointPriorities;
  totalWeightsForControlPoint: number;
  numPrioritiesWithWeight: number;
}
