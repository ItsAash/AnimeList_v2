import {
  Box,
  Button,
  HStack,
  Icon,
  Skeleton,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { GoPlay } from "react-icons/go";
import { IoTime } from "react-icons/io5";
import calender from "../../utils/calender";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";
import LazyNextImage from "../LazyNextImage";
interface SlideProps {
  anime: any;
  idx: number;
  isFetching: boolean;
}

export const Slide: React.FC<SlideProps> = ({ anime, idx, isFetching }) => {
  const overlayGradient = useColorModeValue(
    "radial-gradient(circle at right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 76%, rgba(255,255,255,0.8) 100%)",
    "radial-gradient(circle at right, rgba(0,0,0,0) 0%, rgba(6,12,20,0.8) 76%, rgba(6,12,20,0.9) 100%)"
  );

  return (
    <Box
      minW="100%"
      minH="100%"
      w="100%"
      h="450px"
      className="keen-slider__slide"
    >
      <Box
        position="absolute"
        w="max-content"
        maxW="40%"
        zIndex="20"
        p="2rem 1.5rem 0rem 1.5rem"
        bottom="1rem"
        transfrom="auto"
        minHeight="15rem"
        fontFamily="inter"
      >
        <Skeleton variant="wave" isLoaded={!isFetching}>
          <Text color="accent.300" fontSize="xl" lineHeight="1.6rem">
            #{idx} Spotlight
          </Text>
        </Skeleton>
        <Skeleton variant="wave" isLoaded={!isFetching} mt={isFetching ? 2 : 0}>
          <Text noOfLines={2} fontSize="3xl" fontWeight="extrabold">
            {anime.title.userPreferred}
          </Text>
        </Skeleton>
        <Skeleton variant="wave" isLoaded={!isFetching} mt={isFetching ? 2 : 0}>
          <HStack pb="2" gridGap="2">
            <Box lineHeight="1.3rem">
              <Icon pos="relative" top="-2px" as={GoPlay} />{" "}
              {anime.format.replace("_", " ")}
            </Box>
            <Box>
              <Icon pos="relative" top="-2px" as={IoTime} />{" "}
              {(anime.duration || "? ") + "m"}
            </Box>
            <Box>
              <Icon pos="relative" top="-2px" as={BsFillCalendarFill} />{" "}
              {`${calender[anime.startDate.month - 1]} ${
                anime.startDate.day
              }, ${anime.startDate.year}`}
            </Box>
          </HStack>
        </Skeleton>
        <HStack pb="3" mt={isFetching ? 2 : 0}>
          {anime.genres.map((genre: string, idx: number) => (
            <Skeleton key={idx} variant="wave" isLoaded={!isFetching}>
              <Box>{idx <= 3 && <Tag size="sm">{genre}</Tag>}</Box>
            </Skeleton>
          ))}
        </HStack>
        <Skeleton variant="wave" isLoaded={!isFetching} mt={isFetching ? 2 : 0}>
          <Text
            fontSize="xs"
            dangerouslySetInnerHTML={{ __html: anime.description }}
            w="90%"
            noOfLines={[3, 4, 5]}
          />
        </Skeleton>
        <Skeleton variant="wave" isLoaded={!isFetching} mt={isFetching ? 2 : 0}>
          <Link href={`/anime/${anime.id}`}>
            <Button
              mt="2"
              color="auto"
              variant="solid"
              leftIcon={<AiOutlineInfoCircle />}
            >
              More Info
            </Button>
          </Link>
        </Skeleton>
      </Box>
      {isFetching ? (
        <>
          <Box
            pos="absolute"
            top="0"
            left="0"
            h="100%"
            w="100%"
            transform="auto"
            zIndex="1"
            bg={overlayGradient}
          ></Box>
          <Skeleton variant={"wave"} w={1366} h={450} isLoaded={!isFetching} />
        </>
      ) : (
        <LazyNextImage
          src={anime.bannerImage}
          width={1366}
          height={450}
          overlay={overlayGradient}
          objectFit="cover"
        />
      )}
    </Box>
  );
};
