import { Box, Image, Flex, Center, Text, HStack } from '@chakra-ui/react';
import { ArrowUpIcon, StarIcon, ArrowDownIcon } from '@chakra-ui/icons';
const Review = () => {
  const prop = {
    rating: '4',
    name: 'Blazej',
    date: ' Data napisania recenzji',
    text: '1. Wbrew powszechnemu przekonaniu tygrysy nie występują w Afryce. Na wolności można je zauważyć jedynie w Azji.Tygrysy są zwierzętami mięsożernymi. Znajdują się one na najwyższym poziomie piramidy ekologicznej. Jego ofiarą może paść praktycznie każde zwierzę, niezależnie od wielkości. Najchętniej polują na duże ssaki - dzikie świnie, bawoły, czy sarny. ',
  };
  return (
    <Box maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={2}>
      <Box>
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < prop.rating ? 'teal.500' : 'gray.300'}
            />
          ))}
      </Box>
      <Box fontWeight={'200'}>{prop.date}</Box>

      <Box fontWeight={'bold'} mt={2}>
        <Flex>
          <Image
            borderRadius="full"
            boxSize="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Center ml={'2'}>{prop.name}</Center>
        </Flex>
      </Box>
      <Box maxW={'2xl'} mt={'2'} borderWidth="1px" borderRadius="lg">
        {prop.text}
      </Box>
      <Box mt={2}>
        <HStack>
          <Text color={'teal.300'}>Response</Text>
          <ArrowUpIcon /> <Text>0</Text>
          <ArrowDownIcon /> <Text>0</Text>
        </HStack>
      </Box>
    </Box>
  );
};

export default Review;
