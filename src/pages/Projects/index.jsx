import { Box, Center, Text } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";
import { ProjectCard } from "../../components/Card/projectCard";

export const Projects = () => {
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

        <Text
          fontWeight="700"
          fontSize="4xl"
          w="80%"
          mt="10px"
          color={theme.colors.blue[900]}
        >
          Projetos
        </Text>

        <Center w="80%" mt="100px">
          <ProjectCard />
        </Center>
      </Center>
    </Box>
  );
};
