import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Error from "next/error";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { MediaType, useMediaQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

interface AnimeProps {}

const Anime: NextPage<AnimeProps> = () => {
  const { query } = useRouter();
  const [{ data, error, fetching }] = useMediaQuery({
    variables: {
      id: parseInt(query.id as string),
      type: "ANIME" as MediaType,
    },
  });

  if (fetching) {
    return (
      <Box>
        <NavBar />
      </Box>
    );
  }

  if (error) {
    console.error(error);
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  return (
    <Box overflowX="hidden">
      <Head>
        <title>{data?.Media?.title?.userPreferred + ": AnimeList"}</title>
      </Head>
      <Box>
        <NavBar pos="fixed" zIndex="2000" />         
      </Box>
    </Box>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Anime);
