import styled from 'styled-components/native';

export const Card = styled.View`
  width: ${(props) => props.width || '90%'};
  background-color: white;
  border-radius: 20px;
  border: ${(props) => props.border} black;
  margin-vertical: 10px;
  padding-vertical: 5px;
  padding-horizontal: ${(props) => props.paddingH || '0px'};
  flex-flow: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justifyContent || 'space-evenly'};
  align-items: ${(props) => props.alignItems || 'center'};
`;
