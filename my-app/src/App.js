import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import EditProduct from './components/EditProduct';
import ProductItem from './components/ProductItem';
import Product from './components/Product';
import Productphoto from './components/Productphoto';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <EditProduct/>
    </ChakraProvider>
  );
}

export default App;
