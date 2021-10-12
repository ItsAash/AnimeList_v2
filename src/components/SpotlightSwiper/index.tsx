import * as React from "react";
import KeenSlider, { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { data } from "./data";
import { Slide } from "./Slide";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { IconType } from "react-icons";

export default function SpotlightSwiper() {
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
        {data.Page.media.map((anime, idx) => (
          <Slide idx={idx + 1} key={idx} anime={anime}></Slide>
        ))}
      </Box>
      <Flex
        position="absolute"
        h="auto"
        bottom={3}
        right="0"
        flexDirection="column-reverse"
        p="1rem"
      >
        <Arrow
          aria-label="Previous  "
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
}

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
