const Drawer = {
  variants: {
    block: (props: any) => ({
      dialog: {
        background: props.colorMode === "dark" ? "gray.900" : "white",
        zIndex: "2000",
        borderLeft: "solid 2px",
        borderColor: "accent.300",
      },
      dialogContainer: {
        zIndex: "2000",
      },
    }),
  },

  defaultProps: {
    variant: "block",
  },
};

export default Drawer;
