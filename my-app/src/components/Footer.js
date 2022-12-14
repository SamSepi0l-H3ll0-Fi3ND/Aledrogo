import { Box, Flex, Text, Spacer, Center } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, InfoIcon } from '@chakra-ui/icons';
const Footer = () => {
  return (
    <Box borderRadius={'lg'} borderWidth={1} h={'30vh'} bg={'gray.700'} pt={6}>
      <Flex>
        <Spacer />
        <Box>
          <Text fontSize={'2xl'}>Marketplace</Text>
          <Text> Our Products</Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize={'2xl'}>Any questions?</Text>
          <Text>Contact us! </Text>
          <Text>Click this link to connet to our seller</Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize={'2xl'}>Localization</Text>
          <Text fontSize={'sm'}>
            <InfoIcon />
            Here we are!
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize={'2xl'}>Social Media</Text>
          <Text>Twitter</Text>
          <Text>Facebook</Text>
          <Text>Instagram</Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontSize={'2xl'}>Contact</Text>
          <Text fontSize={'xl'}>
            {' '}
            <PhoneIcon /> 34 377 00 00
          </Text>
          <Text fontSize={'sm'}>pon. - pt. 8:00 - 21:00</Text>
          <Text fontSize={'sm'}>sob. - niedz. 8:00 - 19:00 </Text>
          <Text fontSize={'sm'}>
            <EmailIcon mr={1} />
            alledrogo@alledrogo.pl
          </Text>
        </Box>

        <Spacer />
      </Flex>
    </Box>
  );
};

export default Footer;
