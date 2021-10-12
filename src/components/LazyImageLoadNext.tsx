import { Box } from "@chakra-ui/react";
import { Skeleton, SkeletonProps } from "@chakra-ui/skeleton";
import Image, { ImageProps } from "next/image";
import React, { ReactElement, SyntheticEvent, useState } from "react";

interface ExtraProps {
  style?: SkeletonProps;
  reference?: React.MutableRefObject<any>;
  overlay?: string;
}

const LazyImageLoadNext: React.FC<ImageProps & ExtraProps> = ({
  onLoad,
  style,
  overlay,
  ...props
}): ReactElement => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = (e: SyntheticEvent<HTMLImageElement>) => {
    // setTimeout(() => setIsReady(true), 10000);
    setIsReady(true);
    typeof onLoad === "function" && onLoad(e);
  };

  return (
    <>
      {isReady && (
        <Box
          pos="absolute"
          top="0"
          left="0"
          h="100%"
          w="100%"
          transform="auto"
          zIndex="1"
          bg={overlay}
        ></Box>
      )}
      <Skeleton
        pos="relative"
        className="next_image_outer_div"
        variant="wave"
        isLoaded={isReady}
        {...style}
        display="flex"
      >
        <Image
          className="next_lazy_images"
          loading="lazy"
          onLoad={onLoadCallback}
          {...props}
        />
      </Skeleton>
    </>
  );
};

export default LazyImageLoadNext;
