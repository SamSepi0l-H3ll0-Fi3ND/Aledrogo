import {
  Box,
  Stack,
  Divider,
  Heading,
  Input,
  Center,
  Textarea,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
} from '@chakra-ui/react';

const EditProduct = () => {
  const prop = {
    name: ' boAt Rockerz 333',
    price: '$1,900.00',
    count: '55',
    desc: 'Change your description here',
    category: 'Headphones',
  };

  return (
    <Box maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading textAlign={'center'} fontFamily={''} mt={'4'} mb={'4'} size="lg">
        <Text>Edit your product</Text>
      </Heading>
      <Center>
        <Divider mt={'4'} mb={'4'} w={'90%'} />
      </Center>
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <GridItem>
          <Stack direction="row" h="80px" pl={'2'}>
            <Divider orientation="vertical" bg={'teal.500'} />
            <Box color="teal.200">
              <Text>Product Name</Text>
              <Center>
                <Input
                  mt={1}
                  color={'white'}
                  borderRadius={'20px'}
                  type={'text'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  placeholder={prop.name}
                />
              </Center>
            </Box>
          </Stack>
          <Divider bg={'teal.500'} ml={'2'} mt={'2'} maxWidth={'200px'} />
          <Stack direction="row" h="80px" pl={'2'} mt={'2'}>
            <Divider orientation="vertical" bg={'teal.500'} />
            <Box color="teal.200">
              <Text> Price</Text>
              <Center>
                <Input
                  mt={1}
                  color={'white'}
                  borderRadius={'20px'}
                  type={'number'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  placeholder={prop.price}
                />
              </Center>
            </Box>
          </Stack>
          <Divider bg={'teal.500'} ml={'2'} mt={'2'} maxWidth={'200px'} />
          <Stack direction="row" h="80px" pl={'2'} mt={'2'}>
            <Divider orientation="vertical" bg={'teal.500'} />
            <Box color="teal.200">
              <Text> Count</Text>
              <Center>
                <Input
                  mt={1}
                  color={'white'}
                  borderRadius={'20px'}
                  type={'number'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  placeholder={prop.count}
                />
              </Center>
            </Box>
          </Stack>
          <Divider bg={'teal.500'} ml={'2'} mt={'2'} maxWidth={'200px'} />
          <Stack direction="row" h="80px" pl={'2'} mt={'2'} mb={'6'}>
            <Divider orientation="vertical" bg={'teal.500'} />
            <Box color="teal.200">
              <Text>Category</Text>
              <Center>
                <Input
                  mt={1}
                  color={'white'}
                  borderRadius={'20px'}
                  type={'text'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  placeholder={prop.category}
                />
              </Center>
            </Box>
          </Stack>
        </GridItem>
        <GridItem>
          <Box
            boxSize="sm"
            border={'2px'}
            borderColor={'teal.500'}
            maxH={'300px'}
            maxW={'300px'}
          >
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
        <Button colorScheme="teal" size="lg" width={"100%"}>
          Save Changes!
        </Button>
        </GridItem>
        
      </Grid>
      <Center>
        <Divider mt={'4'} mb={'4'} w={'90%'} />
      </Center>
      <Box mt={2} orientation="vertical">
        <Text fontWeight={'bold'} ml={'4'} color={'teal.200'}>
          Description
        </Text>
        <Textarea w={'95%'} m={'4'} color={'white'}></Textarea>
      </Box>
    </Box>
  );
};

export default EditProduct;
