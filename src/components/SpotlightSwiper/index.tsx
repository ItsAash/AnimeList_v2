import * as React from "react";
import KeenSlider, { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { Slide } from "./Slide";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { UseQueryState } from "urql";
import { MediaListQuery } from "../../generated/graphql";
import { AnimeData } from "../../utils/dummyAnimeData";

interface SpotlightSwiperProps {
  response: UseQueryState<MediaListQuery, object>;
}

export const SpotlightSwiper: React.FC<SpotlightSwiperProps> = ({
  response: { data, fetching },
}) => {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef<ReturnType<typeof setInterval>>();
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    duration: 500,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  React.useEffect(() => {
    ref.current!.addEventListener("mouseover", () => {
      setPause(true);
    });
    ref.current!.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [ref]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 4000);
    return () => {
      clearInterval(timer.current as ReturnType<typeof setInterval>);
    };
  }, [pause, slider]);

  return (
    <Box position="relative">
      <Box ref={ref} className="keen-slider">
        <>
          {fetching ? (
            <>
              <Slide key={0} isFetching={true} idx={1} anime={AnimeData} />
            </>
          ) : (
            <>
              {data?.Page?.media?.map((anime, idx) => (
                <Slide
                  key={idx}
                  isFetching={fetching}
                  idx={idx + 1}
                  anime={anime}
                ></Slide>
              ))}
            </>
          )}
        </>
      </Box>
      <Flex
        position="absolute"
        h="auto"
        bottom={3}
        right="0"
        flexDirection="column-reverse"
        p="1rem"
        zIndex="10"
      >
        <Arrow
          aria-label="Previous"
          slider={slider}
          Icon={MdOutlineNavigateBefore}
          timer={timer}
        />
        <Arrow
          aria-label="Next"
          slider={slider}
          Icon={MdOutlineNavigateNext}
          timer={timer}
        />
      </Flex>
    </Box>
  );
};

interface ArrowProps {
  "aria-label": string;
  Icon: IconType;
  slider: KeenSlider;
  timer: React.MutableRefObject<NodeJS.Timeout | undefined>;
}

const Arrow: React.FC<ArrowProps> = ({
  "aria-label": ariaLabel,
  Icon,
  slider,
  timer,
}) => (
  <IconButton
    size="sm"
    fontSize="3xl"
    aria-label={ariaLabel}
    lineHeight="20px"
    margin="3px 0"
    icon={<Icon />}
    _focus={{}}
    onClick={() => {
      clearInterval(timer.current as ReturnType<typeof setInterval>);
      if (ariaLabel === "Next") {
        slider.next();
      } else {
        slider.prev();
      }
    }}
  />
);
