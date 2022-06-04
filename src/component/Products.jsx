import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Products = () => {
  const [prod, setprod] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((e) => {
      console.log(e);
      setprod(e.data);
    });
  }, []);

  return (
    <div>
      <Box
        height={"480px"}
        backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ0G1xOkCeeIi25BqEU6LK0h8NxKlNrQeMrA&usqp=CAU')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"100% 100%"}
      >
        <TableContainer
          width={"50%"}
          m="auto"
          mt={"50px"}
          border={"2px solid green"}
          fontSize={"20px"}
        >
          <Table variant="striped" colorScheme="orange">
            <Thead>
              <Tr>
                <Th fontSize={"20px"}>Index</Th>
                <Th fontSize={"20px"}>Name</Th>
                <Th fontSize={"20px"}>Prices</Th>
                <Th fontSize={"20px"}>Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              {prod.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.id + 1}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.price}</Td>
                    <Td>
                      <Link to={"/product/" + item.id} style={{cursor:"pointer",color:"blue"}}>More Details</Link>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Products;
