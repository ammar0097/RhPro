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
  Spinner,
  TableContainer,
  Center,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const EmployeeList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState();

  const fetchData = useCallback(async () => {
    axios.get("http://localhost:3001/employees/").then((res) => {
      setTimeout(function () {
        setEmployees(res.data);
        setIsLoading(false);
      }, 500);
    });
  }, []);

  const deleteEmploye = () => {
    axios.delete("http://localhost:3001/employees/").then().catch();
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData]);

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Center>
        <Box boxShadow="base" rounded="md">
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
                {isLoading ? (
                  <Td>
                    <Center>
                    <Spinner size='xl' />
                    </Center>
                  </Td>
                ) : (
                  (employees || []).map((val, key) => {
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
                          <Button ml={2} colorScheme="yellow" size="md">
                            Update
                          </Button>
                        </Td>
                      </Tr>
                    );
                  })
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Center>
    </SimpleGrid>
  );
};

export default EmployeeList;
