import {
  DateTimeValue,
  EntityInstanceType,
  EntityReferenceList,
  OptionalEntityReference,
  OptionalTypedEntityReference,
  TypedEntityReference,
} from "../baseTypes";

export const councilorAttributes = [
  "Persuasion",
  "Espionage",
  "Command",
  "Investigation",
  "Science",
  "Administration",
  "Security",
  "Loyalty",
  "ApparentLoyalty",
] as const;

export type CouncilorAttributeType = typeof councilorAttributes[number];
const attributesReadable: Partial<Record<CouncilorAttributeType, string>> = {
  ApparentLoyalty: "Apparent Loyalty",
};

export const attributesAbbreviated: Record<CouncilorAttributeType, string> = {
  Persuasion: "PER",
  Espionage: "ESP",
  Command: "COM",
  Investigation: "INV",
  Science: "SCI",
  Administration: "ADM",
  Security: "SEC",
  Loyalty: "LOY",
  ApparentLoyalty: "LOY?",
};

export const getReadableAttribute = (attribute: CouncilorAttributeType) =>
  attributesReadable[attribute] ?? attribute;

export interface CouncilorState extends EntityInstanceType {
  faction: OptionalEntityReference;
  agentForFaction: OptionalEntityReference;
  autofailMissionsValue: number;
  protectingTarget: OptionalEntityReference;
  location: TypedEntityReference;
  recruitDate: DateTimeValue | null;
  detainedReleaseDate: DateTimeValue | null;
  traitTemplateNames: string[];
  learnedMissionsTemplateNames: string[]; // Always empty?
  attributes: Record<CouncilorAttributeType, number>;
  knowsIveBeenSeenBy: EntityReferenceList;
  activeMission: OptionalEntityReference;
  completedMission: OptionalEntityReference;
  repeatOrder: boolean;
  permanentAssignment: boolean;
  inTransit: boolean;
  personalName: string;
  familyName: string;
  typeTemplateName: string;
  homeRegion: OptionalEntityReference;
  possibleFaction: null; // Unknown
  detainingFaction: OptionalEntityReference;
  orgs: EntityReferenceList;
  priorLocation: OptionalTypedEntityReference;
  preMissionPhaseLocation: OptionalTypedEntityReference;
  locationIllustration: unknown; // Not required image info
  dateBorn: DateTimeValue;
  gender: "Male" | "Female";
  ancestry: string;
  status: string; // Always "active"?
  everBeenAvailable: boolean;
  appearanceTemplateName: string;
  voiceTemplateName: string;
  XP: number;
  gameStateSubjectCreated: boolean;
  templateName: string;
  displayName: string;
}
