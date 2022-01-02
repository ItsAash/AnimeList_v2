import { Box } from "@chakra-ui/layout";
import { Button, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import { withUrqlClient } from "next-urql";
import React from "react";
import { NavBar } from "../components/NavBar";

import { createUrqlClient } from "../utils/createUrqlClient";
import { SpotlightSwiper } from "../components/SpotlightSwiper";
import { MediaSort, MediaType, useMediaListQuery } from "../generated/graphql";

const Index = () => {
  const [res] = useMediaListQuery({
    variables: {
      page: 1,
      perPage: 5,
      type: "ANIME" as MediaType,
      sort: ["TRENDING_DESC", "POPULARITY_DESC"] as MediaSort[],
    },
  });

  return (
    <Box>
      <NavBar pos="fixed" zIndex="2000" />
      <Skeleton
        isLoaded={!res.fetching || typeof res.data !== undefined}
        variant="wave"
        h="100%"
        w="100vw"
        className="Placeholder Skeleton"
      />
      <SpotlightSwiper response={res} />
      <Link href="/anime/1">
        <Button variant="solid">CowboyBepop</Button>
      </Link>
      <Link href="/anime/97940">
        <Button variant="solid">BlackClover</Button>
      </Link>
    </Box>
  );
};

export default withUrqlClient(createUrqlClient)(Index);
