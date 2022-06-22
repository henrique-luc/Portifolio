import { Header } from "../../components/Header";
import { Box, Text, Center } from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const Resume = () => {
  return (
    <Center flexDir="column" bg="blue.900" w="100%" h="100%">
      <Header />
      <Box>
        <Text>Olá! Eu sou o Henrique</Text>
        <Text>Desenvolvedor Front End JR</Text>
      </Box>
    </Center>
  );
};
