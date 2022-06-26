import { Stack, Progress, Text, Box, Center } from "@chakra-ui/react";

export const CardsSoftSkills = () => {
  return (
    <Center w="100%" display="flex" flexWrap="wrap">
      <Box w="30%" m="0 50px 20px 0">
        <Text>Comunicação</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={89} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Criatividade</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={65} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Planejamento e Organização</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={70} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Flexibilidade</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={90} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Iniciativa</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={68} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Assertividade</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={86} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Ambição</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={70} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Estabilidade Emocional</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={90} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Capacidade analítica</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={68} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Pensamento conceitual</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={76} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Facilitação</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={95} />
      </Box>
      <Box w="30%" m="0 50px 20px 0">
        <Text>Reflexão</Text>
        <Progress colorScheme="purple" bg="#e0c1f5" size="sm" value={79} />
      </Box>
    </Center>
  );
};
