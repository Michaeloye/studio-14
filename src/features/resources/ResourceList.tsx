import { For, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import ResourceItem from "./ResourceItem";
import { RESOURCES } from "@/data";
import EmptyResource from "./EmptyResource";

const ResourceList = () => {
  const [resources, setResources] = useState(RESOURCES);
  return (
    (resources.length > 0 ? <Grid templateColumns="repeat(auto-fill, minmax(210px, 1fr))" gap={4}>
      <For each={resources}>
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
