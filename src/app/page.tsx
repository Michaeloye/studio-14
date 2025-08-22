"use client"

import Resources from "@/features/resources";
import { ResourcesProvider } from "@/context/ResourcesContext";
import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import SearchInput from "@/components/inputs/SearchInput";

export default function Home() {
  return (
    <ResourcesProvider>
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
          >
            Resources
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "16px" }}
            color="#2C3237"
            lineHeight={{ base: "147%", lg: "163%" }}
            textAlign="center"
            width={{ base: "87%", md: "80%", lg: "50%" }}
          >
            Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
            commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
            congue
          </Text>

          <SearchInput />
        </VStack>
      </Box>

      <Resources />
    </ResourcesProvider>
  );
}
