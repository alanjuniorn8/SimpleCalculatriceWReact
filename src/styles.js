import styled from 'styled-components';

export const Container = styled.div`
    align-items: center;    
    background-color: #000;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`

export const Grid = styled.div` 
    align-items: space-evenly;
    display: flex;
    flex-direction : row;
    flex-wrap: wrap;
    height: 80%;
    justify-content: space-evenly;
    width: 100vw;
`