import { keyframes } from "@chakra-ui/system";

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const Skeleton = {
  variants: {
    wave: {
      position: "relative",
      overflow: "hidden",
      animation: "none",
      "::after": {
        visibility: "visible !important",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        transform: "translateX(-100%)",
        bg: "linear-gradient(90deg, rgba(255,255,255,0) 0, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0))",
        animation: `${shimmer} 2s infinite`,
        content: "''",
      },
    },
    waveNextImage: {
      position: "relative",
      overflow: "hidden",
      animation: "none",
      "::after": {
        visibility: "visible !important",
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        transform: "translateX(-100%)",
        bg: "linear-gradient(90deg, rgba(255,255,255,0) 0, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0))",
        animation: `${shimmer} 2s infinite`,
        content: "''",
      },
    },
  },
};

export default Skeleton;
