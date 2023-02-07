import { useState } from 'react';
import './css/main.css';

export function Challenge5 () {
  const [ display, setDisplay ] = useState(0)
  const [ firstNumber, setFirstNumber ] = useState(0)
  const [ operator, setOperator ] = useState()

  function inputNumber(e) {
    if (display === 0) {
      setDisplay(e.target.value)
    } else {
      setDisplay(display + e.target.value)
    }
  }

  function clear(e) {
    setDisplay(0)
    setFirstNumber(0)
    setOperator()
  }

  function percentage(e) {
    setDisplay(display/100)
  }

  function changeSign(e) {
    if (display >= 0) {
      setDisplay(-display)
    } else {
      setDisplay(-display)
    }
  }

  function operatorHandler(e) {
    var operatorSign = e.target.value
    setOperator(operatorSign)
    setFirstNumber(display)
    setDisplay(0)
    
  }

  function calculate() {
    if (operator === '+') {
      setDisplay(parseFloat(firstNumber) + parseFloat(display))
    } else if (operator === '-') {
      setDisplay(parseFloat(firstNumber) - parseFloat(display))
    } else if (operator === '/') {
      setDisplay(parseFloat(firstNumber) / parseFloat(display))
    } else {
      setDisplay(parseFloat(firstNumber) * parseFloat(display))
    }
  }

  return (
    <div id='calculator' className='flex flex-col bg-[#2D2A37] p-8 max-w-[356px] rounded-[48px]'>
      {
        operator ?
        <div className='text-[#6B6B6B] text-xl flex justify-end mb-2 mt-5'>{firstNumber}{operator}{display}</div>
        :
        <div className='text-[#6B6B6B] text-xl flex justify-end mb-2 mt-5'>{firstNumber}+{display}</div>
      }

      <div className='text-4xl flex gap-1'>
        <div className='text-[#6B6B6B]'>=</div>
        <div className='text-[#EBEBEB] mb-[26px]'>{display}</div>
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex gap-3'>
          <button className='text-2xl text-[#975DFA] bg-[#2D2A37] w-16 h-16 rounded-full'>CE</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' onClick={clear}>C</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' onClick={percentage}>%</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#462878] w-16 h-16 rounded-full' value={'/'} onClick={operatorHandler}>/</button>
        </div>

        <div className='flex gap-3'>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={7} onClick={inputNumber}>7</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={8} onClick={inputNumber}>8</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={9} onClick={inputNumber}>9</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#462878] w-16 h-16 rounded-full'value={'*'} onClick={operatorHandler}>x</button>
        </div>
        
        <div className='flex gap-3'>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={4} onClick={inputNumber}>4</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={5} onClick={inputNumber}>5</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={6} onClick={inputNumber}>6</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#462878] w-16 h-16 rounded-full' value={'-'} onClick={operatorHandler}>-</button>
        </div>
        
        <div className='flex gap-3'>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={1} onClick={inputNumber}>1</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={2} onClick={inputNumber}>2</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={3} onClick={inputNumber}>3</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#462878] w-16 h-16 rounded-full' value={'+'} onClick={operatorHandler}>+</button>
        </div>
        
        <div className='flex gap-3'>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' onClick={changeSign}>+/-</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={0} onClick={inputNumber}>0</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#2D2A37] w-16 h-16 rounded-full' value={'.'} onClick={inputNumber}>,</button>
          <button className='text-2xl text-[#EBEBEB] bg-[#7F45E2] w-16 h-16 rounded-full' onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}