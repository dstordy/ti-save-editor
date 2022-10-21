import { EntityInstanceType, ValueType } from "../baseTypes";

export interface PlayerState extends EntityInstanceType {
  isAi: boolean;
  faction: ValueType<number>;
  name: string;
}
