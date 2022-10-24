import { EntityInstanceType, KeyedValueType } from "../baseTypes";

export interface GlobalResearchState extends EntityInstanceType {
  finishedTechNames: string[];
  techProgress: {
    techTemplateName: string;
    accumulatedResearch: number;
    factionContributions: KeyedValueType<number>[];
  }[];
  campaignStartYear: number;
  finishedTechData: unknown[]; //TODO: Find type
  useHarshTree: boolean;
}
