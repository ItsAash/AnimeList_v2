import {
  Box,
  BoxProps,
  Button,
  DarkMode,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Tooltip,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { BiMenuAltLeft, BiSearchAlt } from "react-icons/bi";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { MenuDrawer } from "../Drawer/Drawer";
import Hero from "../Hero";

export const NavBar: React.FC<BoxProps> = (props) => {
  const heroWidth = useBreakpointValue({ base: 40, md: 168 });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuBtnRef = useRef();

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Box
      w="100vw"
      p={5}
      transition="background 0.3s ease-in"
      background={"rgba(0,0,0," + (colorChange ? "0.75" : "0") + ")"}
      {...props}
    >
      <Grid templateColumns={["repeat(2, 1fr)", null]}>
        <GridItem>
          <Stack direction="row">
            <IconButton
              aria-label="menu"
              border="none"
              _focus={{}}
              ref={menuBtnRef.current}
              icon={<BiMenuAltLeft />}
              variant="solid"
              color="white"
              fontSize="35px"
              background="none"
              isRound
              onClick={onOpen}
              _hover={{
                background: "whiteAlpha.300",
              }}
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
              color="white"
              icon={<BiSearchAlt />}
              fontSize="20px"
              _hover={{
                background: "whiteAlpha.300",
              }}
            />
          </Tooltip>
          <DarkModeSwitch
            _hover={{
              background: "whiteAlpha.300",
            }}
            mr={2}
            color="white"
          />
          <DarkMode>
            <Button variant="solid" mr={2} color="white">
              Login
            </Button>
          </DarkMode>
          <Button variant="accent">Signup</Button>
        </Flex>
      </Grid>
    </Box>
  );
};
