import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: #000;
  border: 1px solid #3486eb;
  color: #3486eb;
  font: 36px Arial;
  height: 24%;
  width: 24%;

  &:hover {
    box-shadow: rgba(50, 50, 90) 0px 10px 36px 0px, rgba(50, 50, 90) 0px 0px 0px 1px;
  }

  &:active {
    box-shadow: rgba(50, 50, 93) 0px 30px 60px -12px inset, rgba(50, 50, 93) 0px 18px 36px -18px inset;
  }
`