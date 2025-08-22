import { Button, Drawer, Icon, Portal, Text } from "@chakra-ui/react";
import React from "react";
import Filters from "./Filters";
import { IoFilter } from "react-icons/io5";

const FiltersDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button
          variant="ghost"
          width="100%"
          height="61px"
          backgroundColor="#F2F2F2"
          display={{ base: "flex", md: "none" }}
          color="#3F3F3F"
        >
          <Icon size="lg" color="#000000">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="18"
              fill="none"
              viewBox="0 0 28 18"
            >
              <path
                fill="currentColor"
                d="M0 0h28v4H0zM4 7h20v4H4zM9 14h10v4H9z"
              />
            </svg>
          </Icon>
          <Text fontSize="16px" fontWeight={500}>
            Show Filters
          </Text>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content backgroundColor="#ffffff" shadow="none">
            <Drawer.Body marginTop={4}>
              <Filters isMobile />
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="32"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
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

export default FiltersDrawer;
