import React, { FC } from 'react';
import styled from 'styled-components';

const App: FC<{ title: string }> = ({ title }) => <Title>{title}</Title>;

export default App;

const Title = styled.h1`
  color: aqua;
  font-size: 2rem;
`;
