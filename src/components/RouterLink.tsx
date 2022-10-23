import { Button, ButtonProps, Link, LinkProps } from "@chakra-ui/react";
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";

export function RouterLink(props: LinkProps & RRLinkProps) {
  const { children, ...otherProps } = props;
  return (
    <Link as={RRLink} {...otherProps}>
      {children}
    </Link>
  );
}

export function RouterButton(props: ButtonProps & RRLinkProps) {
  const { children, ...otherProps } = props;
  return (
    <Button as={RRLink} {...otherProps}>
      {children}
    </Button>
  );
}
