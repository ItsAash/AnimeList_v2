import { Box } from "@chakra-ui/react";
import React from "react";

export const Slide = (props: any) => {
  return (
    <Box w="100%" className="keen-slider__slide">
      {props.children}
    </Box>
  );
};
