import React from 'react';
import './App.css';
import MainDisplay from './components/layouts/MainDisplay';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

function App() {
  return (
    <>
      <ThemeProvider>
        <CSSReset />
        <MainDisplay />
      </ThemeProvider>
    </>
  );
}

export default App;
