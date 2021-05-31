import { Skeleton } from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import {
  LazyLoadImage as LazyImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";

const LazyImageLoad: React.FC<LazyLoadImageProps> = ({
  ...props
}): ReactElement => {
  const [isReady, setIsReady] = useState(false);
  return (
    <>
      <Skeleton
        isLoaded={isReady}
        style={props.style}
        width={props.width}
        height={props.height}
      >
        <LazyImage {...props} afterLoad={() => setIsReady(true)} />
      </Skeleton>
    </>
  );
};

export default LazyImageLoad;
