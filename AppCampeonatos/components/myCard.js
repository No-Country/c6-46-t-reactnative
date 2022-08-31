import styled from 'styled-components/native';

export const Card = styled.View`
  width: ${(props) => props.width || '90%'};
  background-color: white;
  border-radius: 20px;
  border: ${(props) => props.border} black;
  margin-vertical: 5px;
  flex-flow: ${(props) => props.direction || 'column'};
  justify-content: space-evenly;
  align-items: center;
`;
