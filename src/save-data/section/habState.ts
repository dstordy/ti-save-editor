import {
  DateTimeValue,
  EntityInstanceType,
  EntityReference,
  EntityReferenceList,
  OptionalEntityReference,
  OptionalTypedEntityReference,
  Vec3,
} from "../baseTypes";

export interface HabState extends EntityInstanceType {
  habType: string;
  tier: number;
  advisingCouncilors: EntityReferenceList;
  ringStruct: Record<"NE" | "NW" | "SE" | "SW", boolean>;
  connStruct: Record<"C42" | "C16" | "C36" | "C46" | "C56" | "C76", boolean>;
  coreDefendExpiration: null; //TODO: Unknown
  createdFromTemplate: boolean;
  underBombardment: boolean;
  sectors: EntityReferenceList;
  districts: null; //TODO: Unknown
  habSite: OptionalEntityReference;
  councilorsOnBoard: EntityReferenceList;
  dockedFleets: EntityReferenceList;
  customHabIconResource: string;
  anyCoreCompleted: boolean;
  coreDefended: boolean;
  faction: EntityReference;
  orbitState: OptionalEntityReference;
  _meanAnomalyAtEpoch_Rad: number;
  _epoch_JYears: number;
  epoch_DateTime: DateTimeValue;
  _rnd_rotationOffset_Deg: number | null;
  globalPosition: Vec3;
  barycenter: OptionalTypedEntityReference;
}
