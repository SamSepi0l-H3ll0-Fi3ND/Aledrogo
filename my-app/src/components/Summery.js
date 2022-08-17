import {
  Box,
  Text,
  Flex,
  Button,
  Center,
  InputGroup,
  InputRightElement,
  Input,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const Summery = () => {
  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text>Use your promo code</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <InputGroup>
              <InputRightElement
                children={
                  <Button>
                    <CheckIcon color="teal.300" />
                  </Button>
                }
              />
              <Input type="text" placeholder="Promo code" />
            </InputGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex justifyContent={'justify-between'}>
        <Box p={'4'} fontWeight={'bold'}>
          Total ammount <Box color={'teal.300'}>$1,900.00 </Box>
        </Box>
      </Flex>
      <Center>
        <Button colorScheme="teal" size="md" width={'80%'} mb={4}>
          Buy now!
        </Button>
      </Center>
    </Box>
  );
};

export default Summery;
