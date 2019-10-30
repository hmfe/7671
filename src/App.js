import React from 'react';
import styled from 'styled-components';

import Button from './components/Button';
import Select from './components/SearchForm';


const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #f7f7f7;
  position: absolute;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 20px;
  min-width: 500px;
`;

/**
 * Main component.
 * @return {Object} Component.
 */
function App() {
  return (
    <Container>
      <Select/>
      <Button/>
    </Container>
  );
}

export default App;
