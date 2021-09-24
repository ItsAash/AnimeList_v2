import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import {
  Accordion,
  Box,
  Button,
  HStack,
  ListItem,
  Popover,
  PopoverTrigger,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiHome } from "react-icons/bi";
import { CgBrowse } from "react-icons/cg";
import { IoDiceOutline } from "react-icons/io5";
import Hero from "../Hero";
import { BrowsePopOver } from "../NavBar/BrowsePopOver";
import { NavElement } from "./NavElements";
import { DrawerAccordionItem } from "./Accordion";
import { BsPlay } from "react-icons/bs";
import { IoMdBook } from "react-icons/io";

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
  const hoverBackground = useColorModeValue("gray.200", "whiteAlpha.300");

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
            <Accordion allowToggle>
              <NavElement
                hoverBackground={hoverBackground}
                href="/"
                Icon={BiHome}
              >
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
                      backgroundColor: hoverBackground,
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
              <DrawerAccordionItem
                header="Random"
                hoverBackground={hoverBackground}
                Icon={IoDiceOutline}
              >
                <UnorderedList m={0} listStyleType="none" textDecoration="none">
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      href="/anime/random"
                      Icon={BsPlay}
                    >
                      Anime
                    </NavElement>
                  </ListItem>
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      href="/manga/random"
                      Icon={IoMdBook}
                    >
                      Manga
                    </NavElement>
                  </ListItem>
                </UnorderedList>
              </DrawerAccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
