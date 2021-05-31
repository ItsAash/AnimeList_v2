import { keyframes } from "@chakra-ui/system";

const Skeleton = {
  variants: {
    wave: (props: any) => ({
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
    }),
    waveNextImage: (props: any) => ({
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
    }),
  },
};

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export default Skeleton;
