import { Box, Center, Text, Image } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";

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
      </Center>
    </Box>
  );
};
