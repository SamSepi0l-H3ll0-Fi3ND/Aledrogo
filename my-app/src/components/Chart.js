import { Box, HStack, Image, Text, Button, Flex } from '@chakra-ui/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { StarIcon, DeleteIcon } from '@chakra-ui/icons';
const Chart = () => {
  const prop = {
    name: ' boAt Rockerz 333',
    price: '$1,900.00',
    count: '55',
    desc: 'Change your description here',
    category: 'Headphones',
  };
  return (
    <Box maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box m={'4'} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <HStack m={'4'} spacing={12}>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          ></Image>
          <Text>{prop.name}</Text>
          <Text>{prop.price}</Text>
          <NumberInput size="sm" maxW={99} defaultValue={1} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <StarIcon />
          <DeleteIcon />
        </HStack>
      </Box>
      <Box m={'4'} borderWidth="1px" borderRadius="lg" overflow="hidden">
        <HStack m={'4'} spacing={12}>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          ></Image>
          <Text>{prop.name}</Text>
          <Text>{prop.price}</Text>
          <NumberInput size="sm" maxW={99} defaultValue={1} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <StarIcon />
          <DeleteIcon />
        </HStack>
      </Box>
    </Box>
  );
};

export default Chart;
