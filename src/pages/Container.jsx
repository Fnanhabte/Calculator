import React from "react";
import { useState } from "react";


export let Container = () => {

   ///start

   let [calc, setCalc] = useState('');
   let [darkMode, setDarkMode] = useState(true)


   const ops = ['/', '*' ,'+' , '-', '.', '%'];

   const updateCalc = value => {

      if( (ops.includes(value)) && (calc === '' || ops.includes(value)) && ops.includes(calc.slice(1))){
         return;
      }

       setCalc(calc + value)

   }

   const calculate = () => {
      setCalc(eval(calc).toString())
   }

   const deletlast = () => {
      if(calc === '') {return;}

      const value = calc.slice(0,0);
      setCalc(value)
   }

   let tunrOn = () => {

      setDarkMode(!darkMode)
   }

   return(
         <>
    <div className="container" style={{background: darkMode ? "" : "#323232"}}>
    <div className="calc">
    <div className="calscreen "  style={{background: darkMode ? "" : "wheat"}}>
      <span className="light">
         <span className={`switch ${darkMode ? '' : 'on'}`}onClick={tunrOn}></span>
      </span>
    <h1 className="numberDisplay"  style={{color: darkMode ? "" : "#000"}}>{calc || '0'}</h1>

      </div>

      <div className="numbers" key={'ID-1'} text={'hellow'}>
          <button className="clear"onClick={deletlast}>AC</button>
          <button className="plus-minus" onClick={() => updateCalc('-')}>+/-</button>
          <button onClick={()=> updateCalc('%')}>% </button>
          <button className="division" onClick={() => updateCalc('/')}>-</button>
          <button onClick={()=> updateCalc('7')}>7</button>
         <button onClick={()=> updateCalc('8')}>8</button>
         <button onClick={()=> updateCalc('9')}>9</button>
         <button className="subtracting" onClick={() => updateCalc('*')}>-</button>
         <button onClick={()=> updateCalc('4')}>4</button>
         <button onClick={()=> updateCalc('5')}>5</button>
         <button onClick={()=> updateCalc('6')}>6</button>
         <button className="minus" onClick={() => updateCalc('-')}>-</button>
         <button onClick={()=> updateCalc('1')}>1</button>
         <button onClick={()=> updateCalc('2')}>2</button>
         <button onClick={()=> updateCalc('3')}>3</button>
         <button className="plus" onClick={() => updateCalc('+')}>+</button>
         <button className="zero" onClick={() => updateCalc('0')}>0</button>
         <button onClick={() => updateCalc('.')}>.</button>
         <button className="equal"  onClick={calculate}>=</button>



      </div>
      </div>

      </div>
         </>


   )


}