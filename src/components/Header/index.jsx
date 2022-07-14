import {
  Flex,
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
  Link,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";

export const Header = () => {
  return (
    <HStack
      bg="white"
      mt={5}
      alignItems="center"
      justifyContent="space-around"
      borderRadius={10}
      p="15px 0"
      w="80%"
      flexWrap="wrap"
    >
      <Heading fontSize="xl" color={theme.colors.blue[900]}>
        &lt;Portifólio/&gt;
      </Heading>
      <Box>
        <Breadcrumb separator="" fontWeight="700">
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              _hover={{
                color: theme.colors.red[100],
              }}
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/sobre-mim"
              _hover={{
                color: theme.colors.red[100],
              }}
            >
              Sobre Mim
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/projetos"
              _hover={{
                color: theme.colors.red[100],
              }}
            >
              Projetos
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink
              href="/contatos"
              _hover={{
                color: theme.colors.red[100],
              }}
            >
              Contatos
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Link
        href="https://drive.google.com/u/0/uc?id=10m_2h0PHxWUb68wQlO7N9KT5csz4K77-&export=download"
        isExternal
      >
        <Button colorScheme="red" variant="solid" bg={theme.colors.red[100]}>
          Download CV
        </Button>
      </Link>
    </HStack>
  );
};
