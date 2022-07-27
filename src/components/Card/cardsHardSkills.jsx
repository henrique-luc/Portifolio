import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Progress,
  Tag,
} from "@chakra-ui/react";

export const CardsHardSkills = ({ icon: Icon, techs }) => {
  const { name, experience, libs } = techs;

  return (
    <>
      <AccordionItem
        bg="white"
        w={{ base: "45%", md: "30%" }}
        borderRadius="10px"
        m="0 5px 10px 5px"
      >
        <h2>
          <AccordionButton
            p={5}
            _hover={{
              borderRadius: "10px",
              bg: "#FAD2E3",
            }}
          >
            {Icon && <Icon color="#fc6dab" size="25px" />}
            <Box flex="1" textAlign="center" fontWeight="700">
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Box mt={3}>
            {libs.map((lib, index) => (
              <Tag colorScheme="purple" m="0 10px 10px 0" key={index}>
                {lib}
              </Tag>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
};
