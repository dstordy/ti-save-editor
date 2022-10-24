import {
  EntityInstanceType,
  EntityReference,
  EntityReferenceList,
  OptionalEntityReference,
  Vec3,
} from "../baseTypes";

export interface HabSiteState extends EntityInstanceType {
  parentBody: EntityReference;
  hab: OptionalEntityReference;
  landedFleets: EntityReferenceList;
  water_day: number;
  volatiles_day: number;
  metals_day: number;
  nobles_day: number;
  fissiles_day: number;
  latitude: number;
  longitude: number;
  pendingHab: boolean;
  positionOffsetDueToIrregularBody: Vec3;
  barycenter: OptionalEntityReference;
}
