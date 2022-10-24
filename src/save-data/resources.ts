export const allResources = [
  "Money",
  "Influence",
  "Operations",
  "Research",
  "Projects",
  "Boost",
  "MissionControl",
  "Water",
  "Volatiles",
  "Metals",
  "NobleMetals",
  "Fissiles",
  "Antimatter",
  "Exotics",
] as const;

export const storableResources = [
  "Money",
  "Influence",
  "Operations",
  "Boost",
  "Water",
  "Volatiles",
  "Metals",
  "NobleMetals",
  "Fissiles",
  "Antimatter",
  "Exotics",
] as const;

export const mineableResources = [
  "Water",
  "Volatiles",
  "Metals",
  "NobleMetals",
  "Fissiles",
] as const;

export const constructionResources = [
  "Water",
  "Volatiles",
  "Metals",
  "NobleMetals",
  "Fissiles",
  "Antimatter",
  "Exotics",
] as const;

export type ResourceType = typeof allResources[number];
export type MinableResourceType = typeof mineableResources[number];
export type ConstructionResourceType = typeof mineableResources[number];
export type Resources = Partial<Record<ResourceType, number>>;
