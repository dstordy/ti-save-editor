// Based on the public domain json2.js by Douglas Crockford
// https://github.com/douglascrockford/JSON-js
// Exports JSON for quirks of TI's use of Newtonmore.Json
// Partly upgraded to modern JS and TS

interface HasToJSON {
  toJSON(key: string): unknown;
}

function hasToJSON(v: unknown): v is HasToJSON {
  return (
    v != undefined &&
    typeof v === "object" &&
    "toJSON" in v &&
    typeof (v as HasToJSON).toJSON === "function"
  );
}

export function stringify(value: unknown, space?: string | number | undefined) {
  const indent = typeof space === "number" ? " ".repeat(space) : space ?? "";

  function str(
    key: string | number,
    holder: Record<string | number, unknown>,
    baseIndent: string
  ): string {
    // Produce a string from holder[key].

    let value: unknown = holder[key];

    // If the value has a toJSON method, call it to obtain a replacement value.

    if (hasToJSON(value)) {
      value = value.toJSON(key.toString());
    }

    // What happens next depends on the value's type.

    const partial = [];
    const gap = baseIndent + indent;

    switch (typeof value) {
      case "number":
        // We want to encode non finite numbers, not to JSON spec and the cause of
        // this implementation
        return String(value);

      // If the type is "object", we might be dealing with an object or an array or
      // null.

      case "object":
        // Due to a specification blunder in ECMAScript, typeof null is "object",
        // so watch out for that case.

        if (!value) {
          return "null";
        }

        // Make an array to hold the partial results of stringifying this object value.

        // Is the value an array?

        if (Array.isArray(value)) {
          // The value is an array. Stringify every element. Use null as a placeholder
          // for non-JSON values.

          const length = value.length;
          for (let i = 0; i < length; i += 1) {
            partial[i] =
              str(i, value as Record<number, unknown>, gap) || "null";
          }

          // Join all of the elements together, separated with commas, and wrap them in
          // brackets.

          const v =
            partial.length === 0
              ? "[]"
              : gap
              ? "[\n" +
                gap +
                partial.join(",\n" + gap) +
                "\n" +
                baseIndent +
                "]"
              : "[" + partial.join(",") + "]";
          return v;
        }

        // Iterate through all of the keys in the object.

        for (const k of Object.keys(value)) {
          const v = str(k, value as Record<string | number, unknown>, gap);
          if (v) {
            partial.push(JSON.stringify(k) + (gap ? ": " : ":") + v);
          }
        }

        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.
        {
          const v =
            partial.length === 0
              ? "{}"
              : gap
              ? "{\n" +
                gap +
                partial.join(",\n" + gap) +
                "\n" +
                baseIndent +
                "}"
              : "{" + partial.join(",") + "}";
          return v;
        }

      default:
        // Other things can be default
        return JSON.stringify(value);
    }
  }

  // Make a fake root object containing our value under the key of "".
  // Return the result of stringifying the value.

  return str("", { "": value }, "");
}
