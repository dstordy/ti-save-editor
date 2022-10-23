import { Box, chakra } from "@chakra-ui/react";
import { ReactNode } from "react";

export function DataList(props: { items: [ReactNode, ReactNode][] }) {
  return (
    <chakra.dd
      sx={{
        dt: {
          fontWeight: "semibold",
        },
      }}
    >
      {props.items.map((v, i) => (
        <Box
          key={i}
          display="flex"
          justifyContent="space-between"
          borderBottom={1}
        >
          <dt>{v[0]}</dt>
          <dd>{v[1]}</dd>
        </Box>
      ))}
    </chakra.dd>
  );
}
