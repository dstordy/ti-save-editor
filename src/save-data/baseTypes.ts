export interface ValueType<T> {
  value: T;
}

export interface TypedValue {
  $type: string;
}

export interface TypedValueType<T> extends TypedValue, ValueType<T> {}

export interface KeyedValueType<T> {
  Key: ValueType<number>;
  Value: T;
}

export interface TypedKeyedValueType<T> {
  Key: ValueType<number> & TypedValue;
  Value: T;
}

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface Vec4 extends Vec3 {
  w: number;
}

export type EntityReferenceList = ValueType<number>[];

export interface DateTimeValue {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
}

export interface EntityInstanceType extends TypedValue {
  ID: ValueType<number>;
  templateName: string | null;
  displayName: string | null;
  archived: boolean;
}

export function getKeyedValue<T>(
  container: KeyedValueType<T>[],
  key: number
): T | undefined {
  return container?.find((v) => v.Key.value == key)?.Value;
}

export function setKeyedValue<T>(
  container: KeyedValueType<T>[],
  key: number,
  value: T
) {
  const item = container?.find((v) => v.Key.value == key);
  if (item != undefined) {
    item.Value = value;
  }
}
