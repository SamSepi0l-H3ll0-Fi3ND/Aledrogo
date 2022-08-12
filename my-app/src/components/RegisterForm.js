import React from 'react';
import { Box, Input, Stack, Button, Heading } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
const LoginForm = () => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      alignItems={'center'}
      overflow="hidden"
    >
      <Stack spacing={5}>
        <Heading mt={"4"} as='h3'textAlign={'center'} size='lg'> Jump into our website</Heading>
        <Box color='teal.500'>Name</Box>
        <Input
        type={"text"}
          textAlign={'center'}
          _focus={{
            bg: 'teal.500',
          }}
          variant="flushed"
          placeholder="Name"
        />
        <Box color='teal.500'>Username</Box>
        <Input
        type={"email"}
          textAlign={'center'}
          _focus={{
            bg: 'teal.500',
          }}
          variant="flushed"
          placeholder="Username"
        />
        <Box color="teal.500">Password</Box>
        <Input
            type={"password"}
          textAlign={'center'}
          _focus={{
            bg: 'teal.500',
          }}
          variant="flushed"
          placeholder="Password"
        />
        <Flex>
          <Spacer />
          <Button m={'4'} colorScheme="teal" variant="outline">
            Register
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default LoginForm;
