import { useState } from 'react'

import { Chart } from "react-google-charts";

import { ReactComponent as Exchange } from './assets/exchange.svg'

import usdFlag from './assets/usdFlag.png'
import brlFlag from './assets/brlFlag.png'
import eurFlag from './assets/eurFlag.png'
import gbpFlag from './assets/gbpFlag.png'


export function Challenge9() {
  const [ firstCoin, setFirstCoin ] = useState('0')
  const [ secondCoin, setSecondCoin ] = useState('0')

  const [ chooseFirstCoin, setChooseFirstCoin ] = useState('USD')
  const [ chooseSecondCoin, setChooseSecondCoin ] = useState('BRL')

  let currency = `${chooseFirstCoin}-${chooseSecondCoin}`
  let url = `https://economia.awesomeapi.com.br/last/${currency}`


  //  DIA DE HOJE
  let data = new Date();
  let dia = String(data.getDate()).padStart(2, '0');
  let mes = String(data.getMonth() + 1).padStart(2, '0');
  let ano = data.getFullYear();
  let dataAtual = ano + mes + dia;
  let urlSpecificAtual = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${dataAtual}&end_date=${dataAtual}`


  //  1 DIA ATRÁS
  let oneDayAgo =  new Date(data.getTime() - 1 * (1000 * 60 * 60 * 24))
  let diaOneDayAgo = String(oneDayAgo.getDate()).padStart(2, '0');
  let mesOneDayAgo = String(oneDayAgo.getMonth() + 1).padStart(2, '0');
  let anoOneDayAgo = oneDayAgo.getFullYear();
  let umDia = anoOneDayAgo + mesOneDayAgo + diaOneDayAgo
  let urlSpecificUmDia = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${umDia}&end_date=${umDia}`


  //  2 DIAS
  let twoDaysAgo = new Date(data.getTime() - 2 * (1000 * 60 * 60 * 24))
  let diaTwoDaysAgo = String(twoDaysAgo.getDate()).padStart(2, '0');
  let mesTwoDaysAgo = String(twoDaysAgo.getMonth() + 1).padStart(2, '0');
  let anoTwoDaysAgo = twoDaysAgo.getFullYear();
  let doisDias = anoTwoDaysAgo + mesTwoDaysAgo + diaTwoDaysAgo
  let urlSpecificDoisDias = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${doisDias}&end_date=${doisDias}`


  //  3 DIAS
  let threeDaysAgo = new Date(data.getTime() - 3 * (1000 * 60 * 60 * 24))
  let diaThreeDaysAgo = String(threeDaysAgo.getDate()).padStart(2, '0');
  let mesThreeDaysAgo = String(threeDaysAgo.getMonth() + 1).padStart(2, '0');
  let anoThreeDaysAgo = threeDaysAgo.getFullYear();
  let tresDias = anoThreeDaysAgo + mesThreeDaysAgo + diaThreeDaysAgo
  let urlSpecificTresDias = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${tresDias}&end_date=${tresDias}`


  //  4 DIAS
  let fourDaysAgo = new Date(data.getTime() - 4 * (1000 * 60 * 60 * 24))
  let diaFourDaysAgo = String(fourDaysAgo.getDate()).padStart(2, '0');
  let mesFourDaysAgo = String(fourDaysAgo.getMonth() + 1).padStart(2, '0');
  let anoFourDaysAgo = fourDaysAgo.getFullYear();
  let quatroDias = anoFourDaysAgo + mesFourDaysAgo + diaFourDaysAgo
  let urlSpecificQuatroDias = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${quatroDias}&end_date=${quatroDias}`
  
  
  //  5 DIAS ATRÁS
  let fiveDaysAgo = new Date(data.getTime() - 5 * (1000 * 60 * 60 * 24))
  let diaFiveDaysAgo = String(fiveDaysAgo.getDate()).padStart(2, '0');
  let mesFiveDaysAgo = String(fiveDaysAgo.getMonth() + 1).padStart(2, '0');
  let anoFiveDaysAgo = fiveDaysAgo.getFullYear();
  let cincoDias = anoFiveDaysAgo + mesFiveDaysAgo + diaFiveDaysAgo
  let urlSpecificCincoDias = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${cincoDias}&end_date=${cincoDias}`
  
  
  //  1 MÊS ATRÁS
  let oneMonthAgo = new Date(data.getTime() - 29 * (1000 * 60 * 60 * 24))
  let diaOneMonthAgo = String(oneMonthAgo.getDate()).padStart(2, '0');
  let mesOneMonthAgo = String(oneMonthAgo.getMonth() + 1).padStart(2, '0');
  let anoOneMonthAgo = oneMonthAgo.getFullYear();
  let umMes = anoOneMonthAgo + mesOneMonthAgo + diaOneMonthAgo
  let urlSpecificUmMes = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${umMes}&end_date=${umMes}`


  //  1 ANO ATRÁS
  let oneYearAgo = new Date(data.getTime() - 365 * (1000 * 60 * 60 * 24))
  let diaOneYearAgo = String(oneYearAgo.getDate()).padStart(2, '0');
  let mesOneYearAgo = String(oneYearAgo.getMonth() + 1).padStart(2, '0');
  let anoOneYearAgo = oneYearAgo.getFullYear();
  let umAno = anoOneYearAgo + mesOneYearAgo + diaOneYearAgo
  let urlSpecificUmAno = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${umAno}&end_date=${umAno}`
  

  //  2 ANOS ATRÁS
  let twoYearAgo = new Date(data.getTime() - 547 * (1000 * 60 * 60 * 24))
  let diaTwoYearAgo = String(twoYearAgo.getDate()).padStart(2, '0');
  let mesTwoYearAgo = String(twoYearAgo.getMonth() + 1).padStart(2, '0');
  let anoTwoYearAgo = twoYearAgo.getFullYear();
  let doisAnos = anoTwoYearAgo + mesTwoYearAgo + diaTwoYearAgo
  let urlSpecificDoisAnos = `https://economia.awesomeapi.com.br/json/daily/${currency}/?start_date=${doisAnos}&end_date=${doisAnos}`



  const [ currencyToday, setCurrencyToday ] = useState(0)
  const [ currencyADayAgo, setCurrencyADayAgo ] = useState(0)
  const [ currencyTwoDaysAgo, setCurrencyTwoDaysAgo ] = useState(0)
  const [ currencyThreeDaysAgo, setCurrencyThreeDaysAgo ] = useState(0)
  const [ currencyFourDaysAgo, setCurrencyFourDaysAgo ] = useState(0)
  const [ currencyFiveDaysAgo, setCurrencyFiveDaysAgo ] = useState(0)
  const [ currencyAMonthAgo, setCurrencyAMonthAgo ] = useState(0)
  const [ currencyAYearAgo, setCurrencyAYearAgo ] = useState(0)
  const [ currencyTwoYearAgo, setCurrencyTwoYearAgo ] = useState(0)

  const dataBase = {
    days: [ '5D', '4D', '3D', '2D', '1D', 'HJ' ],
    currency: [ {currencyFiveDaysAgo}, {currencyFourDaysAgo}, {currencyThreeDaysAgo}, {currencyTwoDaysAgo}, {currencyADayAgo}, {currencyToday} ]
  }


  function calculate() {
    fetch(url).then(result => {
      return result.json()
    }).then(json => {
      const quotation = json[`${chooseFirstCoin}${chooseSecondCoin}`].ask
      setSecondCoin(parseFloat(quotation * firstCoin).toFixed(2))
      setCurrencyToday(quotation)
    })

    fetch(urlSpecificUmDia).then(result => {
      return result.json()
    }).then(json => {
      const quotationUmDia = json[0].ask
      setCurrencyADayAgo(quotationUmDia)
    })
    
    fetch(urlSpecificDoisDias).then(result => {
      return result.json()
    }).then(json => {
      const quotationDoisDias = json[0].ask
      setCurrencyTwoDaysAgo(quotationDoisDias)
    })
    
    fetch(urlSpecificTresDias).then(result => {
      return result.json()
    }).then(json => {
      const quotationTresDias = json[0].ask
      setCurrencyThreeDaysAgo(quotationTresDias)
    })
    
    fetch(urlSpecificQuatroDias).then(result => {
      return result.json()
    }).then(json => {
      const quotationQuatroDias = json[0].ask
      setCurrencyFourDaysAgo(quotationQuatroDias)
    })

    fetch(urlSpecificCincoDias).then(result => {
      return result.json()
    }).then(json => {
      const quotationCincoDias = json[0].ask
      setCurrencyFiveDaysAgo(quotationCincoDias)
    })

    fetch(urlSpecificUmMes).then(result => {
      return result.json()
    }).then(json => {
      const quotationUmMes = json[0].ask
      setCurrencyAMonthAgo(quotationUmMes)
    })

    fetch(urlSpecificUmAno).then(result => {
      return result.json()
    }).then(json => {
      const quotationUmAno = json[0].ask
      setCurrencyAYearAgo(quotationUmAno)
    })

    fetch(urlSpecificDoisAnos).then(result => {
      return result.json()
    }).then(json => {
      const quotationDoisAnos = json[0].ask
      setCurrencyTwoYearAgo(quotationDoisAnos)
    })
  }
  

  return (
    <div className='flex justify-center items-center h-screen bg-[#F8FAFC] font-["Inter"]'>
      <div className='bg-white rounded-2xl px-4 pt-4 sm:px-20 sm:pt-16 shadow-[0_4px_32px_0_rgba(0,0,0,0.15)]'>
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
              <input type="text" placeholder='0' onChange={e => setFirstCoin(e.target.value)} className='w-[170px] focus:outline-none'/>
            </form>
            <form className='flex gap-2'>
              {
                chooseFirstCoin === 'USD'
                &&
                <img src={usdFlag} alt="" />
              }
              {
                chooseFirstCoin === 'EUR'
                &&
                <img src={eurFlag} alt="" />
              }
              {
                chooseFirstCoin === 'GBP'
                &&
                <img src={gbpFlag} alt="" />
              }
              {
                chooseFirstCoin === 'BRL'
                &&
                <img src={brlFlag} alt="" />
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
                <img src={usdFlag} alt="" />
              }
              {
                chooseSecondCoin === 'EUR'
                &&
                <img src={eurFlag} alt="" />
              }
              {
                chooseSecondCoin === 'GBP'
                &&
                <img src={gbpFlag} alt="" />
              }
              {
                chooseSecondCoin === 'BRL'
                &&
                <img src={brlFlag} alt="" />
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

        <div>
          <Chart
            chartType="LineChart"
            data={
              [
                ["Day", "Currency"],
                [dataBase.days[0], Number(dataBase.currency[0].currencyFiveDaysAgo)],
                [dataBase.days[1], Number(dataBase.currency[1].currencyFourDaysAgo)],
                [dataBase.days[2], Number(dataBase.currency[2].currencyThreeDaysAgo)],
                [dataBase.days[3], Number(dataBase.currency[3].currencyTwoDaysAgo)],
                [dataBase.days[4], Number(dataBase.currency[4].currencyADayAgo)],
                [dataBase.days[5], Number(dataBase.currency[5].currencyToday)],
              ]
            }
            graphID="ScatterChart"
            width="100%"
            height="356px"
            legendToggle
          />
        </div>

      </div>
    </div>
  )
}