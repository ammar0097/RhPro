import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import EmployeeList from "../components/EmployeeList/EmployeeList";
const Home = () => {
  return (
    <Grid>
      <GridItem>
        <EmployeeList />
      </GridItem>
    </Grid>
  );
};

export default Home;
