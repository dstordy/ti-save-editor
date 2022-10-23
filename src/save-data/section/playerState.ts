import { EntityInstanceType, ValueType } from "../baseTypes";

export interface PlayerState extends EntityInstanceType {
  isAI: boolean;
  faction: ValueType<number>;
  name: string;
}
