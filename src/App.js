import { Container, Grid } from './styles';
import { useState } from  'react';

import Input from './components/Input';
import Button from './components/Button';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => setCurrentNumber('0');
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev == '0' ? '' : prev}${number}`)
  }
  const handleEquals = () =>{
    if(firstNumber != '0' && operation != '' && currentNumber != '0'){
      switch(operation){
        case '+':
          setCurrentNumber(String(
            Number(firstNumber) + Number(currentNumber)
          ));
          break;
        case '-':
          setCurrentNumber(String(
            Number(firstNumber) - Number(currentNumber)
          ));
          break;
        case '/':
          setCurrentNumber(String(
            Number(firstNumber) / Number(currentNumber)
          ));
          break;
        case '*':
          setCurrentNumber(String(
            Number(firstNumber) * Number(currentNumber)
          ));
          break;
        default:
          break;
      }
      setFirstNumber('0');
      setOperation('');
    }
  }

const handleCalc = (operation) => {

  if(firstNumber === '0'){
    setFirstNumber(currentNumber);
    setOperation(operation);
    handleOnClear();
  } else {
    handleEquals();
  }
  
}

  return (
    <Container>
      <Input value={currentNumber}/>
      <Grid>
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="/" onClick={() => handleCalc('/')}/>
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="*" onClick={() => handleCalc('*')}/>        
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="-" onClick={() => handleCalc('-')}/>
        <Button label="C" onClick={handleOnClear}/>
        <Button label="0" onClick={() => handleAddNumber('0')}/>
        <Button label="=" onClick={handleEquals}/>
        <Button label="+" onClick={() => handleCalc('+')}/>
      </Grid>
    </Container>
  );
}

export default App;
