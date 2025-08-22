import BlueBlob from "@/components/icons/BlueBlob";
import GreenBlob from "@/components/icons/GreenBlob";
import LinkIcon from "@/components/icons/LinkIcon";
import OrangeBlob from "@/components/icons/OrangeBlob";
import PdfIcon from "@/components/icons/PdfIcon";
import RedBlob from "@/components/icons/RedBlob";
import VideoIcon from "@/components/icons/VideoIcon";
import YellowBlob from "@/components/icons/YellowBlob";
import { TResource } from "@/data";
import {
  Badge,
  Box,
  Flex,
  For,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const ResourceItem = ({ resource }: { resource: TResource }) => {
  const TypeIcon = () => {
    switch (resource.type) {
      case "link":
        return <LinkIcon />;
      case "video":
        return <VideoIcon />;
      case "pdf":
        return <PdfIcon />;
      default:
        return null;
    }
  };

  const Blob = () => {
    switch (resource.id) {
      case 1:
      case 3:
        return <RedBlob />;
      case 2:
        return <GreenBlob />;
      case 4:
        return <OrangeBlob />;
      case 5:
        return <YellowBlob />;
      case 6:
        return <BlueBlob />;
      default:
        return null;
    }
  };

  const rightPosition = {
    1: "0",
    2: "auto",
    3: "0",
    4: "0",
    5: "auto",
    6: "0",
  };

  const leftPosition = {
    1: "auto",
    2: "0",
    3: "auto",
    4: "0",
    5: "0",
    6: "auto",
  };

  return (
    <Flex
      position="relative"
      fontFamily="var(--font-inter)"
      direction="column"
      justifyContent="flex-end"
      borderRadius="10px"
      paddingX={6}
      borderWidth={1}
      gap={9}
      paddingTop={14}
      paddingBottom={6}
      borderColor="#F2F2F2"
      boxShadow="0px 4px 12px 1px #0000000D"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={0}
        left={leftPosition[resource.id as keyof typeof leftPosition]}
        right={rightPosition[resource.id as keyof typeof rightPosition]}
        zIndex={0}
      >
        <Blob />
      </Box>
      <Box position="relative" color="#000000" zIndex={1}>
        <TypeIcon />
      </Box>
      <VStack alignItems="flex-start" gap={4}>
        <Heading
          fontFamily="var(--font-poppins)"
          as="h2"
          fontSize={{ base: "22px", md: "18px" }}
          fontWeight={700}
        >
          {resource.title}
        </Heading>
        <Text color="#828282" fontSize={{ base: "19px", md: "14px" }}>
          {resource.description}
        </Text>
        <For each={resource.tags}>
          {(tag) => (
            <Badge
              key={tag}
              paddingX={3}
              paddingY="6px"
              borderRadius="100px"
              fontWeight={500}
              backgroundColor="#F2F2F2"
              color="#222222"
            >
              {tag}
            </Badge>
          )}
        </For>
      </VStack>
    </Flex>
  );
};

export default ResourceItem;
