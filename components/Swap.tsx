"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosClose } from "react-icons/io";
import Bottle from "@/Assets/bottle.jpg";
import Image from "next/image";
import { ImageUnder } from "@/Assets/Data";


const Swap = ({ closeMenu }) => {
  return (
    <Container>
      <Box
        maxWidth={500}
        padding={10}
        border="1px solid #FEA418"
        borderRadius={25}
        display={"block"}
        margin={"auto"}
        marginTop={10}
        position={"relative"}
        backdropFilter="blur(10px)"
        top={-700}
      >
        <HStack>
          <Text flex={1} textAlign={"center"}>
            Select NFTs you want to swap
          </Text>
          <Icon onClick={closeMenu} fontSize={40} cursor={"pointer"}>
            <IoIosClose />
          </Icon>
        </HStack>

        <Grid templateColumns="repeat(4, 1fr)" gap={3}>
          {ImageUnder.map((item) => (
            <GridItem key={item.id}>
              <Image src={Bottle} alt="moonBottle image" />
            </GridItem>
          ))}
        </Grid>

        <Button my={8} color={"white"} bgColor={"#FEA418"} width={"100%"}>
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default Swap;
