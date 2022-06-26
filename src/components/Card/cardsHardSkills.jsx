import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Progress,
  Tag,
} from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPencilAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import { SiJavascript, SiAdobe, SiTypescript } from "react-icons/si";

export const CardsHardSkills = () => {
  return (
    <Box w="100%" bg={theme.colors.blue[100]} p="15px 0">
      <Accordion
        allowMultiple
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaGitAlt color="#F7114E" size="30px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                Git
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
            <Box mt={3}>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Git Flow
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                GitHub
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Pull Request
              </Tag>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaHtml5 color="#F7114E" size="30px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                HTML5
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaCss3Alt color="#F7114E" size="30px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                CSS3
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <SiJavascript color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                JavaScript
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaReact color="#F7114E" size="30px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                React JS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
            <Box mt={3}>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Context API
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Redux
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Axios
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Chakra
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Formik
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Toastify
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Styled-Components
              </Tag>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <SiTypescript color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                TypeScript
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={70} />
            </Box>
            <Box mt={3}>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                React TypeScript
              </Tag>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaNodeJs color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                Node.js
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={10} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaInfoCircle color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                API Rest
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaPencilAlt color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                Metod. Ágeis
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
            <Box mt={3}>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Scrum
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                kanban
              </Tag>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <FaFigma color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                Figma
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={90} />
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <SiAdobe color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                Adobe CC
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={100} />
            </Box>
            <Box mt={3}>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Lightroom
              </Tag>
              <Tag colorScheme="purple" m="0 10px 10px 0">
                Photoshop
              </Tag>
            </Box>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem bg="white" w="30%" borderRadius="10px" m="0 10px 10px 0">
          <h2>
            <AccordionButton
              p={5}
              _hover={{
                borderRadius: "10px",
                bg: "#FAD2E3",
              }}
            >
              <IoLanguageOutline color="#F7114E" size="25px" />
              <Box flex="1" textAlign="center" fontWeight="700">
                Inglês
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Box>
              <Text mb={1} fontSize="sm">
                {" "}
                Nível de experiência
              </Text>
              <Progress colorScheme="purple" hasStripe value={90} />
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
