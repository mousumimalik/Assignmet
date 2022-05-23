import react, { useState } from 'react';


function App() {

  const [calculations, setCalculations] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '.'];


    // PUSHING DIGITS 1 TO 0
    const calculatorDigits = () => {
      const digits = [];

      for(let i = 1; i < 10; i++){
        digits.push( <button onClick={ () => updateCalculation(i.toString()) } key={ i }> { i } </button> );
      }
      return digits;
    }


    // UPDATE CALCULATION 
    const updateCalculation = value => {
      if(operators.includes(value) && calculations === '' || operators.includes(value) && operators.includes(calculations.slice(-1))) {
        return;
      }

      setCalculations(calculations + value);

      if(!operators.includes(value)) {
        setResult(eval(calculations + value).toString());
      }
    }


    // EVALUATE FINAL CALCULATIONS AND RETURN 
    const calculate = () => {
      setCalculations(eval(calculations).toString());
    }


    // DELETEION 
    const deleteLast = () => {
      if(calculations == '') {
        return;
      }

      const value = calculations.slice(0, -1);
      setCalculations(value);
    }
  

  return (
    <div className="App">
        <div className="calculator">
          <div className="calculator-inner-view">
            <div className="calculator-display">
                { result ? <span>({ result })</span> : '' } {calculations || '0'}
            </div>
            <div className="calculator-digits">
              { calculatorDigits() }
              <button onClick={ () => updateCalculation('0') }> 0 </button>
              <button onClick={ () => updateCalculation('.') }> . </button>
              <button onClick={ calculate }> = </button>
            </div>
          </div>
          <div className="calculator-side-view">
            <div className="calculator-operators">
              <button onClick={ deleteLast }> DEL </button>
              <button onClick={ () => updateCalculation('+') }> + </button>
              <button onClick={ () => updateCalculation('-') }> - </button>
              <button onClick={ () => updateCalculation('*') }> * </button>
              <button onClick={ () => updateCalculation('/') }> / </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
