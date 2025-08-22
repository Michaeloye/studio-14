import { Heading, VStack, Text, Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { useResourcesContext } from '@/context/ResourcesContext';

const EmptyResource = () => {
  const { hasActiveFilters, hasSearchQuery, clearFilters, setSearchQuery, searchQuery } = useResourcesContext();

  const handleClearAll = () => {
    clearFilters();
    setSearchQuery("");
  };

  return (
    <VStack gap={4} padding={8} textAlign="center">
      <Heading as="h2" fontSize="2xl" color="#3F3F3F">
        No resources found
      </Heading>
      
      {hasSearchQuery || hasActiveFilters ? (
        <>
          <Text color="#666666" fontSize="16px">
            {hasSearchQuery && hasActiveFilters
              ? `No resources match your search "${searchQuery}" and selected filters`
              : hasSearchQuery
              ? `No resources match your search "${searchQuery}"`
              : "No resources match your selected filters"
            }
          </Text>
          <HStack gap={3}>
            {hasSearchQuery && (
              <Button
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            )}
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
              >
                Clear filters
              </Button>
            )}
            {(hasSearchQuery && hasActiveFilters) && (
              <Button
                onClick={handleClearAll}
              >
                Clear all
              </Button>
            )}
          </HStack>
        </>
      ) : (
        <Text color="#666666" fontSize="16px">
          No resources are currently available
        </Text>
      )}
    </VStack>
  );
};

export default EmptyResource