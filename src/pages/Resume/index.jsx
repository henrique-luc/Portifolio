import { Header } from "../../components/Header";
import { Box, Text, Center, Image, Flex, Button } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { RecentProjectsCarrousel } from "../../components/RecentProjectsCarrousel";
import { CardsTech } from "../../components/Card/cardsTech";

export const Resume = () => {
  return (
    <Box>
      <Center
        flexDir="column"
        bg={theme.colors.blue[100]}
        w="100%"
        h="fit-content"
        pb={5}
      >
        <Header />
        <Box w="80%" display="flex" alignItems="end">
          <Box>
            <Text
              fontWeight="700"
              fontSize="4xl"
              w="42%"
              mt="7%"
              color={theme.colors.blue[900]}
            >
              Olá, eu sou o Henrique Silva!
            </Text>
            <Text
              fontWeight="400"
              fontSize="lg"
              m="3px 0 10px"
              fontStyle="italic"
            >
              Desenvolvedor Front End JR
            </Text>
            <Text w="70%" mb="20px">
              Meu nome é Henrique, tenho 24 anos, sou uma pessoa LGBTQIA+ e moro
              na cidade de Araxá-MG. Sou Desenvolvedor Front End formado pela
              Kenzie Academy Brasil, onde iniciei minha conexão com a área de
              programação.
            </Text>
            <Button
              colorScheme="red"
              variant="solid"
              bg={theme.colors.red[100]}
            >
              Saiba Mais
            </Button>
          </Box>
          <Image
            borderRadius="50px 50px 0 0"
            boxSize="300px"
            src="Henrique.jpg"
            alt="Henrique Silva"
          />
        </Box>
      </Center>

      <Center>
        <CardsTech />
      </Center>

      <Center>
        <RecentProjectsCarrousel />
      </Center>
    </Box>
  );
};
