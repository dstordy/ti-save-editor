export class ValueIsUndefinedError extends Error {
  constructor() {
    super();
  }
}

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value == undefined) throw new ValueIsUndefinedError();
}
