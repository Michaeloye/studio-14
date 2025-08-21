import { HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";

const BrandLogo = ({ withText = false }: { withText?: boolean }) => {
  return (
    <HStack gap={2}>
      <Image src={Logo} alt="Brand Logo" width={36} height={36} />
      {withText && (
        <Text color="#404040" fontSize={23} fontWeight="extrabold" fontFamily="var(--font-inter)">
          LOGO
        </Text>
      )}
    </HStack>
  );
};

export default BrandLogo;
