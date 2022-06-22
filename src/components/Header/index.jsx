import {
  Flex,
  Box,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  HStack,
} from "@chakra-ui/react";

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
    >
      <Heading>&lt;Portifólio/&gt;</Heading>
      <Box>
        <Breadcrumb separator="">
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/sobre-mim">Sobre Mim</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/projetos">Projetos</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/contatos">Contatos</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Button colorScheme="red" variant="solid" bg="red.400">
        Download CV
      </Button>
    </HStack>
  );
};
