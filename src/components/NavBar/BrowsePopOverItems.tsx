import {
  Flex,
  GridItem,
  Box,
  Grid,
  Button,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FaBookOpen, FaPlay } from "react-icons/fa";
import Link from "next/link";

export const BrowsePopOverItems = () => {
  const linkTitleColor = useColorModeValue("gray.700", "gray.200");
  const titleHover = useColorModeValue("gray.900", "gray.50");

  return (
    <Box pt={5} px={2}>
      <Grid
        templateColumns="40px auto"
        gridColumnGap={"10px"}
        alignItems="center"
        fontSize="1.1rem"
        fontWeight={700}
        height="100%"
        color={linkTitleColor}
      >
        <Link href="/anime">
          <IconButton
            variant="popup_NavLinkIcons"
            aria-label="Anime"
            icon={<FaPlay />}
            fontSize={23}
            mb={10}
          />
        </Link>
        <GridItem colStart={2} colEnd={3}>
          <Link href="/anime">
            <Box cursor="pointer" _hover={{ color: titleHover }}>
              Anime
            </Box>
          </Link>
          <Flex
            fontWeight={400}
            className="small__navs__anime"
            fontSize="sm"
            width="90%"
            justifyContent="space-between"
          >
            <Link href="/anime">
              <Button variant="popup_navElement">Top 100</Button>
            </Link>
            <Link href="/anime">
              <Button variant="popup_navElement">Trending</Button>
            </Link>
            <Link href="/anime">
              <Button variant="popup_navElement">Top Movies</Button>
            </Link>
          </Flex>
        </GridItem>
      </Grid>
      <Grid
        templateColumns="40px auto"
        gridColumnGap={"10px"}
        alignItems="center"
        fontSize="1.1rem"
        fontWeight={700}
        height="100%"
        mt={2}
        color={linkTitleColor}
      >
        <Link href="/manga">
          <IconButton
            aria-label="Anime"
            icon={<FaBookOpen />}
            variant="popup_NavLinkIcons"
            fontSize={23}
            mb={10}
          />
        </Link>
        <GridItem colStart={2} colEnd={3}>
          <Link href="/manga">
            <Box cursor="pointer" _hover={{ color: titleHover }}>
              Manga
            </Box>
          </Link>

          <Flex
            fontWeight={400}
            className="small__navs__anime"
            color="gray.400"
            fontSize="sm"
            width="90%"
            justifyContent="space-between"
          >
            <Link href="/anime">
              <Button variant="popup_navElement">Top 100</Button>
            </Link>
            <Link href="/anime">
              <Button variant="popup_navElement">Trending</Button>
            </Link>
            <Link href="/anime">
              <Button variant="popup_navElement">Top Manhwa</Button>
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};
