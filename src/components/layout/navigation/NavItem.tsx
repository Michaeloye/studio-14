import { Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <NextLink href={href} style={{ height: "100%" }} passHref>
      <Text
        h="105%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={5}
        fontSize={14}
        fontWeight={600}
        _hover={{ bgColor: "#0000000F" }}
        color={isActive ? "#314EF9" : "inherit"}
        transitionProperty="all"
        borderBottom={isActive ? "4px solid #314EF9" : "4px solid transparent"}
      >
        {children}
      </Text>
    </NextLink>
  );
};

export default NavItem;
