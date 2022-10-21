import { Input, InputProps } from "@chakra-ui/react";
import { useState } from "react";

type InputValueType = string | readonly string[] | number | undefined;

interface FormattedInputProps<T extends InputValueType> extends InputProps {
  formatter: (value: T) => InputValueType;
  value: T;
}

export function FormattedInput<T extends InputValueType>(
  props: FormattedInputProps<T>
) {
  const [focused, setFocused] = useState(false);
  const { formatter, type, value, ...otherProps } = props;
  return (
    <Input
      type={focused ? type : "text"}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={focused ? value : formatter(value)}
      {...otherProps}
    />
  );
}
