import {
  Box,
  Heading,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

const SomeText = () => {
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Halo !
      </Heading>

      <Box
        backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize={textSize}>
          Website ini akan membuatkan sapaan kepada waifu kamu yang tercinta ❤
        </Box>
      </Box>
    </>
  );
};

export default SomeText;
