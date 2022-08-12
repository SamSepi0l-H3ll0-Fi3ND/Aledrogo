import React from 'react';
import { Button, Input, Box, Heading, Text } from '@chakra-ui/react';
import { Stack, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import {
  useNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
const Product = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Picutre of electronics',
    category: 'Headphones',
    title: 'boAt Rockerz 333',
    details:
      'When your taste in music is so unique, why should your audio wear be any different? Speak your unique style with Rockerz 333 - a bold and powerful wireless earphones for the part of you that wants more. More of sound, more of style, and more of power. Immerse into your jam with boAt Signature Sound and 30 HRS of non stop playback. Let nothing limit your hustle with Dual Pairing that lets you connect two devices at once. Don’t hold back, choose your vibe with Rockerz 333.',
    formattedPrice: '$1,900.00',
    reviewCount: 10,
    rating: 4,
  };

  function HookUsage() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 99,
      });
      

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    return (
      <Box maxW="3xl" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {property.category}
        </Box>
        <Heading size="lg">{property.title}</Heading>
        <Box display="flex" mt="2" ml="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            ({property.reviewCount})
          </Box>
        </Box>
        <Text as="em" fontSize="sm">
          {' '}
          Details:
        </Text>
        <Text ml="2" maxW="650px">
          {property.details}{' '}
        </Text>
        <Box m={4} color="teal.500" fontSize="xl" fontWeight="bold">
          {property.formattedPrice}
        </Box>
        <Box as="span" fontSize="sm">
          <HStack maxW="216px">
          <Box fontWeight="bold" >Quantity:</Box>
            <Button color="red" {...dec}>
              -
            </Button>
            <Input {...input} />
            <Button color="green" {...inc}>
              +
            </Button>
          </HStack>
        </Box>
        <Stack direction="row" ml="2" m={6} spacing={4} align="center">
          <Button _hover={{ transform: 'scale(1.2)'}} colorScheme="teal" variant="outline">
            Add to cart
          </Button>
          <Button _hover={{ transform: 'scale(1.2)'}} colorScheme="teal" variant="solid">
            Buy now!
          </Button>
        </Stack>
      </Box>
    );
  }
  return HookUsage();
};

export default Product;
