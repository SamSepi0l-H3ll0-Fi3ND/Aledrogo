import { Box, Center, Text, Progress, Image } from '@chakra-ui/react';
const HotShot = () => {
  return (
    <Box
      maxW="xs"
      borderWidth="1px"
      borderRadius="lg"
      borderColor={'teal.500'}
      boxShadow={'teal.500'}
      overflow="hidden"
    >
      <Center>
        <Box mt={'4'} mb={'4'}>
          <Center>
            <Text color={'teal.200'}>Hot Shot!</Text>
          </Center>
        </Box>
      </Center>
      <Progress size="xs" isIndeterminate colorScheme="teal" />
      <Box mt={'2'}>
        <Center>
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://bit.ly/2Z4KKcF"
            alt="Dan Abramov"
          />
        </Center>
      </Box>
      <Box>
        <Center>
          <Text fontSize="xl" textAlign={'center'} mt={'2'}>
            Chata taka ladna,niedroga,nietania, nietynkowana
          </Text>
        </Center>
      </Box>
      <Box mt={'2'}>
        <Center>
          <Text as="del"> $2000</Text>
        </Center>
      </Box>
      <Box>
        <Center>
          <Text color={'teal.200'} fontSize={'4xl'}>
            {' '}
            $2000
          </Text>
        </Center>
      </Box>
      <Text ml={'8'}> Left 10</Text>
      <Center>
        <Progress value={10} colorScheme="teal" w={'80%'} borderRadius="lg" />
      </Center>
      <Center>
        <Text mb={'4'} mt={'2'}>
          Hurry up! The offer ends in:{' '}
        </Text>
      </Center>
      <Center>
        <Text>Tutaj jakiś random timer</Text>
      </Center>
    </Box>
  );
};

export default HotShot;
