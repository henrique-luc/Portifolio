import { Header } from "../../components/Header";
import { Box, Text, Center, Image, Flex, Button, Link } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { RecentProjectsCarrousel } from "../../components/RecentProjectsCarrousel";
import { CardsTech } from "../../components/Card/cardsTech";

import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

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
            <Link href="/sobre-mim">
              <Button
                colorScheme="red"
                variant="solid"
                bg={theme.colors.red[100]}
              >
                Saiba Mais
              </Button>
            </Link>
          </Box>
          <Image
            borderRadius="50px 50px 0 0"
            boxSize="300px"
            src="Henrique.jpg"
            alt="Henrique Silva"
          />
        </Box>
      </Center>

      <Center
        bgGradient="linear(to-r, #ffffff, #f4f0fe, #ebe1fd, #e5d1fa, #e0c1f5)"
        h="130px"
      >
        <Box w="80%">
          <Text fontWeight="700" mb={3}>
            Me encontre nas redes
          </Text>
          <Box>
            <Link
              href="https://www.linkedin.com/in/henrique-silva-front-end/"
              isExternal
            >
              <Button
                borderRadius="100%"
                p="27px 20px"
                boxShadow="lg"
                bg="white"
                mr={3}
              >
                <FaLinkedinIn />
              </Button>
            </Link>

            <Link href="https://github.com/henrique-luc" isExternal>
              <Button
                borderRadius="100%"
                p="27px 20px"
                boxShadow="lg"
                bg="white"
                mr={3}
              >
                <FaGithub />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/henrique-silva-front-end/"
              isExternal
            >
              <Button
                borderRadius="100%"
                p="27px 20px"
                boxShadow="lg"
                bg="white"
                mr={3}
              >
                <FaWhatsapp />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/henrique-silva-front-end/"
              isExternal
            >
              <Button
                borderRadius="100%"
                p="27px 20px"
                boxShadow="lg"
                bg="white"
                mr={3}
              >
                <AiFillMail />
              </Button>
            </Link>
          </Box>
        </Box>
      </Center>

      <Center w="80%" m="65px auto">
        <Box w="50%">
          <CardsTech />
        </Box>
        <Box w="50%">
          <Text>Linguagens e Ferramentas que possuo conhecimento</Text>
        </Box>
      </Center>

      <Center>
        <RecentProjectsCarrousel />
      </Center>
    </Box>
  );
};
