import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { withUrqlClient } from "next-urql";
import React from "react";
import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => (
  <Box>
    <NavBar />
    <Link href="/anime/1">
      <Button variant="solid">CowboyBepop</Button>
    </Link>
    <Link href="/anime/97940">
      <Button variant="solid">BlackClover</Button>
    </Link>
  </Box>
);

export default withUrqlClient(createUrqlClient)(Index);
