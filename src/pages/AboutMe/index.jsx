import {
  Box,
  Center,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";

import kenzieAcademyLogo from "../../assets/kenzieAcademyLogo.png";
import Gdsc from "../../assets/Gdsc.png";
import CameraIcon from "../../assets/CameraIcon.png";
import Pernambucanas from "../../assets/Pernambucanas.png";
import uninter from "../../assets/uninter.png";
import Self from "../../assets/Self.jpg";

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
        <Box w={{ base: "90%", md: "80%" }} mt={5}>
          <Box
            display="flex"
            flexDir={{ base: "column", md: "row" }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Image
              borderRadius="50px 50px 0 0"
              objectFit="cover"
              boxSize="300px"
              src="Henrique2.jpg"
              alt="Henrique Silva"
              m={{ base: "30px auto 0", md: "0 30px 0 0" }}
            />
            <Box>
              <Text
                fontWeight="700"
                fontSize="4xl"
                w={{ base: "100%", md: "60%" }}
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

      <Center
        w={{ base: "90%", md: "80%" }}
        m={{ base: "40px auto", md: "65px auto" }}
        justifyContent="space-between"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Box textAlign="justify" w={{ base: "90%", md: "60%" }}>
          <Text mb="20px">
            Meu nome é Henrique, tenho 25 anos, e moro na cidade de Araxá-MG. No
            meu tempo livre gosto de desenhar, ler, jogar, estar com meus amigos
            e familia. Sou Desenvolvedor Front End certificado pela Kenzie
            Academy Brasil, onde iniciei minha conexão com a área de
            programação. Atualmente iniciei o curso de Análise e Desenvolvimento
            de Sistemas pela Uninter, faço estágio de UX/UI na Self Intelligence
            for Life e faço parte do Google DSC Uninter.
          </Text>
          <Text mb="20px">
            Devido minhas notas e soft skills na Kenzie Academy Brasil, preenchi
            os requisitos para ser monitor onde exercia a função de tirar
            dúvidas dos desenvolvedores que estão iniciando em novos módulos,
            corrigir as atividades propostas e aplicar testes técnicos.
          </Text>
          <Text mb="20px">
            Atualmente faço parte do Google DSC Uninter que é um grupo de
            estudantes onde nossos principais objetivos, além de evoluirmos como
            estudantes e profissionais é claro, são de organizar eventos de
            tecnologia para os outros alunos da universidade (e de fora também!)
            e tentar trazer o máximo de profissionais e conhecimento do mercado
            de trabalho para agregar valor aos outros estudantes, incluindo os
            engenheiros e experts da Google que se dispõem a participar dos
            eventos dos DSCs como palestrantes. Podemos organizar meetups,
            hackatons, tudo mais o que nossa criatividade permitir e
            conseguirmos organizar. Além disso somos incentivamos a desenvolver
            aplicações e soluções que possam ajudar a comunidade universitária e
            local, seja ajudando pequenos negócios a se digitalizarem,
            auxiliando uma escola de alguma forma, alguma ONG, jovens
            estudantes, comunidades carentes, etc.
          </Text>
          <Text mb="20px">
            Além disso faço parte da equipe da Self Intelligence for Life como
            Estagiário em UX/UI, desenvolvendo e projetando telas em Figma para
            desenvolvedores front-end implementarem nas aplicações.
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
        <Box mb={{ base: "20px", md: "0" }}>
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
        <Center
          w={{ base: "90%", md: "80%" }}
          justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box mb={{ base: "40px", md: "0" }}>
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
                  src={uninter}
                  alt="Uninter"
                />
              </Box>
              <Box w={{ base: "70%", md: "50%" }}>
                <Text fontWeight="700" fontSize="xl">
                  Uninter
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Análise e Desenvolvimento de Sistemas
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  out de 2022
                </Text>
              </Box>
            </Center>
            <Center alignItems="flex-start" mt="40px">
              <Box mr="10px">
                <Image
                  boxSize="70px"
                  objectFit="cover"
                  src={kenzieAcademyLogo}
                  alt="Kenzie Academy"
                />
              </Box>
              <Box w={{ base: "70%", md: "50%" }}>
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
          </Box>
        </Center>
      </Center>

      <Center flexDir="column" pb="100px" w="100%">
        <Text
          color={theme.colors.blue[900]}
          mb={8}
          fontWeight="700"
          fontSize="4xl"
          textAlign="center"
        >
          Experiência Profissional
        </Text>
        <Box
          w={{ base: "90%", md: "80%" }}
          display={{ base: "none", md: "flex" }}
          flexDir="column"
        >
          <Center alignItems="flex-start">
            <Box w="50%"></Box>
            <Box
              display="flex"
              borderLeft="2px"
              borderColor={theme.colors.red[100]}
              w="50%"
            >
              <Box mr="10px" pl="40px">
                <Image boxSize="70px" objectFit="cover" src={Self} alt="Self" />
              </Box>

              <Box>
                <Text fontWeight="700" fontSize="xl">
                  Self Intelligence for Life
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Estágio em UX/UI
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  dez de 2022 - atual
                </Text>

                <UnorderedList
                  fontSize="sm"
                  mt="7px"
                  textAlign="justify"
                  ml="20px"
                >
                  <ListItem>Projetar telas utilizando Figma;</ListItem>
                  <ListItem>
                    Participar de reuniões com clientes e elaborar propostas
                    visuais;
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Center>

          <Center alignItems="flex-start" mt={3} mb={3}>
            <Box
              display="flex"
              flexDirection="row-reverse"
              borderRight="2px"
              borderColor={theme.colors.red[100]}
              w="50%"
              ml="5px"
            >
              <Box ml="10px" pr="40px">
                <Image boxSize="70px" objectFit="fit" src={Gdsc} alt="Gdsc" />
              </Box>

              <Box textAlign="right">
                <Text fontWeight="700" fontSize="xl">
                  Google DSC Uninter
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Desenvolvedor Web Front End
                </Text>
                <Text fontSize="sm" mt="7px" color="gray">
                  dez de 2022 - atual
                </Text>

                <UnorderedList
                  fontSize="sm"
                  mt="7px"
                  textAlign="justify"
                  ml="20px"
                >
                  <ListItem>Auxiliar nos eventos propostos;</ListItem>
                  <ListItem>Desenvolver aplicações web;</ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box w="50%"></Box>
          </Center>

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
                  alt="Kenzie Academy"
                />
              </Box>

              <Box>
                <Text fontWeight="700" fontSize="xl">
                  Kenzie Academy Brasil
                </Text>
                <Text lineHeight="12px" fontStyle="italic">
                  Monitor
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
                    Ajudar os desenvolvedores que estão iniciando no módulo;
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
                  alt="CameraIcon"
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
        </Box>

        <Box display={{ base: "flex", md: "none" }} flexDir="column" w="100%">
          <Accordion allowMultiple w="90%" mb={5} m="0 auto">
            <AccordionItem
              bg="white"
              w="100%"
              borderRadius="10px"
              mb="10px"
              boxShadow="lg"
            >
              <h2>
                <AccordionButton
                  justifyContent="space-between"
                  borderRadius="10px"
                  _hover={{
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Image
                      w="60px"
                      h="60px"
                      objectFit="cover"
                      src={kenzieAcademyLogo}
                      alt="CameraIcon"
                      borderRadius="10px"
                    />
                  </Box>

                  <Box textAlign="left">
                    <Text fontWeight="700" fontSize="lg">
                      Kenzie Academy Brasil
                    </Text>
                    <Text lineHeight="12px" fontStyle="italic">
                      Peer Coach (Monitoria)
                    </Text>
                    <Text fontSize="sm" mt="7px" color="gray">
                      fev de 2022 - mai de 2022
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <UnorderedList
                  fontSize="sm"
                  mt="7px"
                  textAlign="justify"
                  ml="20px"
                >
                  <ListItem>
                    Ajudar os desenvolvedores que estão iniciando no módulo;
                  </ListItem>
                  <ListItem>Corrigir as atividades propostas;</ListItem>
                  <ListItem>Aplicar atividades técnicas;</ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              bg="white"
              w="100%"
              borderRadius="10px"
              mb="10px"
              boxShadow="lg"
            >
              <h2>
                <AccordionButton
                  justifyContent="space-between"
                  borderRadius="10px"
                  _hover={{
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Image
                      w="60px"
                      h="60px"
                      objectFit="cover"
                      src={CameraIcon}
                      alt="CameraIcon"
                      borderRadius="10px"
                    />
                  </Box>

                  <Box textAlign="left">
                    <Text fontWeight="700" fontSize="lg">
                      Autônomo
                    </Text>
                    <Text lineHeight="12px" fontStyle="italic">
                      Auxiliar de Fotografia
                    </Text>
                    <Text fontSize="sm" mt="7px" color="gray">
                      nov de 2018 - dez de 2021
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
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
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem
              bg="white"
              w="100%"
              borderRadius="10px"
              mb="10px"
              boxShadow="lg"
            >
              <h2>
                <AccordionButton
                  justifyContent="space-between"
                  borderRadius="10px"
                  _hover={{
                    borderRadius: "10px",
                  }}
                >
                  <Box>
                    <Image
                      w="60px"
                      h="60px"
                      objectFit="cover"
                      src={Pernambucanas}
                      alt="Pernambucanas"
                      borderRadius="10px"
                    />
                  </Box>

                  <Box textAlign="left">
                    <Text fontWeight="700" fontSize="lg">
                      Pernambucanas
                    </Text>
                    <Text lineHeight="12px" fontStyle="italic">
                      Atendimento ao Cliente
                    </Text>
                    <Text fontSize="sm" mt="7px" color="gray">
                      fev de 2016 - ago de 2016
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
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
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
    </Box>
  );
};
