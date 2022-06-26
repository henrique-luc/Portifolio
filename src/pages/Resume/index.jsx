import { Header } from "../../components/Header";
import { Box, Text, Center, Image, Flex, Button, Link } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { RecentProjects } from "../../components/RecentProjects";
import { CardsHardSkills } from "../../components/Card/cardsHardSkills";
import { CardsSoftSkills } from "../../components/Card/cardsSoftSkills";

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
                <FaLinkedinIn color="#0e76a8" />
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
                <FaGithub color="#171515" />
              </Button>
            </Link>

            <Link
              href="http://api.whatsapp.com/send?1=pt_BR&phone=5534998269012"
              isExternal
            >
              <Button
                borderRadius="100%"
                p="27px 20px"
                boxShadow="lg"
                bg="white"
                mr={3}
              >
                <FaWhatsapp color="#25D366" />
              </Button>
            </Link>

            <Link href="mailto:henrique.luc@outlook.com" isExternal>
              <Button
                borderRadius="100%"
                p="27px 20px"
                boxShadow="lg"
                bg="white"
                mr={3}
              >
                <AiFillMail color="#2D8CFF" />
              </Button>
            </Link>
          </Box>
        </Box>
      </Center>

      <Center w="80%" m="65px auto">
        <Box w="70%">
          <CardsHardSkills />
        </Box>
        <Box
          w="30%"
          display="flex"
          flexDir="column"
          alignItems="center"
          m="0 auto"
        >
          <Text
            fontFamily="Anton, sans-serif"
            fontSize="8rem"
            w="146px"
            lineHeight="1"
            color={theme.colors.blue[900]}
            letterSpacing="10px"
          >
            HARD
          </Text>
          <Text
            fontFamily="Anton, sans-serif"
            fontSize="3rem"
            lineHeight="1"
            space={1}
            color={theme.colors.red[100]}
            letterSpacing="3px"
          >
            SKILLS
          </Text>
        </Box>
      </Center>

      <Center
        w="100%"
        m="65px auto"
        p="30px 0"
        bgGradient="linear(to-r,  #e0c1f5, #e5d1fa,#ebe1fd, #f4f0fe, #ffffff, )"
      >
        <Box w="80%" display="flex">
          <Box
            w="30%"
            display="flex"
            flexDir="column"
            alignItems="center"
            m="0 auto"
          >
            <Text
              fontFamily="Anton, sans-serif"
              fontSize="8rem"
              w="142px"
              lineHeight="1"
              color={theme.colors.blue[900]}
              letterSpacing="10px"
            >
              SOFT
            </Text>
            <Text
              fontFamily="Anton, sans-serif"
              fontSize="3rem"
              lineHeight="1"
              space={1}
              color={theme.colors.red[100]}
              letterSpacing="2px"
            >
              SKILLS
            </Text>
          </Box>
          <Box w="70%">
            <CardsSoftSkills />
          </Box>
        </Box>
      </Center>

      <Center flexDir="column" pb="100px">
        <Text
          color={theme.colors.blue[900]}
          mb={5}
          fontWeight="700"
          fontSize="4xl"
        >
          Projetos Recentes
        </Text>
        <RecentProjects />
        <Link href="/projetos">
          <Button
            mt={5}
            colorScheme="red"
            variant="solid"
            bg={theme.colors.red[100]}
          >
            Mais Projetos
          </Button>
        </Link>
      </Center>
    </Box>
  );
};
