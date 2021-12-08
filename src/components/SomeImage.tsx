import { Flex, Link, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

import HelperImage from "./HelperImage";
import MotionBox from "./motion/Box";

const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <MotionBox
        animate={{ y: 20, scale: 0.97 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[240, 320]}
        marginX="auto"
      >
        <Image
          src="https://cdn.discordapp.com/attachments/785715969317142540/918151750396043285/VEUehO01.svg"
          width={400}
          height={400}
          alt="Keqing YES"
        />
      </MotionBox>
      
    </>
  );
};

export default SomeImage;
