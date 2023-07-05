import {useState} from 'react';
function App() {
  const [ calc,setCalc]=useState("");
  const [result,setResult]=useState("");
  const ops=['/', '*', '+', '-', '.'];
  const createDigits=()=>
  {
    const digits=[];
    for(let i=1;i<10;i++)
    {
      digits.push(<button key={i} onClick={()=>updateCalc(i.toString())}>
        {i}
        </button>);
    }
    return digits;
  }
  const updateCalc= value=>
  {
    if(ops.includes(value) && calc ===''|| ops.includes(value) && ops.includes(calc.slice(-1)))
    return;
    else
    setCalc(calc+value);
    if(!ops.includes(value))
    {
      setResult(eval(calc+value).toString());
    }
  }
  const calculate=()=>{
    setCalc(eval((calc).toString()));

  }
  const deleteLast=()=>
  {
    if(calc=='')
    return;
    const value=calc.slice(0,3);
    console.log(value);
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <smal>({result})</smal> : ''}&nbsp;{calc|| '0'}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc("/")}>/</button>
          <button onClick={()=>updateCalc("*")}>*</button>
          <button onClick={()=>updateCalc("+")}>+</button>
          <button onClick={()=>updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={()=> updateCalc("0")}>0</button>
          <button onClick={()=> updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
