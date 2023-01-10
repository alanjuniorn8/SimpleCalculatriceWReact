import styled from 'styled-components';

export const InputContainer = styled.div`
  align-items: center;
  display: flex;
  height: 20%;
  justify-content: center;
  width: 100%;

  input {
    background-color: #000;
    border: 1px solid #3486eb;
    color: #3486eb;
    font: 100px Arial;
    height: calc(95% - 8px);
    margin: 4px;
    padding: 4px;
    text-align: right;
    width: calc(98% - 4px);
  }
`