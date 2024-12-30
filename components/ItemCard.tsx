"use client";

import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillBug } from "react-icons/ai";
import { LiaConnectdevelop } from "react-icons/lia";
import { MdSwapVerticalCircle } from "react-icons/md";
import Swap from "./Swap";

const ItemCard = () => {
  const [open, setOpen] = useState(null);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false); 
  };

  return (
    <section
      style={{
        backgroundImage: `url('https://b2924970.smushcdn.com/2924970/wp-content/uploads/2022/08/background-green.jpeg?lossy=1&strip=1&webp=1')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "120vh",
        paddingTop: "20px",
      }}
    >
      <Container>
        <Box
          maxWidth={500}
          padding={10}
          border="1px solid green"
          borderRadius={25}
          display={"block"}
          margin={"auto"}
          marginTop={10}
        >
          <VStack color={"#94A08B"} align="left" mb={10}>
            <Text textStyle="xl">Instant Swap</Text>
            <Text textStyle={"xs"}>
              Swap your space skellies with $Matic Instantly
            </Text>
          </VStack>

          <VStack align="left">
            <Text color={"#94A08B"} textStyle={"xs"}>
              0xc4_D4b2D
            </Text>

            <Box
              display="flex"
              justifyContent="space-between"
              borderRadius={10}
              border="1px solid yellow"
              padding="20px"
              bgColor={"#2E3643"}
              color={"#EBC271"}
              height={110}
            >
              <Box>
                <HStack>
                  <AiFillBug />
                  <Text color={"#EBC271"}>Space Skellies</Text>
                </HStack>
                <Button
                  onClick={openMenu}
                  border={"5px solid #4074A3"}
                  borderRadius={10}
                  mt={3}
                  color={"white"}
                  bgColor={"#FEA418"}
                >
                  Select NFTs
                </Button>
              </Box>

              <Box>
                <Text>Bal:108 NFTs</Text>
                <Text textAlign={"right"} mt={3}>
                  0 NFTs
                </Text>
              </Box>
            </Box>
          </VStack>

          <Icon fontSize={"6xl"} display={"block"} margin={"auto"} my={"30px"}>
            <MdSwapVerticalCircle />
          </Icon>

          <VStack align="left">
            <Box
              display="flex"
              justifyContent="space-between"
              borderRadius={10}
              border="1px solid #8738CD"
              padding="20px"
              bgColor={"#2E3643"}
              height={110}
              alignItems="center"
            >
              <HStack color="#8738CD">
                <LiaConnectdevelop />
                <Text>Matic</Text>
              </HStack>

              <Text color={"#8738CD"}>0 $MATIC</Text>
            </Box>
          </VStack>

          <VStack mt={"10"}>
            <Text color={"#94A08B"}>1 Space Skelly = 2.0$MATIC</Text>
            <Button
              width={"100%"}
              color={"white"}
              bgColor={"#04DA88"}
              borderRadius={10}
            >
              Swap
            </Button>
          </VStack>
        </Box>
      </Container>

      <Text color={"#23594A"} textAlign={"center"}>
        Designed and Developed by Skelly Studios 2024
      </Text>

      {open && <Swap closeMenu={closeMenu} />}
    </section>
  );
};

export default ItemCard;
