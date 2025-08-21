import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import SwitchRole from "./SwitchRole";
import UserProfile from "./UserProfile";

const UserControl = () => {
  return (
    <HStack gap={{ base: 3, md: 5 }}>
      <SwitchRole />
      <Box
        backgroundColor="#E4E4E4"
        height={{ base: 6, md: 8 }}
        width="4px"
      ></Box>
      <UserProfile />
    </HStack>
  );
};

export default UserControl;
