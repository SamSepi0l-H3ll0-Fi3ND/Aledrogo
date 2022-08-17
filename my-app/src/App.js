import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import ProductItem from './components/ProductItem';
import Product from './components/Product';
import Productphoto from './components/Productphoto';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Chart from './components/Chart';
import EditProfile from './components/EditProfile';
import Review from './components/Review';
import Summery from './components/Summery';
import EditProduct from './components/EditProduct';
import { EditContext } from './editContex';
import { ProductContextProvider } from './editContex';
import HotShot from './components/HotShot';
function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <ProductContextProvider>
        <EditProduct />
      </ProductContextProvider> */}
      <HotShot />
    </ChakraProvider>
  );
}

export default App;
