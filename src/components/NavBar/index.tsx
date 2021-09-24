import {
  Box,
  BoxProps,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Tooltip,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { BiMenuAltLeft, BiSearchAlt } from "react-icons/bi";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { MenuDrawer } from "../Drawer/Drawer";
import Hero from "../Hero";

export const NavBar: React.FC<BoxProps> = (props) => {
  const heroWidth = useBreakpointValue({ base: 40, md: 168 });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuBtnRef = useRef();
  return (
    <Box w="100vw" p={5} {...props}>
      <Grid
        templateColumns={[
          "auto 1fr 1fr",
          "auto 1fr 1fr",
          "repeat(2, 1fr)",
          null,
        ]}
      >
        <GridItem>
          <Stack direction="row">
            <IconButton
              aria-label="menu"
              border="none"
              _focus={{}}
              ref={menuBtnRef.current}
              icon={<BiMenuAltLeft />}
              variant="solid"
              fontSize="35px"
              background="none"
              isRound
              onClick={onOpen}
            />
            <MenuDrawer
              isOpen={isOpen}
              onClose={onClose}
              btnRef={menuBtnRef}
              heroWidth={heroWidth}
            />
            <Hero w={heroWidth} h={40} />
          </Stack>
        </GridItem>
        <Flex justifyContent="flex-end">
          <Tooltip label="Search" hasArrow>
            <IconButton
              aria-label="Search"
              size="md"
              variant="solid"
              background="none"
              _focus={{}}
              mr={2}
              icon={<BiSearchAlt />}
              fontSize="20px"
            />
          </Tooltip>
          <DarkModeSwitch mr={2} />
          <Button variant="solid" mr={2}>
            Login
          </Button>
          <Button variant="accent">Signup</Button>
        </Flex>
      </Grid>
    </Box>
  );
};
