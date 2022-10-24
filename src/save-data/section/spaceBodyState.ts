import {
  DateTimeValue,
  EntityInstanceType,
  EntityReferenceList,
  OptionalTypedEntityReference,
  Vec3,
  Vec4,
} from "../baseTypes";

export interface SpaceBodyState extends EntityInstanceType {
  currentTilt: Vec4;
  nations: EntityReferenceList;
  habSites: EntityReferenceList;
  currentModelResource: string;
  orbits: EntityReferenceList;
  HohmannDates: Record<string, never>; //TODO: Unknown
  epoch_DateTime: DateTimeValue;
  _rnd_rotationOffset_Deg: number;
  globalPosition: Vec3;
  barycenter: OptionalTypedEntityReference;
}
