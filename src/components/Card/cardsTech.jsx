import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

import { theme } from "../../styles/theme";

import { FaHtml5 } from "react-icons/fa";

export const CardsTech = () => {
  return (
    <Box w="80%" bg={theme.colors.blue[100]} p="15px 0">
      <Accordion
        allowMultiple
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <AccordionItem mb={2} bg="white" w="60%" borderRadius="10px">
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
            <Text>
              HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mb={8} bg="white" w="60%" borderRadius="10px">
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
                CSS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              HTML é uma linguagem de marcação utilizada na construção de
              páginas na Web
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
