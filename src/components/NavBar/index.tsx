import {
  Box,
  BoxProps,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Popover,
  PopoverTrigger,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import React from "react";
import Hero from "../Hero";
import { DarkModeSwitch } from "../DarkModeSwitch";
import { BrowsePopOver } from "./BrowsePopOver";

export const NavBar: React.FC<BoxProps> = (props) => {
  const heroWidth = useBreakpointValue({ base: 40, md: 168 });
  return (
    <Box w="100vw" p={5} {...props}>
      <Grid
        templateColumns={[
          "auto 1fr 1fr",
          "auto 1fr 1fr",
          "repeat(3, 1fr)",
          null,
        ]}
      >
        <GridItem>
          <Hero w={heroWidth} h={40} />
        </GridItem>
        <Flex
          className="nav__bar"
          alignItems="center"
          justifyContent="space-evenly"
          fontFamily="poppins"
        >
          <Popover closeOnEsc isLazy placement="bottom">
            <PopoverTrigger>
              <Button variant="navElement">Browse</Button>
            </PopoverTrigger>
            <BrowsePopOver />
          </Popover>
          <Button variant="navElement" href="/forums">
            Forums
          </Button>
          <Button variant="navElement" href="/about">
            About
          </Button>
        </Flex>
        <Flex justifyContent="flex-end">
          <Tooltip label="Search" hasArrow>
            <IconButton
              aria-label="Search"
              size="md"
              variant="solid"
              background="none"
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
