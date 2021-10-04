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
  Divider,
  Heading,
  HStack,
  IconButton,
  ListItem,
  Popover,
  PopoverTrigger,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiGroup, BiHome } from "react-icons/bi";
import { BsPinAngle } from "react-icons/bs";
import { CgBrowse } from "react-icons/cg";
import { FaDiscord, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { IoDiceOutline } from "react-icons/io5";
import { SiGithubsponsors } from "react-icons/si";
import Hero from "../Hero";
import { BrowsePopOver } from "../NavBar/BrowsePopOver";
import { DrawerAccordionItem } from "./Accordion";
import { NavElement } from "./NavElements";

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

          <DrawerBody
            padding="0"
            margin="0"
            overflow="-moz-hidden-unscrollable"
          >
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
                      width="90%"
                    >
                      Anime
                    </NavElement>
                  </ListItem>
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      href="/manga/random"
                      width="90%"
                    >
                      Manga
                    </NavElement>
                  </ListItem>
                </UnorderedList>
              </DrawerAccordionItem>
              <DrawerAccordionItem
                header="Community"
                hoverBackground={hoverBackground}
                Icon={BiGroup}
              >
                <UnorderedList m={0} listStyleType="none" textDecoration="none">
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      href="/anime/random"
                      width="90%"
                    >
                      Groups
                    </NavElement>
                  </ListItem>
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      width="90%"
                      href="/manga/random"
                    >
                      Forums
                    </NavElement>
                  </ListItem>
                </UnorderedList>
              </DrawerAccordionItem>
              <DrawerAccordionItem
                header="AnimeList"
                hoverBackground={hoverBackground}
                Icon={BsPinAngle}
              >
                <UnorderedList m={0} listStyleType="none" textDecoration="none">
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      href="/rules"
                      width="90%"
                    >
                      Site Rules
                    </NavElement>
                  </ListItem>
                  <ListItem>
                    <NavElement
                      hoverBackground={hoverBackground}
                      href="/announcements"
                      width="90%"
                    >
                      Annoucements
                    </NavElement>
                  </ListItem>
                </UnorderedList>
              </DrawerAccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter display="block">
            <Divider orientation="horizontal" />
            <Divider orientation="horizontal" />
            <Box mt={3}>
              <Heading as="h5" size="sm">
                Powered By
              </Heading>
              <Box className="sponsors" mt="3">
                <Link href="/sponsors">
                  <Button
                    variant="normal"
                    _focus={{}}
                    leftIcon={<SiGithubsponsors />}
                  >
                    Sponsor #1
                  </Button>
                </Link>
                <Link href="/sponsors">
                  <Button
                    variant="normal"
                    _focus={{}}
                    leftIcon={<SiGithubsponsors />}
                  >
                    Sponsor #2
                  </Button>
                </Link>
                <Link href="/sponsors">
                  <Button
                    variant="normal"
                    _focus={{}}
                    leftIcon={<SiGithubsponsors />}
                  >
                    Sponsor #3
                  </Button>
                </Link>
              </Box>
              <Box className="social_media" mt={5}>
                <Divider orientation="horizontal" />
                <Divider orientation="horizontal" />
                <HStack justifyContent="center" mt={3}>
                  <IconButton
                    aria-label="discord"
                    icon={<FaDiscord />}
                    variant="ouline"
                    fontSize="2xl"
                  ></IconButton>
                  <IconButton
                    aria-label="twitter"
                    icon={<FaTwitter />}
                    variant="ouline"
                    fontSize="2xl"
                  ></IconButton>
                  <IconButton
                    aria-label="github"
                    icon={<FaGithub />}
                    variant="ouline"
                    fontSize="2xl"
                  ></IconButton>
                  <IconButton
                    aria-label="facebook"
                    icon={<FaFacebook />}
                    variant="ouline"
                    fontSize="2xl"
                  ></IconButton>
                </HStack>
              </Box>
              <Text w="100%" textAlign="center">
                Made by aash {"<3"}
              </Text>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
