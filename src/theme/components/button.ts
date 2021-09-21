const Button = {
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      fontWeight: "200",
      fontFamily: "poppins",
      borderRadius: "none",
      alignItems: "center",
      letterSpacing: "0.4px",
    },
    drawerButtons: {
      margin: "0 auto",
      fontFamily: "poppins",
    },
    normal: {
      _hover: {
        backgroundColor: "none",
      },
      _focus: {
        border: "none",
      },
    },
    accent: {
      backgroundColor: "accent.300",
      color: "white",
      _hover: {
        backgroundColor: "accent.200",
      },
    },
    navElement: (props: any) => ({
      backgroundColor: "none",
      fontWeight: "800",
      ":focus": {
        boxShadow: "none",
      },
      "::after": {
        background: props.colorMode === "dark" ? "#fff" : "black",
        bottom: "0",
        content: '""',
        display: "block",
        height: "2px",
        left: "50%",
        position: "absolute",
        transition: "width 0.3s ease 0s, left 0.3s ease 0s",
        width: "0",
      },
      ":hover::after": {
        left: "17%",
        width: "70%",
      },
    }),
    popup_navElement: (props: any) => ({
      fontSize: "0.8rem",
      color: props.colorMode === "dark" ? "gray.400" : "gray.600",
      fontWeight: 400,
      p: 0,
      _hover: {
        color: props.colorMode === "dark" ? "gray.100" : "gray.800",
      },
      _focus: { boxShadow: "none" },
    }),
    popup_NavLinkIcons: (props: any) => ({
      p: 0,
      color: props.colorMode === "dark" ? "gray.200" : "gray.700",
      _hover: {
        color: props.colorMode === "dark" ? "gray.50" : "gray.900",
      },
      _focus: { boxShadow: "none" },
    }),
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "accent",
  },
};

export default Button;
