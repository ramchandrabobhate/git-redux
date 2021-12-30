import logo from './logo.svg';
import react from 'react';
import './App.css';
// import Forms from './Forms';
import Home from './Home'
import Hooksex from './hooksex'
import Forms from './Forms';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login'
import Homedata from './website/Homedata'
import Formdata from './userform'
import { Box, Button, Heading, VStack, Image, Text, AspectRatio, Badge, Container, Flex, Center, Square, Grid, GridItem, Wrap, WrapItem } from '@chakra-ui/react';

function App1() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }
    
  
    return (
      <Wrap spacing='30px'>
  <WrapItem>
    <Center w='180px' h='80px' bg='red.200'>
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='green.200'>
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='tomato'>
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='blue.200'>
      Box 4
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='180px' h='80px' bg='blackAlpha.500'>
      Box 5
    </Center>
  </WrapItem>
</Wrap>
        
    )
  
}

export default App1;
