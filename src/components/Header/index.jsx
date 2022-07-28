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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <HStack
      bg="white"
      mt={5}
      alignItems="center"
      justifyContent="space-around"
      borderRadius={10}
      p="15px 0"
      w={{ base: "90%", md: "80%" }}
      flexWrap="wrap"
    >
      <Heading fontSize="xl" color={theme.colors.blue[900]}>
        &lt;Portifólio/&gt;
      </Heading>

      <Box>
        <Box display={{ base: "flex", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>
                <Link
                  fontWeight="700"
                  href="/"
                  _hover={{
                    color: theme.colors.red[100],
                  }}
                >
                  Home
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  fontWeight="700"
                  href="/sobre-mim"
                  _hover={{
                    color: theme.colors.red[100],
                  }}
                >
                  Sobre Mim
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  fontWeight="700"
                  href="/projetos"
                  _hover={{
                    color: theme.colors.red[100],
                  }}
                >
                  Projetos
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  fontWeight="700"
                  href="/contatos"
                  _hover={{
                    color: theme.colors.red[100],
                  }}
                >
                  Contatos
                </Link>
              </MenuItem>

              <MenuItem
                display="flex"
                justifyContent="center"
                mt="30px"
                _hover={{ bg: "transparent" }}
              >
                <Link
                  href="https://drive.google.com/u/0/uc?id=1OcN8qLRQCNTh0OUCG3REy4F2w5lIn6iH&export=download"
                  isExternal
                >
                  <Button
                    colorScheme="red"
                    variant="solid"
                    bg={theme.colors.red[100]}
                  >
                    Download CV
                  </Button>
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box display={{ base: "none", md: "flex" }}>
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
      </Box>

      <Box display={{ base: "none", md: "flex" }}>
        <Link
          href="https://drive.google.com/u/0/uc?id=1OcN8qLRQCNTh0OUCG3REy4F2w5lIn6iH&export=download"
          isExternal
        >
          <Button colorScheme="red" variant="solid" bg={theme.colors.red[100]}>
            Download CV
          </Button>
        </Link>
      </Box>
    </HStack>
  );
};
