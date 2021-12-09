import Image from "next/image";

import MotionBox from "./motion/Box";

const SomeImage = () => {
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
          src={`/${colorMode}_keqing.svg`}
          width={400}
          height={400}
          alt="Keqing YES"
        />
      </MotionBox>
    </>
  );
};

export default SomeImage;
