import { Skeleton, SkeletonProps } from "@chakra-ui/skeleton";
import Image, { ImageProps } from "next/image";
import React, { ReactElement, SyntheticEvent, useState } from "react";

interface ExtraProps {
  style?: SkeletonProps;
  reference?: React.MutableRefObject<any>;
}

const LazyImageLoadNext: React.FC<ImageProps & ExtraProps> = ({
  onLoad,
  style,
  ...props
}): ReactElement => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = (e: SyntheticEvent<HTMLImageElement>) => {
    setIsReady(true);
    typeof onLoad === "function" && onLoad(e);
  };

  return (
    <>
      <Skeleton
        className="next_image_outer_div"
        variant="wave"
        {...style}
        isLoaded={isReady}
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
