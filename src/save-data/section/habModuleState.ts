import {
  DateTimeValue,
  EntityInstanceType,
  EntityReference,
} from "../baseTypes";

type HabPosition = Record<
  "C0" | "N1" | "N2" | "E1" | "E2" | "W1" | "W2" | "S1" | "S2",
  boolean
>;

export interface HabModuleState extends EntityInstanceType, HabPosition {
  constructionCompleted: string;
  completionDate: string;
  decommissioning: string;
  decommissionDate: string;
  powered: boolean;
  slot: number;
  sector: EntityReference;
  destroyed: boolean;
  defenseWeaponTemplateName: string | null;
  defenseWeaponTemplateName_gun: string | null;
  _spaceCombatValue: number;
  priorModuleTemplateName: string;
  lastTimeFired: DateTimeValue;
}
