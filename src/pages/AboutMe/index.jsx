import { Box, Center, Text, Image } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";

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
          <Box>
            <Text w="70%" mb="20px">
              Meu nome é Henrique, tenho 24 anos, sou uma pessoa LGBTQIA+ e moro
              na cidade de Araxá-MG. Sou Desenvolvedor Front End formado pela
              Kenzie Academy Brasil, onde iniciei minha conexão com a área de
              programação.
            </Text>
            <Text w="70%" mb="20px">
              Nesse curso desenvolvi as seguintes hard skills: HTML, CSS,
              JavaScript, React JS (Redux, ContextAPI, styled-components,
              Formik, Chakra, Axios), Git, GitFlow, Metodologias Ágeis (Scrum e
              Kanban), Typescript (aprendendo). E algumas soft skills.
              Comunicação, Paciência, Gestão de tempo, organização. Devido
              minhas notas e soft skills preenchi o requisito para ser Peer
              Coach(monitoria, exerce a função de tirar dúvidas dos devs que
              estão iniciando em novos módulos, corrigir as atividades propostas
              e aplicar testes técnicos) no próprio curso com apenas 2 meses de
              estudo.
            </Text>
            <Text w="70%" mb="20px">
              Sou um profissional capaz e que gosta de aprender e ensinar, vejo
              a função de Desenvolvedor Front End como o próximo passo ideal
              para a minha carreira. Nessa posição, eu espero ter a oportunidade
              de me desenvolver ainda mais profissionalmente e alcançar meu
              objetivo de me tornar um Desenvolvedor Front End Pleno. Sinto-me
              pronto para trabalhar na área e estou disposto a aprender sempre
              novas tecnologias e ferramentas para aprimorar meu conhecimento.
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
