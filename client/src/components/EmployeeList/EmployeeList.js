import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Box,
  Tr,
  SimpleGrid,
  Th,
  Td,
  TableContainer,
  Center,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState();

  const fetchData = useCallback(async () => {
    axios.get("http://localhost:3001/employees/").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const deleteEmploye = () => {
    axios.delete("http://localhost:3001/employees/").then().catch();
  };

  useEffect(() => {
    fetchData();
    console.log("fetch");
  }, [fetchData]);

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Center>
        <Box boxShadow='base' rounded='md'>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Age</Th>
                  <Th>Country</Th>
                  <Th>Position</Th>
                  <Th>Salary</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {(employees || []).map((val, key) => {
                  return (
                    <Tr>
                      <Td>{val.name}</Td>
                      <Td>{val.age}</Td>
                      <Td>{val.country}</Td>
                      <Td>{val.position}</Td>
                      <Td>{val.salary}</Td>
                      <Td>
                        <Button colorScheme="red" size="md">
                          Delete
                        </Button>
                        <Button colorScheme="yellow" size="md">
                          Update
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </SimpleGrid>
  );
};

export default EmployeeList;
