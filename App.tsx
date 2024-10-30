import React from 'react';
import StyledButton from './GradientButton';
import { FaRegHeart } from 'react-icons/fa';//react icon for "liking" or "bookmarking"
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Styled Components: Various Button Types</h1>
      <ButtonGroup>
        <StyledButton label="Primary Gradient" gradientFrom="#4f46e5" gradientTo="#ec4899" size="medium" variant="gradient" />
        <StyledButton label="Outline Button" size="medium" variant="outline" />
        <StyledButton label="Glass Button" size="medium" variant="glass" />
        <StyledButton label="Animated Button" size="medium" variant="animated" />
        <StyledButton icon={<FaRegHeart />} size="medium" variant="icon" />
      </ButtonGroup>
    </AppContainer>
  );
};

export default App;
