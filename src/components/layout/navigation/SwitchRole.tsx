import { HStack, Switch } from "@chakra-ui/react";
import React, { useState } from "react";

const SwitchRole = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch.Root
      checked={checked}
      onCheckedChange={(e) => setChecked(e.checked)}
    >
      <Switch.HiddenInput />
      <Switch.Control
        colorPalette="blue"
        style={{ background: checked ? "#17E4A1" : "#314EF9" }}
      />
      <Switch.Label color="#000000" display={{ base: "none", lg: "block" }}>
        Switch to {checked ? "Employer" : "Employee"}
      </Switch.Label>
    </Switch.Root>
  );
};

export default SwitchRole;
