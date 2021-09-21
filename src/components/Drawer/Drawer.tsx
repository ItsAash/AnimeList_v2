import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/modal";
import Hero from "../Hero";
import { NavElement } from "./navElements";
import { AiFillHome } from "react-icons/ai";
import { CgBrowse } from "react-icons/cg";

import {
  Box,
  Button,
  HStack,
  Popover,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BrowsePopOver } from "../NavBar/BrowsePopOver";

interface MenuDrawerProps {
  isOpen: boolean;
  btnRef: React.MutableRefObject<undefined>;
  onClose: () => void;
  heroWidth?: number;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  btnRef,
  heroWidth,
}) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef.current}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Hero w={heroWidth} h={40} />
          </DrawerHeader>
          <DrawerCloseButton border="none" _focus={{}} mt="12px" />

          <DrawerBody padding="0" margin="0">
            <NavElement href="/" Icon={AiFillHome}>
              Home
            </NavElement>
            {/* PopOver Element */}
            <Popover closeOnEsc isLazy placement="bottom">
              <PopoverTrigger>
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
                      <CgBrowse fontSize="1.5rem" />
                      <Text>Browse</Text>
                    </HStack>
                  </Button>
                </Box>
              </PopoverTrigger>
              <BrowsePopOver />
            </Popover>
            {/*  */}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
