import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { data } from "./data";
import { Slide } from "./Slide";
import LazyImageLoadNext from "../LazyImageLoadNext";
export default function App() {
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef<any>();
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 1,
    duration: 1000,
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
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <>
      <div ref={ref} className="keen-slider">
        {data.Page.media.map((anime) => (
          <Slide key={anime.id}>
            <LazyImageLoadNext
              src={anime.bannerImage}
              objectFit="cover"
              width={1920}
              height={500}
              style={{
                filter: "brightness(70%)",
                _after: {
                  content: "''",
                  position: "absolute",
                  background:
                    "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 86%)",
                  width: "100%",
                  height: "100%",
                },
              }}
            />
          </Slide>
        ))}
      </div>
    </>
  );
}
