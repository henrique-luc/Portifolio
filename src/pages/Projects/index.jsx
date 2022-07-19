import { Box, Center, Text, Accordion } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";
import { ProjectCard } from "../../components/Card/projectCard";
import { useState } from "react";
import { Projects } from "../../services/DataBase/Projects";

export const ProjectsPage = () => {
  const [allProjects] = useState(Projects);

  return (
    <Box>
      <Center
        flexDir="column"
        bg={theme.colors.blue[100]}
        w="100%"
        h="fit-content"
        pb={5}
        justifyContent="space-between"
      >
        <Header />
      </Center>

      <Center w="100%" mt={9}>
        <Accordion
          allowMultiple
          w={{ base: "90%", md: "80%" }}
          display="flex"
          flexDir="column"
          justifyContent="center"
          m="0 auto"
        >
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Accordion>
      </Center>
    </Box>
  );
};
