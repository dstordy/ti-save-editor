import { EntityInstanceType, OptionalEntityReference } from "../baseTypes";

export interface OrgState extends EntityInstanceType {
  displayNameWithArticle: string;
  applyingBonuses: boolean;
  assignedCouncilor: OptionalEntityReference;
  factionOrbit: OptionalEntityReference;
  tier: number;
  costMoney: number;
  costInfluence: number;
  costOps: number;
  costBoost: number;
  incomeMoney_month: number;
  incomeInfluence_month: number;
  incomeOps_month: number;
  incomeBoost_month: number;
  incomeMissionControl: number;
  incomeResearch_month: number;
  projectCapacityGranted: number;
  persuasion: number;
  command: number;
  investigation: number;
  espionage: number;
  administration: number;
  science: number;
  security: number;
  economyBonus: number;
  welfareBonus: number;
  knowledgeBonus: number;
  unityBonus: number;
  militaryBonus: number;
  spoilsBonus: number;
  spaceDevBonus: number;
  spaceflightBonus: number;
  miningBonus: number;
  XPModifier: number;
}
