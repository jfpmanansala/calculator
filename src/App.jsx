import { useState } from 'react';
import './App.css'

function CalcDisplay({dispValue}) {
  return (
    <div className='Display'>
      {dispValue}
    </div>
  );
}

function CalcButton({buttonLabel, buttonClassName = 'Button', onCLick}) {
  return (
    <button className={buttonClassName} onClick={onCLick}>
      {buttonLabel} 
    </button>
  );
}

function App() {
  const[disp, setDisp] = useState(0);

  const buttonClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  }

  return (
    <div className='App'>
      <div className='Header'>Calculator of Janna Freesha P. Manansala - WMD3A</div>
      <div className='Calculator'> 
        <CalcDisplay dispValue={disp}/>
          <div className='Keypad'>
            <CalcButton buttonLabel={7} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={8} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={9} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={"÷"} onCLick={buttonClickHandler}/>

            <CalcButton buttonLabel={4} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={5} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={6} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={"x"} onCLick={buttonClickHandler}/>

            <CalcButton buttonLabel={1} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={2} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={3} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={'-'} onCLick={buttonClickHandler}/>

            <CalcButton buttonLabel={"CLR"} buttonClassName="ClrButton" onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={0} onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={"="} buttonClassName="EqualButton" onCLick={buttonClickHandler}/>
            <CalcButton buttonLabel={"+"} onCLick={buttonClickHandler}/>

          </div>
      </div>
    </div>
  )
}

export default App
