import Image from "next/image";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack>
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1>Hello World</h1>
    </VStack>
  );
}
