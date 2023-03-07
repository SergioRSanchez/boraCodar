import { useState } from 'react'

import { ReactComponent as Exchange } from './assets/exchange.svg'


export function Challenge9() {
  const [ firstCoin, setFirstCoin ] = useState('1000')
  const [ secondCoin, setSecondCoin ] = useState('5148.20')

  const [ chooseFirstCoin, setChooseFirstCoin ] = useState('USD')
  const [ chooseSecondCoin, setChooseSecondCoin ] = useState('BRL')

  let currency = `${chooseFirstCoin}-${chooseSecondCoin}`
  let url = `https://economia.awesomeapi.com.br/last/${currency}`


  function calculate() {
    fetch(url).then(result => {
      return result.json()
    }).then(json => {
      const quotation = json[`${chooseFirstCoin}${chooseSecondCoin}`].ask
      setSecondCoin(parseFloat(quotation * firstCoin).toFixed(2))
    })
  }


  return (
    <div className='flex justify-center items-center h-screen bg-[#F8FAFC] font-["Inter"]'>
      <div className='bg-white rounded-2xl p-4 sm:px-20 sm:py-16 shadow-[0_4px_32px_0_rgba(0,0,0,0.15)]'>
        <h1 className='font-semibold sm:text-xl text-[#0F172A] mb-4'>
          Conversor de moedas
        </h1>
        
        <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-4'>

          <div className='flex rounded-lg border-[1px] border-[#94A3B8] p-4 w-[320px] justify-between'>
            <form >
              {
                chooseFirstCoin === 'USD'
                &&
                <span>$ &nbsp;</span>
              }
              {
                chooseFirstCoin === 'EUR'
                &&
                <span>€ &nbsp;</span>
              }
              {
                chooseFirstCoin === 'BRL'
                &&
                <span>R$ &nbsp;</span>
              }
              {
                chooseFirstCoin === 'GBP'
                &&
                <span>£ &nbsp;</span>
              }
              <input type="text" placeholder='1000' onChange={e => setFirstCoin(e.target.value)} className='w-[170px] focus:outline-none'/>
            </form>
            <form className='flex gap-2'>
              {
                chooseFirstCoin === 'USD'
                &&
                <img src="src/pages/challenge9/assets/usdFlag.png" alt="" />
              }
              {
                chooseFirstCoin === 'EUR'
                &&
                <img src="src/pages/challenge9/assets/eurFlag.png" alt="" />
              }
              {
                chooseFirstCoin === 'GBP'
                &&
                <img src="src/pages/challenge9/assets/gbpFlag.png" alt="" />
              }
              {
                chooseFirstCoin === 'BRL'
                &&
                <img src="src/pages/challenge9/assets/brlFlag.png" alt="" />
              }
              <select name="coinA" id="coinA" value={chooseFirstCoin} onChange={e => setChooseFirstCoin(e.target.value)} className='focus:outline-none' >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="BRL">BRL</option>
              </select>
            </form>
          </div>

          <button onClick={calculate}><Exchange /></button>

          <div className='flex rounded-lg border-[1px] border-[#94A3B8] p-4 justify-between w-[320px]'>
            <div className='flex'>
              {
                chooseSecondCoin === 'USD'
                &&
                <span>$ &nbsp;</span>
              }
              {
                chooseSecondCoin === 'EUR'
                &&
                <span>€ &nbsp;</span>
              }
              {
                chooseSecondCoin === 'BRL'
                &&
                <span>R$ &nbsp;</span>
              }
              {
                chooseSecondCoin === 'GBP'
                &&
                <span>£ &nbsp;</span>
              }
              <h2>{secondCoin}</h2>
            </div>
            <form className='flex gap-2'>
              {
                chooseSecondCoin === 'USD'
                &&
                <img src="src/pages/challenge9/assets/usdFlag.png" alt="" />
              }
              {
                chooseSecondCoin === 'EUR'
                &&
                <img src="src/pages/challenge9/assets/eurFlag.png" alt="" />
              }
              {
                chooseSecondCoin === 'GBP'
                &&
                <img src="src/pages/challenge9/assets/gbpFlag.png" alt="" />
              }
              {
                chooseSecondCoin === 'BRL'
                &&
                <img src="src/pages/challenge9/assets/brlFlag.png" alt="" />
              }
              <select name="coinB" id="coinB" value={chooseSecondCoin} onChange={e => setChooseSecondCoin(e.target.value)} className='focus:outline-none'>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="BRL">BRL</option>
              </select>
            </form>
          </div>

        </div>

        <h1 className='font-semibold sm:text-xl text-[#0F172A] mb-4 mt-8'>
          Taxa de Câmbio
        </h1>
        <img srcSet="src/pages/challenge9/assets/Chart.png 480w, src/pages/challenge9/assets/largeChart.png 1024w" sizes="(max-width: 600px) 480px, 1024px"/>

      </div>
    </div>
  )
}