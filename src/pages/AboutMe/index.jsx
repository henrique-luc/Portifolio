import {
  Box,
  Center,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";

import kenzieAcademyLogo from "../../assets/kenzieAcademyLogo.png";
import CruzeiroDoSulLogo from "../../assets/CruzeiroDoSulLogo.png";
import CameraIcon from "../../assets/CameraIcon.png";
import Pernambucanas from "../../assets/Pernambucanas.png";

export const AboutMe = () => {
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
        <Box w="80%" mt={5}>
          <Box display="flex">
            <Image
              borderRadius="50px 50px 0 0"
              boxSize="300px"
              src="Henrique.jpg"
              alt="Henrique Silva"
              mr={5}
            />
            <Box>
              <Text
                fontWeight="700"
                fontSize="4xl"
                w="60%"
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
            </Box>
          </Box>
        </Box>
      </Center>

      <Center w="80%" m="65px auto" justifyContent="space-between">
        <Box textAlign="justify" w="60%">
          <Text mb="20px">
            Meu nome é Henrique, tenho 24 anos, sou uma pessoa LGBTQIA+ e moro
            na cidade de Araxá-MG. No meu tempo livre gosto de desenhar, ler,
            jogar, estar com meus amigos e familia. Sou Desenvolvedor Front End
            formado pela Kenzie Academy Brasil, onde iniciei minha conexão com a
            área de programação, e sou Técnologo em Fotografia.
          </Text>
          <Text mb="20px">
            Devido minhas notas e soft skills na Kenzie Academy Brasil, preenchi
            os requisitos para ser Peer Coach (monitoria) que exerce a função de
            tirar dúvidas dos desenvolvedores que estão iniciando em novos
            módulos, corrigir as atividades propostas e aplicar testes técnicos,
            com apenas 2 meses de estudo.
          </Text>
          <Text mb="20px">
            Sou um profissional capaz e que gosta de aprender e ensinar. Vejo a
            função de Desenvolvedor Front End como o próximo passo ideal para a
            minha carreira. Nessa posição, eu espero ter a oportunidade de me
            desenvolver ainda mais profissionalmente e alcançar meu objetivo de
            me tornar um Desenvolvedor Front End Pleno. Sinto-me pronto para
            trabalhar na área e estou disposto a aprender sempre novas
            tecnologias e ferramentas para aprimorar meu conhecimento.
          </Text>
        </Box>
        <Box>
          <Text
            fontFamily="Anton, sans-serif"
            fontSize="7xl"
            lineHeight="1"
            color={theme.colors.blue[900]}
            letterSpacing="2px"
          >
            SOBRE
          </Text>
          <Text
            fontFamily="Anton, sans-serif"
            fontSize="6rem"
            lineHeight="1"
            space={1}
            color={theme.colors.red[100]}
            letterSpacing="5px"
          >
            MIM
          </Text>
        </Box>
      </Center>

      <Center
        w="100%"
        m="65px auto"
        p="30px 0"
        bgGradient="linear(to-r, #ffffff, #f4f0fe, #ebe1fd, #e5d1fa, #e0c1f5)"
      >
        <Center w="80%" justifyContent="space-between">
          <Box>
            <Text
              fontFamily="Anton, sans-serif"
              fontSize="5xl"
              color={theme.colors.blue[900]}
              letterSpacing="2px"
            >
              FORMAÇÃO
            </Text>
            <Text
              fontFamily="Anton, sans-serif"
              fontSize="5xl"
              lineHeight="1"
              space={1}
              color={theme.colors.red[100]}
            >
              ACADÊMICA
            </Text>
          </Box>
          <Box>
            <Center alignItems="flex-start">
              <Box mr="10px">
                <Image
                  boxSize="70px"
                  objectFit="cover"
                  src={kenzieAcademyLogo}
                  alt="Dan Abramov"
                />
              </Box>
              <Box w="50%">
                <Text fontWeight="700" fontSize="xl">
                  Kenzie Academy Brasil
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Desenvolvedor Front End
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  nov de 2021 - mai de 2022
                </Text>
                <Text fontSize="sm" mt="7px" textAlign="justify">
                  Curso de 1000 horas de Desenvolvimento Front End que abrange
                  tecnologias Front End além de soft skills necessários para o
                  mercado de trabalho. Entre as linguagens e tecnologias
                  aprendidas estão HTML5, CSS3, JavaScript (ES6+), React, Redux
                  e Context API.
                </Text>
              </Box>
            </Center>
            <Center alignItems="flex-start" mt="40px">
              <Box mr="10px">
                <Image
                  boxSize="70px"
                  objectFit="cover"
                  src={CruzeiroDoSulLogo}
                  alt="Dan Abramov"
                />
              </Box>
              <Box w="50%">
                <Text fontWeight="700" fontSize="xl">
                  Cruzeiro do Sul Virtual
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Tecnólogo Fotografia
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  mai de 2018 - mai de 2020
                </Text>
              </Box>
            </Center>
          </Box>
        </Center>
      </Center>

      <Center flexDir="column" pb="100px" w="100%">
        <Text
          color={theme.colors.blue[900]}
          mb={8}
          fontWeight="700"
          fontSize="4xl"
        >
          Experiência Profissional
        </Text>
        <Box w="80%">
          <Center alignItems="flex-start">
            <Box w="50%"></Box>
            <Box
              display="flex"
              borderLeft="2px"
              borderColor={theme.colors.red[100]}
              w="50%"
            >
              <Box mr="10px" pl="40px">
                <Image
                  boxSize="70px"
                  objectFit="cover"
                  src={kenzieAcademyLogo}
                  alt="Dan Abramov"
                />
              </Box>

              <Box>
                <Text fontWeight="700" fontSize="xl">
                  Kenzie Academy Brasil
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Peer Coach (Monitoria)
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  fev de 2022 - mai de 2022
                </Text>

                <UnorderedList
                  fontSize="sm"
                  mt="7px"
                  textAlign="justify"
                  ml="20px"
                >
                  <ListItem>
                    Ajudar os desenvolvedores que estavam iniciando no módulo;
                  </ListItem>
                  <ListItem>Corrigir as atividades propostas;</ListItem>
                  <ListItem>Aplicar atividades técnicas;</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Center>

          <Center alignItems="flex-start" mt={3}>
            <Box
              display="flex"
              flexDirection="row-reverse"
              borderRight="2px"
              borderColor={theme.colors.red[100]}
              w="50%"
              ml="5px"
            >
              <Box ml="10px" pr="40px">
                <Image
                  boxSize="70px"
                  objectFit="cover"
                  src={CameraIcon}
                  alt="Dan Abramov"
                />
              </Box>

              <Box textAlign="right">
                <Text fontWeight="700" fontSize="xl">
                  Autônomo
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Auxiliar de Fotografia
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  nov de 2018 - dez de 2021
                </Text>

                <UnorderedList
                  fontSize="sm"
                  mt="7px"
                  textAlign="justify"
                  ml="20px"
                >
                  <ListItem>Auxiliar nos equipamentos de luz;</ListItem>
                  <ListItem>Fotografar eventos;</ListItem>
                  <ListItem>Edição de fotos e albuns fotográficos;</ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box w="50%"></Box>
          </Center>

          <Center alignItems="flex-start" mt={3}>
            <Box w="50%"></Box>
            <Box
              display="flex"
              borderLeft="2px"
              borderColor={theme.colors.red[100]}
              w="50%"
            >
              <Box mr="10px" pl="40px">
                <Image
                  boxSize="70px"
                  objectFit="cover"
                  src={Pernambucanas}
                  alt="Dan Abramov"
                />
              </Box>

              <Box>
                <Text fontWeight="700" fontSize="xl">
                  Pernambucanas
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Atendimento ao Cliente
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  fev de 2016 - ago de 2016
                </Text>

                <UnorderedList
                  fontSize="sm"
                  mt="7px"
                  textAlign="justify"
                  ml="20px"
                >
                  <ListItem>Atendimento ao cliente;</ListItem>
                  <ListItem>Estoque;</ListItem>
                  <ListItem>Caixa;</ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};
