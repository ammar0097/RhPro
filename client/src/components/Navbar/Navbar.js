import { Flex, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-scroll";
import React from "react";
const CTA = "Login";

const Navbar = () => {
  return (
    <Flex id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <HStack as="nav" spacing="5">
          <Link>
            <Button variant="nav"> Home </Button>
            <Button variant="nav"> About </Button>
          </Link>
        </HStack>
        <HStack>
          <Button colorScheme='teal' >{CTA}</Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;
