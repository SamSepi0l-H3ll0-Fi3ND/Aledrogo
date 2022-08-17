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
  VStack,
} from '@chakra-ui/react';

import { useContext } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { EditContext } from '../editContex';
const { v4: uuid } = require('uuid');

const EditProduct = () => {
  const prop = {
    name: ' boAt Rockerz 333',
    price: '1,900.00',
    count: '55',
    desc: 'Change your description here',
    category: 'Headphones',
  };

  const {
    price,
    name,
    detalis,
    photo,
    category,
    addInput,
    count,
    newCategory,
    setAddInput,
    setCategory,
    setPhopto,
    setDetalis,
    setName,
    setPrice,
    setCount,
    addCategory,
    setNewCategory,
    deleteCategory,
    send,
    validPhoto,
    allinone,
  } = useContext(EditContext);

  const listOfCategories = category.map(category => (
    <Button
      mt={1}
      borderRadius={'20px'}
      type={'disabled'}
      textAlign={'center'}
      _focus={{
        bg: 'teal.500',
      }}
      variant="flushed"
      value={category}
      onClick={e => deleteCategory(e)}
      id={uuid()}
      key={uuid()}
    >
      {category}
    </Button>
  ));

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
                  borderRadius={'20px'}
                  type={'text'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                  borderRadius={'20px'}
                  type={'number'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  placeholder={price}
                  value={price}
                  onChange={e => setPrice(e.target.value)}
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
                  borderRadius={'20px'}
                  type={'number'}
                  textAlign={'center'}
                  _focus={{
                    bg: 'teal.500',
                  }}
                  variant="flushed"
                  placeholder={count}
                  value={count}
                  onChange={e => setCount(e.target.value)}
                />
              </Center>
            </Box>
          </Stack>
        </GridItem>
        <GridItem maxH={'300px'} maxW={'300px'}>
          <Box
            id="background"
            boxSize="sm"
            border={'2px'}
            borderColor={'teal.500'}
            maxH={'300px'}
            maxW={'300px'}
          >
            <Input
              id="input"
              w={'100%'}
              h={'100%'}
              name="file"
              type="file"
              opacity={'0'}
              onChange={e => {
                validPhoto(e.target.files[0]);
              }}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Divider bg={'teal.500'} ml={'2'} maxWidth={'200px'} />
          <Stack direction="row" h="80px" pl={'2'} mt={'2'} mb={'6'}>
            <Divider orientation="vertical" bg={'teal.500'} />
            <Box color="teal.200">
              <Text>Category</Text>
              <button
                onClick={() => {
                  send();
                }}
              >
                TESTOWE WYSYŁANIE
              </button>
              <Center>
                {listOfCategories}
                <Text
                  ml={2}
                  onClick={() => {
                    setAddInput(!addInput);
                  }}
                >
                  Dodaj Kategorie
                </Text>
                {addInput && (
                  <>
                    <Input
                      mt={1}
                      ml={1}
                      mr={1}
                      maxWidth={'125px'}
                      borderRadius={'20px'}
                      type={'text'}
                      textAlign={'center'}
                      _focus={{
                        bg: 'teal.500',
                      }}
                      variant="flushed"
                      value={newCategory}
                      onChange={e => {
                        setNewCategory(e.target.value);
                      }}
                    />
                    <Text
                      onClick={() => {
                        addCategory();
                      }}
                    >
                      Dodaj
                    </Text>
                  </>
                )}
              </Center>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
      <Center>
        <Divider mt={'4'} mb={'4'} w={'90%'} />
      </Center>
      <Box mt={2} orientation="vertical">
        <Text fontWeight={'bold'} ml={'4'} color={'teal.200'}>
          Description
        </Text>
        <Textarea
          w={'95%'}
          m={'4'}
          color={'black'}
          value={detalis}
          onChange={e => {
            setDetalis(e.target.value);
          }}
        ></Textarea>
        <Button
          colorScheme="teal"
          size="lg"
          width={'100%'}
          mb={4}
          onClick={() => allinone()}
        >
          Save Changes!
        </Button>
      </Box>
    </Box>
  );
};

export default EditProduct;
