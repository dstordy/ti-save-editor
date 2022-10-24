import {
  EntityInstanceType,
  EntityReference,
  EntityReferenceList,
} from "../baseTypes";

export interface SectorState extends EntityInstanceType {
  faction: EntityReference;
  sectorNum: number;
  hab: EntityReference;
  habModules: EntityReferenceList;
  slots: number;
}
