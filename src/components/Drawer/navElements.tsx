import { Button } from "@chakra-ui/button";
import { Link, Box, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { IconType } from "react-icons";

interface NavElementProps {
  href: string;
  Icon?: IconType;
  children: any;
}
export const NavElement: React.FC<NavElementProps> = ({
  href,
  children,
  Icon,
}) => {
  return (
    <Link href={href}>
      <Box
        w="80%"
        m="0 auto"
        cursor="pointer"
        _hover={{
          backgroundColor: "gray.800",
          borderRadius: "10px",
          textDecoration: "underline",
        }}
      >
        <Button variant="drawerButtons" _focus={{}}>
          <HStack>
            {Icon && <Icon fontSize="1.5rem" />}
            <Text>{children}</Text>
          </HStack>
        </Button>
      </Box>
    </Link>
  );
};
