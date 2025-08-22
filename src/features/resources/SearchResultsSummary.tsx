import React from "react";
import { Box, Button, Text, HStack } from "@chakra-ui/react";
import { useResourcesContext } from "@/context/ResourcesContext";

const SearchResultsSummary = () => {
  const { 
    resultsCount, 
    hasActiveFilters, 
    hasSearchQuery, 
    clearFilters, 
    setSearchQuery,
    searchQuery 
  } = useResourcesContext();

  if (!hasActiveFilters && !hasSearchQuery) {
    return null;
  }

  return (
    <Box marginBottom={6}>
      <HStack justify="space-between" align="center">
        <Text fontSize="14px" color="#666666">
          {resultsCount} {resultsCount === 1 ? 'result' : 'results'} found
          {hasSearchQuery && ` for "${searchQuery}"`}
        </Text>
        
        {(hasActiveFilters || hasSearchQuery) && (
          <HStack gap={2}>
            {hasSearchQuery && (
              <Button
                onClick={() => setSearchQuery("")}
                fontSize="12px"
                height="28px"
                paddingX={3}
              >
                Clear search
              </Button>
            )}
            {hasActiveFilters && (
              <Button
                onClick={clearFilters}
                fontSize="12px"
                height="28px"
                paddingX={3}
              >
                Clear filters
              </Button>
            )}
          </HStack>
        )}
      </HStack>
    </Box>
  );
};

export default SearchResultsSummary;
