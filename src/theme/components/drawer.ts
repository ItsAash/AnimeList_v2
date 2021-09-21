const Drawer = {
  variants: {
    block: {
      dialog: {
        background: "gray.900",
        zIndex: "2000",
      },
      dialogContainer: {
        zIndex: "2000",
      },
    },
  },

  defaultProps: {
    variant: "block",
  },
};

export default Drawer;
