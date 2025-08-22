"use client"

import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <>
    <Box
      backgroundColor="#FAFAFA"
      paddingY={{ base: 16, md: 20 }}
      paddingX={{ base: 4, md: 8 }}
      fontFamily="var(--font-inter)"
    >
      <VStack gap={{ base: 8, lg: 10 }}>
        <Heading
          as="h1"
          fontWeight={700}
          fontSize={{ base: "40px", lg: "52px" }}
          textAlign="center"
          lineHeight={{ base: "147%", lg: "163%" }}
        >
          Hi👋, Welcome to the Dashboard
        </Heading>
        <Text
          fontSize={{ base: "18px", md: "16px" }}
          color="#2C3237"
          textAlign="center"
          width={{ base: "87%", md: "80%", lg: "50%" }}
        >
          (Coming soon)
        </Text>

      </VStack>
    </Box>
    </>
  );
}
