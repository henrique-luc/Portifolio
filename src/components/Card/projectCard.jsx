import {
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import Buy from "../../assets/Buy.png";

export const ProjectCard = () => {
  return (
    <Accordion allowMultiple w="100%">
      <AccordionItem bg="white" w="100%" borderRadius="10px" m="0 10px 10px 0">
        <h2>
          <AccordionButton
            justifyContent="space-between"
            _hover={{
              borderRadius: "10px",
              bg: "#FAD2E3",
            }}
          >
            <Image
              w="350px"
              h="290px"
              objectFit="cover"
              src={Buy}
              alt="Buy An Idea"
              borderRadius="10px"
            />
            <Box textAlign="start" w="50%" fontWeight="700">
              <Text fontWeight="700" fontSize="xl">
                Buy An Idea
              </Text>
              <Text fontSize="sm" mt="7px" textAlign="justify">
                Curso de 1000 horas de Desenvolvimento Front End que abrange
                tecnologias Front End além de soft skills necessários para o
                mercado de trabalho. Entre as linguagens e tecnologias
                aprendidas estão HTML5, CSS3, JavaScript (ES6+), React, Redux e
                Context API.
              </Text>
              <Box display="flex" justifyContent="space-around">
                <Link
                  href="https://capstone-buy-an-idea.vercel.app/"
                  isExternal
                >
                  <Button rightIcon={<SmallAddIcon />}>Abrir Aplicação</Button>
                </Link>
                <Link
                  href="https://capstone-buy-an-idea.vercel.app/"
                  isExternal
                >
                  <Button rightIcon={<SmallAddIcon />}>
                    Repositório GitHub
                  </Button>
                </Link>
              </Box>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Box>
            <Text mb={1} fontSize="sm">
              Ferramentas
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
