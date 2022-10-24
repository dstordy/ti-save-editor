import {
  EntityInstanceType,
  EntityReferenceList,
  OptionalTypedEntityReference,
  TypedEntityReference,
  TypedKeyedValueType,
} from "../baseTypes";
import { ConstructionResourceType, MinableResourceType } from "../resources";

export interface GlobalValuesState extends EntityInstanceType {
  earthAtmosphericCO2_ppm: number;
  earthAtmosphericCH4_ppm: number;
  earthAtmosphericN2O_ppm: number;
  stratosphericAerosols_ppm: number;
  globalSeaLevelAnomaly_cm: number;
  nuclearStrikes: number;
  looseNukes: number;
  difficulty: number;
  controlPointMaintenanceFreebies: number;
  campaignStartVersion: string;
  maxGlobalExpectedHabSiteProduction_day: Record<MinableResourceType, number>;
  resourceMarketValues: Record<ConstructionResourceType, number>;
  pastEarthAtmosphericCO2_ppm: number;
  pastEarthAtmosphericCH4_ppm: number;
  pastEarthAtmosphericN2O_ppm: number;
  globalSeaLevelRise1Triggered: boolean;
  globalSeaLevelRise2Triggered: boolean;
  currentNuclearExchanges: unknown; // TODO: Find type
  inactiveNarrativeEvents: string[];
  narrativeEvents: Record<string, number>;
  narrativeEventsOnCooldown_months: Record<string, number>;
  narrativeEventsTargetSpecificCooldowns: Record<
    string,
    {
      coolingState: TypedEntityReference;
      cooldown_months: number;
    }[]
  >;
  triggeredOncePerCampaignEvents: string[];
  triggeredOncePerTargetEvents: Record<string, EntityReferenceList>;
  priorNarrativeEventData: Record<
    string,
    {
      priorEventTemplateName: string;
      actorState: TypedEntityReference;
      selectedTarget: TypedEntityReference;
      secondaryTarget: OptionalTypedEntityReference;
      allTargetsandSeconds: TypedKeyedValueType<unknown | null>;
    }[]
  >;
  pendingNarrativeEvents: unknown;
  interstateWars: EntityReferenceList;
  moddingActive: boolean;
  moddingUsedAnytime: boolean;
  globalMilestones: Record<string, EntityReferenceList>;
  alienInvaderArmies: number;
  savedInit: boolean;
  tutorialMode: boolean;
  startDifficulty: number;
}
