import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";

export const DarkModeSwitch = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Tooltip hasArrow label={isDark ? "Light Mode" : "Dark Mode"}>
        <IconButton
          border="none"
          color={isDark ? "white" : "gray.900"}
          aria-label={isDark ? "Light Mode" : "Dark Mode"}
          onClick={toggleColorMode}
          icon={isDark ? <FaSun /> : <BsMoon />}
          background="none"
          fontSize="20px"
          variant="solid"
          _focus={{}}
          {...props}
        />
      </Tooltip>
    </>
  );
};
