import { Skeleton } from "@chakra-ui/skeleton";
import { Image, ImageProps } from "@chakra-ui/react";
import React, { ReactElement, SyntheticEvent, useState } from "react";

const ChakraSkeletonImage: React.FC<ImageProps> = ({
  onLoad,
  ...props
}): ReactElement => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = (e: SyntheticEvent<HTMLImageElement>) => {
    setIsReady(true);
    typeof onLoad === "function" && onLoad(e);
  };

  return (
    <>
      <Skeleton isLoaded={isReady} w={props.w} h={props.h}>
        <Image onLoad={onLoadCallback} {...props} />
      </Skeleton>
    </>
  );
};

export default ChakraSkeletonImage;
