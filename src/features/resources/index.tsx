import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Filters from "./Filters";
import FiltersDrawer from "./FiltersDrawer";
import ResourceList from "./ResourceList";

const Resources = () => {
  return (
    <Box
      paddingY={{ base: 0, md: 16 }}
      width={{ lg: "80%" }}
      marginX="auto"
    >
      <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }} gap={{ md: 12}}>
        <GridItem>
          <Filters />
          <FiltersDrawer />
        </GridItem>
        <GridItem width={{base: "87%", md: "100%" }} marginTop={12} marginX="auto">
          <ResourceList />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Resources;
