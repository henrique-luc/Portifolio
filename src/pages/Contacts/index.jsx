import { Box, Center, Text, Link, Button } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { theme } from "../../styles/theme";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export const Contacts = () => {
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
      <Center
        bgGradient="linear(to-l, #ffffff, #f4f0fe, #ebe1fd, #e5d1fa, #e0c1f5)"
        h="fit-content"
      >
        <Box w="80%" mt={5} mb={5}>
          <Box display="flex" flexDir="column">
            <Box display="flex" alignItems="center">
              <Link
                href="https://www.linkedin.com/in/henrique-silva-front-end/"
                isExternal
              >
                <Button
                  borderRadius="100%"
                  p="27px 20px"
                  boxShadow="lg"
                  bg="white"
                  mr={3}
                >
                  <FaLinkedinIn color="#0e76a8" />
                </Button>
              </Link>
              <Text>https://www.linkedin.com/in/henrique-silva-front-end/</Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Link
                href="https://github.com/henrique-luc"
                isExternal
                m="10px 0"
              >
                <Button
                  borderRadius="100%"
                  p="27px 20px"
                  boxShadow="lg"
                  bg="white"
                  mr={3}
                >
                  <FaGithub color="#171515" />
                </Button>
              </Link>
              <Text>https://github.com/henrique-luc</Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Link
                href="http://api.whatsapp.com/send?1=pt_BR&phone=5534998269012"
                isExternal
              >
                <Button
                  borderRadius="100%"
                  p="27px 20px"
                  boxShadow="lg"
                  bg="white"
                  mr={3}
                >
                  <FaWhatsapp color="#25D366" />
                </Button>
              </Link>
              <Text>(34) 99826-9012</Text>
            </Box>

            <Box display="flex" alignItems="center">
              <Link href="mailto:henrique.luc@outlook.com" isExternal mt="10px">
                <Button
                  borderRadius="100%"
                  p="27px 20px"
                  boxShadow="lg"
                  bg="white"
                  mr={3}
                >
                  <AiFillMail color="#2D8CFF" />
                </Button>
              </Link>
              <Text>henrique.luc@outlook.com</Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};
