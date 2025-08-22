import { Switch } from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SwitchRole = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitch = (e: { checked: boolean }) => {
    setChecked(e.checked);
    toast.success(`You've switched to ${e.checked ? "Employee" : "Employer"}`, {
      position: "bottom-right",
    });
  };

  return (
    <Switch.Root checked={checked} onCheckedChange={handleSwitch}>
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
