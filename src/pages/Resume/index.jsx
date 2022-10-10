import { Header } from "../../components/Header";
import {
  Box,
  Text,
  Center,
  Image,
  Flex,
  Button,
  Link,
  Accordion,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { RecentProjects } from "../../components/RecentProjects";
import { CardsHardSkills } from "../../components/Card/cardsHardSkills";
import { CardsSoftSkills } from "../../components/Card/cardsSoftSkills";
import { CarouselProjects } from "../../components/CarouselProjects";

import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { Technologies } from "../../services/DataBase/Technologies";
import { SoftSkills } from "../../services/DataBase/SoftSkills";

export const Resume = () => {
  return (
    <Box>
      <Center
        flexDir="column"
        bg={theme.colors.blue[100]}
        w="100%"
        h="fit-content"
      >
        <Header />
        <Box
          w={{ base: "90%", md: "80%" }}
          display="flex"
          flexDir={{ base: "column-reverse", md: "row" }}
          alignItems="flex-end"
        >
          <Box pb={5} textAlign={{ base: "center", md: "left" }}>
            <Text
              fontWeight="700"
              fontSize="4xl"
              w={{ base: "100%", md: "42%" }}
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
            <Text
              w={{ base: "100%", md: "70%" }}
              textAlign={{ base: "justify", md: "left" }}
              mb="20px"
            >
              Meu nome é Henrique, tenho 24 anos, sou uma pessoa LGBTQIA+ e moro
              na cidade de Araxá-MG. Sou Desenvolvedor Front End formado pela
              Kenzie Academy Brasil, onde iniciei minha conexão com a área de
              programação. Atualmente iniciei o curso de Análise e
              Desenvolvimento de Sistemas pela Uninter.
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
            objectFit="cover"
            boxSize="300px"
            src="Henrique2.jpg"
            alt="Henrique Silva"
            m={{ base: "30px auto 0", md: "0" }}
          />
        </Box>
      </Center>

      <Center
        bgGradient="linear(to-r, #ffffff, #f4f0fe, #ebe1fd, #e5d1fa, #e0c1f5)"
        h="130px"
      >
        <Box w={{ base: "90%", md: "80%" }}>
          <Text fontWeight="700" mb={3}>
            Me encontre nas redes
          </Text>
          <Box
            display="flex"
            justifyContent={{ base: "space-around", md: "left" }}
          >
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

      <Center
        w={{ base: "100%", md: "80%" }}
        m="65px auto"
        justifyContent={{ base: "center", md: "space-between" }}
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Box w={{ base: "90%", md: "70%" }}>
          <Box w="100%" bg={theme.colors.blue[100]} p="15px 0">
            <Accordion
              allowMultiple
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              {Technologies.map((techs, index) => (
                <CardsHardSkills techs={techs} key={index} icon={techs.icon} />
              ))}
            </Accordion>
          </Box>
        </Box>

        <Box display="flex" flexDir="column" mb={{ base: "20px", md: "0" }}>
          <Text
            fontFamily="Anton, sans-serif"
            fontSize={{ base: "5rem", md: "8rem" }}
            w={{ base: "100%", md: "146px" }}
            lineHeight="1"
            color={theme.colors.blue[900]}
            letterSpacing={{ base: "0", md: "10px" }}
          >
            HARD
          </Text>
          <Text
            fontFamily="Anton, sans-serif"
            fontSize="3rem"
            lineHeight="1"
            space={1}
            color={theme.colors.red[100]}
            letterSpacing={{ base: "7px", md: "3px" }}
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
        <Box
          w={{ base: "90%", md: "80%" }}
          display="flex"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box
            w={{ base: "100%", md: "30%" }}
            display="flex"
            flexDir="column"
            justifyContent={{ base: "center", md: "space-between" }}
            m={{ base: "0 auto", md: "0" }}
            textAlign={{ base: "center", md: "left" }}
            mb={{ base: "20px", md: "0" }}
          >
            <Text
              fontFamily="Anton, sans-serif"
              fontSize={{ base: "5rem", md: "8rem" }}
              w={{ base: "100%", md: "142px" }}
              lineHeight="1"
              color={theme.colors.blue[900]}
              letterSpacing={{ base: "0", md: "10px" }}
            >
              SOFT
            </Text>
            <Text
              fontFamily="Anton, sans-serif"
              fontSize="3rem"
              lineHeight="1"
              space={1}
              color={theme.colors.red[100]}
              letterSpacing={{ base: "4px", md: "2px" }}
            >
              SKILLS
            </Text>
          </Box>
          <Box w={{ base: "100%", md: "70%" }}>
            <Center w="100%" display="flex" flexWrap="wrap">
              {SoftSkills.map((skill, index) => (
                <CardsSoftSkills skill={skill} key={index} />
              ))}
            </Center>
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
        <Box display={{ base: "flex", md: "none" }} w="100%">
          <CarouselProjects />
        </Box>

        <Box
          w="100%"
          display={{ base: "none", md: "flex" }}
          justifyContent="space-around"
        >
          <RecentProjects />
        </Box>

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
