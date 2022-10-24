import {
  EntityInstanceType,
  EntityReference,
  EntityReferenceList,
  OptionalEntityReference,
  OptionalKeyedValueArray,
  TypedEntityReference,
} from "../baseTypes";

export interface RegionState extends EntityInstanceType {
  nation: EntityReference;
  occupations: unknown; // TODO: Find type
  antiSpaceDefenses: boolean;
  underBombardment: boolean;
  isCounterfiring: boolean;
  alienFacility: EntityReference;
  alienActivity: EntityReference;
  alienLanding: EntityReference;
  alienCrashdown: EntityReference;
  xenoforming: EntityReference;
  occupier: OptionalEntityReference;
  adjacentNations: OptionalKeyedValueArray<string>;
  missionControl: number;
  boostPerYear_dekatons: number;
  populationInMillions: number;
  coreEconomicRegion: boolean;
  resourceRegion: boolean;
  colonyRegion: boolean;
  nuclearDetonations: number;
  oceanType: string;
  spaceFacilities: TypedEntityReference[];
  boostFacility: EntityReference;
  missionControlFacility: EntityReference;
  spaceDefenseFacility: EntityReference;
  armies: EntityReferenceList;
  abductions: number;
}
