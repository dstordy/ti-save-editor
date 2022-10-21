import { Box, Button, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  label: string;
  to: string;
  end?: boolean;
}

function MenuItem(props: MenuItemProps) {
  return (
    <li>
      <Button
        as={NavLink}
        to={props.to}
        _activeLink={{
          fontWeight: "bold",
          backgroundColor: "white",
          shadow: "sm",
          _dark: {
            backgroundColor: "gray.900",
          },
        }}
        end={props.end}
        display="flex"
        alignContent="start"
        variant="ghost"
        justifyContent="start"
      >
        {props.label}
      </Button>
    </li>
  );
}

export function Sidebar() {
  return (
    <Box
      as="nav"
      width={64}
      position="fixed"
      top={14}
      bottom={0}
      overflowY="auto"
    >
      <VStack
        alignItems="stretch"
        m={2}
        spacing={2}
        as="ul"
        listStyleType="none"
      >
        <MenuItem label="Start" to="/" end />
        <MenuItem label="Factions" to="/factions" />
      </VStack>
    </Box>
  );
}
