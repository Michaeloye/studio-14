"use client";

import BrandLogo from "@/components/logos/BrandLogo";
import { NAVIGATION_LINKS } from "@/constants";
import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import UserControl from "./UserControl";
import { RxHamburgerMenu } from "react-icons/rx";
import SideNav from "./SideNav";

const HomeNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box>
        <HStack
          height={{ base: 74, lg: 76.59 }}
          boxShadow="0px 4px 20px 0px #0000000F"
          justifyContent="space-between"
          px={{ base: 4, lg: 10 }}
        >
          {/* LEFT PART */}
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

          {/* RIGHT PART */}
          <HStack gap={4}>
            <UserControl />
            <SideNav>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 32 25"
                style={{ width: "30px !important", height: "30px !important" }}
              >
                <path
                  stroke="#3C3C3C"
                  strokeLinecap="round"
                  strokeWidth="3"
                  d="M1.5 1.5h28.137M1.5 12.5h28.14M1.5 23.5h28.137"
                />
              </svg>
            </SideNav>
          </HStack>
        </HStack>
        {children}
      </Box>
    </>
  );
};

export default HomeNav;
