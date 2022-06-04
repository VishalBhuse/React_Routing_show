import { Box, Button, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const [showp, setshowp] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`).then((e) => {
      console.log(e);
      setshowp(e.data);
    });
  }, [id]);

  return (
    <div>
      {id !== "not" ? (
        <>
          <VStack
          m="30px"
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            fontSize="20px"
            fontWeight={'600'}
            align="center"
          >
            <Box w={'300px'} p='20px'   bg="yellow.200">
          <h2>Product ID: {showp.id + 1}</h2>
            </Box>
            <Box w={'300px'} p='20px'  bg="tomato">
          <h2>Product Name: {showp.name}</h2>
            </Box>
            <Box w={'300px'} p='20px'  bg="pink.100">
          <h2>Product Prices: {showp.price}</h2>
            </Box>
          </VStack>
        </>
      ) : (
        <>
          <Box
            bg="tomato"
            w="100%"
            p={4}
            color="white"
            height={"85vh"}
            display="grid"
            placeItems={"center"}
          >
            <Heading>404 | Page Not Found</Heading>
            <Text>
              You just hit a route that doesn't exist... the sadness.😢
            </Text>
            <Link to="/">
              <Button colorScheme="teal" size="lg">
                🏠 Home
              </Button>
            </Link>
          </Box>
        </>
      )}
    </div>
  );
};

export default Product;
