import { NAVIGATION_LINKS } from "@/constants";
import { Box, Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import { MdClose } from "react-icons/md";

const SideNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          display={{ base: "flex", md: "none" }}
        >
          {children}
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content backgroundColor="#ffffff">
            <Drawer.Body marginTop={12}>
              {NAVIGATION_LINKS.map((link) => (
                <NavItem key={link.label} href={link.href} mobile>
                  {link.label}
                </NavItem>
              ))}
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="32"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0"
                data-part="close-trigger"
                data-scope="dialog"
                viewBox="0 0 24 24"
              >
                <path fill="none" stroke="none" d="M0 0h24v24H0z" />
                <path
                  stroke="none"
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default SideNav;
