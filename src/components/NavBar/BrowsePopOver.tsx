import {
  Button,
  Grid,
  GridItem,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { IoMdPerson } from "react-icons/io";
import { GiSpaceSuit } from "react-icons/gi";
import { BrowsePopOverItems } from "./BrowsePopOverItems";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

interface Props {}

export const BrowsePopOver: React.FC<Props> = ({}) => {
  const popOverContentBg = useColorModeValue("gray.200", "gray.700");
  const popOverFooterBg = useColorModeValue("gray.100", "gray.800");
  return (
    <PopoverContent
      bg={popOverContentBg}
      borderColor="blue.800"
      border="none"
      boxShadow="xs"
      _focus={{
        outline: "none",
      }}
    >
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <BrowsePopOverItems />
      </PopoverBody>
      <PopoverFooter
        border="0"
        borderBottomRadius={5}
        pb={4}
        bg={popOverFooterBg}
      >
        <Grid
          w="90%"
          m="0 auto"
          templateColumns="repeat(2, 1fr)"
          templateRows="repeat(2, 1fr)"
          fontSize="0.8rem"
          color="gray.400"
        >
          <GridItem>
            <Button variant="popup_navElement">
              <IoMdPerson
                style={{ display: "inline-block", marginRight: "0.3rem" }}
              />
              Staff
            </Button>
          </GridItem>
          <GridItem>
            <Button variant="popup_navElement">
              <GiSpaceSuit
                style={{ display: "inline-block", marginRight: "0.3rem" }}
              />
              Characters
            </Button>
          </GridItem>
          <GridItem>
            <Button variant="popup_navElement">
              <FaStar
                style={{ display: "inline-block", marginRight: "0.3rem" }}
              />
              Review
            </Button>
          </GridItem>
          <GridItem>
            <Button variant="popup_navElement">
              <AiFillLike
                style={{ display: "inline-block", marginRight: "0.3rem" }}
              />
              Recommendation
            </Button>
          </GridItem>
        </Grid>
      </PopoverFooter>
    </PopoverContent>
  );
};
