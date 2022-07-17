import React, { useCallback, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState();

  const fetchData = useCallback(async () => {
    axios.get("http://localhost:3001/employees/").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  useEffect(() => {
    fetchData();
    console.log("fetch");
  }, [fetchData]);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Country</Th>
            <Th>Position</Th>
            <Th>Salary</Th>
          </Tr>
        </Thead>
        <Tbody>
        {(employees || []).map((val, key) => {
          return (            <Tr>
              <Td>{val.name}</Td>
              <Td>{val.age}</Td>
              <Td>{val.country}</Td>
              <Td>{val.position}</Td>
              <Td>{val.salary}</Td>
            </Tr>
          )})}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
