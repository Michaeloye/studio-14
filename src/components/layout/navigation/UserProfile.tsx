import {
  Box,
  Circle,
  HStack,
  Menu,
  Text,
  Button,
  Portal,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SwitchRole from "./SwitchRole";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const UserControl = () => {
  const [open, setOpen] = useState(false);

  return (
    <Menu.Root open={open} onOpenChange={(details) => setOpen(details.open)}>
      <Menu.Trigger asChild>
        <Button size="sm" p={1} _hover={{ bgColor: "#0000000F" }}>
          <HStack gap={2}>
            <Circle
              size="8"
              bg="#17E4A1"
              fontSize={12}
              color="#000000"
              fontWeight="extrabold"
            >
              JA
            </Circle>
            <Text
              fontSize={16}
              color="#525252"
              display={{ base: "none", lg: "block" }}
              fontWeight="semibold"
            >
              Jonathan
            </Text>
            <Box
              aria-label="dropdown"
              color="#525252"
              display={{ base: "none", lg: "block" }}
              transform={open ? "rotate(180deg)" : "rotate(0deg)"}
              transition="transform 0.2s"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.24981 3.90039L6.49981 7.15039L9.7498 3.90039L11.0498 4.55039L6.49981 9.10039L1.94981 4.55039L3.24981 3.90039Z"
                  fill="currentColor"
                />
              </svg>
            </Box>
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            padding={2}
            background="#FFFFFF"
            boxShadow="0px 4px 20px 0px #00000042"
          >
            <Menu.Item
              value="account"
              color="#525252"
              padding={1}
              rounded={4}
              cursor="pointer"
              _hover={{
                background: "#0000000F",
              }}
            >
              Account
            </Menu.Item>
            <Menu.Item
              value="settings"
              color="#525252"
              padding={1}
              rounded={4}
              cursor="pointer"
              _hover={{
                background: "#0000000F",
              }}
            >
              Settings
            </Menu.Item>
            <Menu.Item
              value="logout"
              color="#525252"
              padding={1}
              rounded={4}
              cursor="pointer"
              _hover={{
                background: "#0000000F",
              }}
            >
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default UserControl;
