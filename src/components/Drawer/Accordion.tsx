import { Box, HStack } from "@chakra-ui/layout";
import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface DrawerAccordionItemProps {
  hoverBackground: string;
  header: string;
  Icon: IconType;
}

export const DrawerAccordionItem: React.FC<DrawerAccordionItemProps> = ({
  hoverBackground,
  header,
  Icon,
  children,
}) => {
  const dropnavBgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <AccordionItem border="none">
      <Box w="80%" m="0 auto" cursor="pointer">
        <AccordionButton
          _expanded={{ backgroundColor: "tomato", color: "white" }}
          m="0"
          fontWeight={800}
          height={10}
          width="100%"
          borderRadius="md"
          py={4}
          px={6}
          _hover={{
            backgroundColor: hoverBackground,
            textDecoration: "underline",
          }}
          _focus={{}}
        >
          <HStack>
            <Icon fontSize="1.5rem" />
            <Text fontFamily="poppins">{header}</Text>
            <AccordionIcon />
          </HStack>
        </AccordionButton>
      </Box>
      <AccordionPanel
        w="80%"
        margin="0 auto"
        borderRadius="md"
        background={dropnavBgColor}
        className="box_check"
        pb={4}
      >
        {children}
      </AccordionPanel>
    </AccordionItem>
  );
};
