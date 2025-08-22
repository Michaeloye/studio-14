import React, { useState } from "react";
import { FILTERS } from "@/constants";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Fieldset,
  Heading,
  Separator,
  For,
} from "@chakra-ui/react";

const Filters = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [selected, setSelected] = useState<Record<string, string[]>>({
    "key-foundational-principles": ['secure-base', 'wellbeing'],
    "document-type": [],
    categories: ['sample-1'],
  });

  const handleFilterChange = (filterKey: string, values: string[]) => {
    setSelected((prev) => ({
      ...prev,
      [filterKey]: values,
    }));
  };

  return (
    <Box
      width="100%"
      fontFamily="var(--font-inter)"
      color="#3F3F3F"
      display={{ base: isMobile ? "block" : "none", md: "block" }}
    >
      <Heading as="h5" fontWeight={700} fontSize={16} paddingX={4}>
        Filters
      </Heading>
      <Separator borderColor="#E0E0E0" marginY={5} />

      <For each={FILTERS}>
        {(filter) => (
          <Fieldset.Root key={filter.key} paddingX={4}>
            <CheckboxGroup
              name={filter.key}
              value={selected[filter.key]}
              onValueChange={(values) => handleFilterChange(filter.key, values)}
            >
              <Fieldset.Legend
                color="#3F3F3F"
                marginBottom={5}
                fontSize="16px"
                fontWeight={700}
              >
                {filter.label}
              </Fieldset.Legend>
              <Fieldset.Content marginBottom={10}>
                <For each={filter.options}>
                  {(option) => (
                    <Checkbox.Root
                      key={option.value}
                      value={option.value}
                      cursor="pointer"
                    >
                      <Checkbox.HiddenInput />
                      <Checkbox.Control
                        borderColor="#E0E0E0"
                        padding="2px"
                        borderRadius="2px"
                      >
                        <Box
                          width="100%"
                          height="100%"
                          borderRadius="2px"
                          backgroundColor={
                            selected[filter.key].includes(option.value)
                              ? "#3F3F3F"
                              : "transparent"
                          }
                        />
                      </Checkbox.Control>
                      <Checkbox.Label fontSize="16px" fontWeight={400}>
                        {option.label}
                      </Checkbox.Label>
                    </Checkbox.Root>
                  )}
                </For>
              </Fieldset.Content>
            </CheckboxGroup>
          </Fieldset.Root>
        )}
      </For>
    </Box>
  );
};

export default Filters;
