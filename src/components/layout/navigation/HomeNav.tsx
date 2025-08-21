"use client"

import BrandLogo from "@/components/logos/BrandLogo";
import { NAVIGATION_LINKS } from "@/constants";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";

const HomeNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <HStack
        height={{ base: 74, lg: 76.59 }}
        boxShadow="0px 4px 20px 0px #0000000F"
        px={{ base: 4, lg: 10 }}
      >
        <HStack h="100%" gap={10}>
          <BrandLogo withText />

          <HStack h="100%" gap={1} display={{ base: "none", md: "flex" }}>
            {NAVIGATION_LINKS.map((link) => (
              <NavItem key={link.label} href={link.href}>
                {link.label}
              </NavItem>
            ))}
          </HStack>
        </HStack>
      </HStack>
      {children}
    </Box>
  );
};

export default HomeNav;
