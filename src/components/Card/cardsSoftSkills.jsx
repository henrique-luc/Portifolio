import { Stack, Progress, Text, Box, Center } from "@chakra-ui/react";

export const CardsSoftSkills = ({ skill }) => {
  const { name, progress } = skill;

  return (
    <>
      <Box
        w={{ base: "45%", md: "30%" }}
        m={{ base: "0 5px 15px 5px", md: "0 50px 20px 0" }}
      >
        <Text>{name}</Text>
        <Progress
          colorScheme="purple"
          bg="#e0c1f5"
          size="sm"
          value={progress}
        />
      </Box>
    </>
  );
};
