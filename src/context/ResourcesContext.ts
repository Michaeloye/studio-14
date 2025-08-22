"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import { RESOURCES, TResource } from "@/data";

export interface FilterState {
  "key-foundational-principles": string[];
  "document-type": string[];
  categories: string[];
}

interface ResourcesContextType {
  // Data
  allResources: TResource[];
  filteredResources: TResource[];

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Filters
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  updateFilter: (filterKey: keyof FilterState, values: string[]) => void;
  clearFilters: () => void;

  // Utilities
  resultsCount: number;
  hasActiveFilters: boolean;
  hasSearchQuery: boolean;
}

const ResourcesContext = createContext<ResourcesContextType | undefined>(
  undefined
);

const initialFilters: FilterState = {
  "key-foundational-principles": [],
  "document-type": [],
  categories: [],
};

interface ResourcesProviderProps {
  children: ReactNode;
}

export const ResourcesProvider = ({ children }: ResourcesProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const matchesSearch = (resource: TResource, query: string): boolean => {
    if (!query.trim()) return true;

    const searchTerm = query.toLowerCase().trim();
    return (
      resource.title.toLowerCase().includes(searchTerm) ||
      resource.description.toLowerCase().includes(searchTerm) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  };

  const matchesFilters = useCallback((resource: TResource): boolean => {
    if (filters["key-foundational-principles"].length > 0) {
      const resourceTags = resource.tags.map((tag) =>
        tag.toLowerCase().replace(/\s+/g, "-")
      );
      const hasMatchingPrinciple = filters["key-foundational-principles"].some(
        (principle) => resourceTags.includes(principle)
      );
      if (!hasMatchingPrinciple) return false;
    }

    if (filters["document-type"].length > 0) {
      if (!filters["document-type"].includes(resource.type)) return false;
    }

    return true;
  }, [filters]);

  // Compute filtered resources based on search and filters
  const filteredResources = useMemo(() => {
    return RESOURCES.filter(
      (resource) =>
        matchesSearch(resource, searchQuery) && matchesFilters(resource)
    );
  }, [searchQuery, matchesFilters]);

  const updateFilter = (filterKey: keyof FilterState, values: string[]) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: values,
    }));
  };

  const clearFilters = () => {
    setFilters(initialFilters);
  };

  // Computed values
  const hasActiveFilters = useMemo(() => {
    return Object.values(filters).some((filterArray) => filterArray.length > 0);
  }, [filters]);

  const hasSearchQuery = useMemo(() => {
    return searchQuery.trim().length > 0;
  }, [searchQuery]);

  const value: ResourcesContextType = {
    allResources: RESOURCES,
    filteredResources,

    searchQuery,
    setSearchQuery,

    filters,
    setFilters,
    updateFilter,
    clearFilters,

    resultsCount: filteredResources.length,
    hasActiveFilters,
    hasSearchQuery,
  };

  return React.createElement(ResourcesContext.Provider, { value }, children);
};

export const useResourcesContext = (): ResourcesContextType => {
  const context = useContext(ResourcesContext);
  if (context === undefined) {
    throw new Error(
      "useResourcesContext must be used within a ResourcesProvider"
    );
  }
  return context;
};

export default ResourcesContext;
