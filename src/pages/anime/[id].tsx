import { Box, Flex, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Error from "next/error";
import React from "react";
import LazyImageLoadNext from "../../components/LazyImageLoadNext";
import { NavBar } from "../../components/NavBar";
import { MediaType, useMediaQuery } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

interface AnimeProps {
  id?: number;
}

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
        <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
          <Spinner />
        </Flex>
      </Box>
    );
  }

  if (error) {
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
        <NavBar />
        <Box>
          <LazyImageLoadNext
            src={data?.Media?.bannerImage as string}
            width={1920}
            height={500}
            objectFit="cover"
            objectPosition="top"
            style={{
              bg: "gray.400",
            }}
          />
          <Box>
            <Grid
              templateColumns="auto 2fr"
              w={["95%", "90%", "85%", "80%"]}
              m="0 auto"
              gap={9}
            >
              <GridItem>
                <LazyImageLoadNext
                  src={
                    (data?.Media?.coverImage?.extraLarge ||
                      data?.Media?.coverImage?.large ||
                      data?.Media?.coverImage?.medium) as string
                  }
                  width={200}
                  height={278.125}
                  className="coverImage"
                  style={{
                    mt: -57,
                    bg: "gray.300",
                    opacity: 1,
                    _after: {
                      animationDelay: ".2s",
                    },
                  }}
                />
                <style jsx global>
                  {`
                    .coverImage {
                      border-radius: 5px !important;
                    }
                  `}
                </style>
              </GridItem>
              <GridItem fontFamily="inter" mt={4}>
                <Text fontWeight={700} fontSize="5xl" color="gray.400">
                  {data?.Media?.title?.userPreferred}
                </Text>
                {/* <Text
                  dangerouslySetInnerHTML={{
                    __html: data?.Media?.description as string,
                  }}
                  fontSize="sm"
                  color="gray.500"
                ></Text> */}
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Anime);
