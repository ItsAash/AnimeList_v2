import {
  Box,
  Button,
  DarkMode,
  HStack,
  Icon,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import LazyImageLoadNext from "../LazyImageLoadNext";
import { GoPlay } from "react-icons/go";
import { IoTime } from "react-icons/io5";
import calender from "../../utils/calender";
import { BsFillCalendarFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

interface SlideProps {
  anime: any;
  idx: number;
}

export const Slide: React.FC<SlideProps> = ({ anime, idx }) => {
  return (
    <Box w="100%" className="keen-slider__slide">
      <Box
        position="absolute"
        w="max-content"
        maxW="40%"
        zIndex="3000"
        p="2rem 1.5rem 0rem 1.5rem"
        bottom="1rem"
        transfrom="auto"
        minHeight="15rem"
        fontFamily="inter"
        color="white"
      >
        <Text color="accent.300" fontSize="xl" lineHeight="1.6rem">
          #{idx} Spotlight{" "}
        </Text>
        <Text noOfLines={2} fontSize="3xl" fontWeight="extrabold">
          {anime.title.userPreferred}
        </Text>
        <HStack pb="2" gridGap="2">
          <Box lineHeight="1.3rem">
            <Icon pos="relative" top="-2px" as={GoPlay} />{" "}
            {anime.format.replace("_", " ")}
          </Box>
          <Box>
            <Icon pos="relative" top="-2px" as={IoTime} />{" "}
            {anime.duration + "m"}
          </Box>
          <Box>
            <Icon pos="relative" top="-2px" as={BsFillCalendarFill} />{" "}
            {`${calender[anime.startDate.month - 1]} ${anime.startDate.day}, ${
              anime.startDate.year
            }`}
          </Box>
        </HStack>
        <DarkMode>
          <HStack pb="3">
            {anime.genres.map((genre: string, idx: number) => (
              <Box key={idx}>{idx <= 3 && <Tag size="sm">{genre}</Tag>}</Box>
            ))}
          </HStack>
        </DarkMode>
        <Text
          fontSize="xs"
          dangerouslySetInnerHTML={{ __html: anime.description }}
          w="90%"
          noOfLines={[3, 4, 5]}
        />
        <DarkMode>
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
        </DarkMode>
      </Box>
      <LazyImageLoadNext
        src={anime.bannerImage}
        objectFit="cover"
        width={1366}
        height={400}
        style={{
          filter: "brightness(70%)",
          _after: {
            content: "''",
            position: "absolute",
            background:
              // "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 86%)",
              "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.24413515406162467) 50%, rgba(30,37,46,1) 100%)",
            width: "100%",
            height: "100%",
          },
        }}
      />
    </Box>
  );
};
