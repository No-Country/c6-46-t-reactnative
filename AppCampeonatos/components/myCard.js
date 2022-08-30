import styled from 'styled-components/native';

export const Card = styled.View`
  width: ${(props) => props.width || '90%'};
  background-color: white;
  border-radius: 20px;
  border: ${(props) => props.border} black;
  margin: 5px 5px;
  flex-flow: ${(props) => props.direction || 'column'} wrap;
  justify-content: center;
  align-items: center;
`;
