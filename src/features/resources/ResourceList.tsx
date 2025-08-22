import { For, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import ResourceItem from "./ResourceItem";
import EmptyResource from "./EmptyResource";
import { useResourcesContext } from "@/context/ResourcesContext";

const ResourceList = () => {
  const { filteredResources } = useResourcesContext();
  
  return (
    (filteredResources.length > 0 ? <Grid templateColumns="repeat(auto-fill, minmax(210px, 1fr))" gap={4}>
      <For each={filteredResources}>
        {(resource) => (
          <GridItem key={resource.id}>
            <ResourceItem resource={resource} />
          </GridItem>
        )}
      </For>
    </Grid> : <EmptyResource />)
  );
};

export default ResourceList;
