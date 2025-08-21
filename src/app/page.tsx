import Image from "next/image";
import {
  Box,
  Heading,
  Icon,
  Input,
  InputGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export default function Home() {
  return (
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

        <InputGroup
          width={{ base: "87%", lg: "67%" }}
          startElement={
            <Icon paddingLeft={{ base: "25px", lg: "30px" }} width="70px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="22"
                fill="none"
              >
                <path
                  fill="#4F4F4F"
                  fillRule="evenodd"
                  d="M9.375.667a9.208 9.208 0 1 0 5.7 16.44l3.957 3.957a1.084 1.084 0 0 0 1.532-1.532l-3.957-3.957A9.209 9.209 0 0 0 9.375.667ZM2.333 9.875a7.042 7.042 0 1 1 14.084 0 7.042 7.042 0 0 1-14.084 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Icon>
          }
        >
          <Input
            background="#ffffff"
            borderWidth="1px"
            borderColor={{base: "transparent", md: "#A1A1A1"}}
            fontSize="16px"
            borderRadius="10px"
            paddingLeft={{ base: "60px !important", lg: "70px !important" }}
            paddingRight="10px"
            height="59px"
            placeholder="Search by title or keyword"
            _placeholder={{ color: "#4F4F4F" }}
            _focus={{ borderColor: "#314EF9" }}
          />
        </InputGroup>
      </VStack>
    </Box>
  );
}
