import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface NavElementProps {
  href: string;
  Icon?: IconType;
  children: any;
  hoverBackground: string;
  width?: string;
}
export const NavElement: React.FC<NavElementProps> = ({
  href,
  children,
  Icon,
  hoverBackground,
  width = "80%",
}) => {
  return (
    <Link href={href}>
      <Box
        w={width}
        m="0 auto"
        cursor="pointer"
        _hover={{
          backgroundColor: hoverBackground,
          borderRadius: "10px",
          textDecoration: "underline",
        }}
      >
        <Button w="100%" variant="drawerButtons" _focus={{}}>
          <HStack>
            {Icon && <Icon fontSize="1.5rem" />}
            <Text>{children}</Text>
          </HStack>
        </Button>
      </Box>
    </Link>
  );
};
