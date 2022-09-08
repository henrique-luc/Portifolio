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
  Tag,
} from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { theme } from "../../styles/theme";

import Buy from "../../assets/Buy.png";

export const ProjectCard = ({ project }) => {
  const { image, title, description, vercel, github, UsedProg, UsedLibs } =
    project;

  return (
    <>
      <AccordionItem bg="white" w="100%" borderRadius="10px" m="0 10px 30px 0">
        <h2>
          <AccordionButton
            flexDir={{ base: "column", md: "row" }}
            justifyContent="space-between"
            bgGradient="linear(to-r, #ffffff, #f4f0fe, #ebe1fd, #e5d1fa, #e0c1f5)"
            borderRadius="10px"
            height={{ base: "fit-content", md: "350px" }}
            _hover={{
              borderRadius: "10px",
            }}
          >
            <Image
              w={{ base: "100%", md: "350px" }}
              h="190px"
              objectFit="cover"
              src={image}
              alt={title}
              borderRadius="10px"
            />
            <Box
              textAlign="start"
              w={{ base: "90%", md: "50%" }}
              fontWeight="700"
            >
              <Text fontWeight="700" fontSize="3xl">
                {title}
              </Text>
              <Text fontSize="sm" mt="7px" textAlign="justify">
                {description}
              </Text>

              <Box
                display="flex"
                justifyContent="space-around"
                mt={{ base: "15px", md: "30px" }}
                mb={{ base: "15px", md: "0" }}
              >
                <Link href={vercel} isExternal>
                  <Button
                    colorScheme="red"
                    variant="solid"
                    bg={theme.colors.red[100]}
                    rightIcon={<SmallAddIcon />}
                    fontSize={{ base: "xs", md: "md" }}
                  >
                    Abrir Aplicação
                  </Button>
                </Link>
                <Link href={github} isExternal>
                  <Button
                    colorScheme="red"
                    variant="solid"
                    bg={theme.colors.red[100]}
                    rightIcon={<SmallAddIcon />}
                    fontSize={{ base: "xs", md: "md" }}
                  >
                    Repo. GitHub
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
              Ferramentas utilizadas:
            </Text>
            <Box>
              {UsedProg.map((prog, index) => (
                <Tag colorScheme="purple" m="0 10px 10px 0" key={index}>
                  {prog}
                </Tag>
              ))}
            </Box>
          </Box>

          <Box>
            <Text mb={1} fontSize="sm">
              Bibliotecas utilizadas:
            </Text>
            <Box>
              {UsedLibs.map((libs, index) => (
                <Tag colorScheme="purple" m="0 10px 10px 0" key={index}>
                  {libs}
                </Tag>
              ))}
            </Box>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};
