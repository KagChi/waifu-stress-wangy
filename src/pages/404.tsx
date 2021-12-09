import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

import MotionBox from "components/motion/Box";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={200}
        marginX="auto"
      >
        <Image
          width={200}
          height={200}
          src={`/${colorMode}_keqing_loss.svg`}
          alt="Keqing LOSS"
        />
      </MotionBox>

      <Box marginY={4}>
        <Heading textAlign="center">404 | Kamu tersesat.</Heading>

        <Box textAlign="center" marginTop={4}>
          <Text>Tidak Apa apa !</Text>
          <Link href="/" passHref>
            <Button
              backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            >
              Ayo kembali
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Page404;
