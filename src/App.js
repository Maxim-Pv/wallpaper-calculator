import React from 'react';
import {
  ChakraProvider,
  theme,
  Container,
} from '@chakra-ui/react';
import WallpaperCalculator from './components/WallpaperCalc';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md" minH="100vh" centerContent justifyContent="center">      
        <WallpaperCalculator />
      </Container>
    </ChakraProvider>
  );
}

export default App;
