import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => props.color};
`;
Title.displayName = 'Title';

interface Props {
  name: string
  color: string;
}

const App: React.SFC<Props> = ({name, color}) => <Title color={color}>{name}</Title>;

export default App;
