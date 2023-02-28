import { useState } from 'react'


import { ReactComponent as Smile } from './assets/smile.svg'
import { ReactComponent as Expected } from './assets/expected.svg'
import { ReactComponent as SalesEllipse } from './assets/salesEllipse.svg'
import { ReactComponent as GoalEllipse } from './assets/goalEllipse.svg'
import { ReactComponent as UpPolygon } from './assets/upPolygon.svg'
import { ReactComponent as DownPolygon } from './assets/downPolygon.svg'



export function NetPromoterScore() {
  return (
    <div className='bg-[#363447] flex flex-col gap-4 font-["Inter"] px-12 py-7 w-[296px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
      <h1 className='text-white text-2xl font-semibold text-center'>NPS geral</h1>
      <div className='flex flex-col items-center gap-4 py-11'>
        <Smile />
        <p className='text-[#81FBB8] text-2xl font-semibold'>Excelente!</p>
      </div>
      <div className='flex gap-2 text-white text-sm justify-center'>
        <span className='font-medium'>NPS Score</span>
        <span className='font-normal'>75</span>
      </div>
    </div>
  )
}


export function ClosedSales() {
  return (
    <div className='bg-[#363447] flex flex-col items-center font-["Inter"] px-10 py-7 w-[351px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
      <h1 className='text-white text-2xl font-semibold text-center mb-8'>Vendas fechadas</h1>
      <div>
        <svg className='w-[160px] h-[160px] relative'>
          <circle r='70' cx='70' cy='70' className='w-[155px] h-[155px] fill-none stroke-[#464556] stroke-[10px] translate-x-[8px] translate-y-[8px]' style={{strokeDasharray: 440, strokeDashoffset: 0}}></circle>
          <circle r='70' cx='70' cy='70' className='w-[155px] h-[155px] fill-none stroke-[#7568f0] stroke-[15px] translate-x-[8px] translate-y-[8px] transition-all' style={{strokeDasharray: 440, strokeDashoffset: 132}}></circle>
        </svg>
        <div className='relative -top-2 left-0 w-full h-full flex justify-center items-center text-white'><p className='relative bottom-24 left-10 text-lg font-bold'>70%</p><p className='relative bottom-20 right-5'>alcançada</p></div>
      </div>
      <div className='flex gap-5 '>
        <div className='text-white text-sm flex gap-2'>
          <div className='flex items-center gap-1 font-medium'>
            <Expected />
            <span>Esperado</span>
          </div>
          <span>100</span>
        </div>

        <div className='text-white text-sm flex gap-2'>
          <div className='flex items-center gap-1 font-medium'>
            <SalesEllipse />
            <span>Alcançado</span>
          </div>
          <span>70</span>
        </div>
      </div>
      
    </div>
  )
}


export function MonthlyGoal() {
  const [ expect, setExpect ] = useState('')
  const [ reach, setReach ] = useState('')
  const [ percent, setPercent ] = useState(44)
  const [ display, setDisplay ] = useState(90)
  
  function setPercentage() {
    const reachPercent = ( reach / expect ) * 100
    const goalPercent = 100 - reachPercent
    const calc = 440 - ( (440 * reachPercent) / 100 )
    console.log(reachPercent)
    console.log(goalPercent)
    
    setPercent(calc)
    setDisplay(reachPercent)
  }


  return (
    <div className='bg-[#363447] flex flex-col  items-center font-["Inter"] px-10 sm:px-12 py-7 sm:w-[409px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
      <h1 className='text-white text-2xl font-semibold text-center mb-8'>Meta mensal</h1>
      <div>
        <svg className='w-[160px] h-[160px] relative'>
          <circle r='70' cx='70' cy='70' className='w-[155px] h-[155px] fill-none stroke-[#464556] stroke-[10px] translate-x-[8px] translate-y-[8px]' style={{strokeDasharray: 440, strokeDashoffset: 0}}></circle>
          <circle r='70' cx='70' cy='70' className='w-[155px] h-[155px] fill-none stroke-[#ba7bc3] stroke-[15px] translate-x-[8px] translate-y-[8px] transition-all' style={{strokeDasharray: 440, strokeDashoffset: `${percent}`}}></circle>
        </svg>
        <div className='relative -top-2 left-0 w-full h-full flex justify-center items-center text-white'><p className='relative bottom-24 left-10 text-lg font-bold'>{display}%</p><p className='relative bottom-20 right-5'>alcançada</p></div>
      </div>
      <div className='flex gap-5 '>
        <div className='text-white text-sm flex gap-2'>
          <div className='flex items-center gap-1 font-medium'>
            <Expected />
            <span>Esperado</span>
          </div>
          <span>R$ <input type="text" placeholder='70' onChange={(e)=>setExpect(e.target.value)} className='w-[23px] bg-[#363447] text-right' />K</span>
        </div>

        <div className='text-white text-sm flex gap-2'>
          <div className='flex items-center gap-1 font-medium'>
            <GoalEllipse />
            <span>Alcançado</span>
          </div>
          <span>R$ <input type="text" placeholder='63' onChange={(e)=>setReach(e.target.value)} onBlur={setPercentage} className='w-[20px] bg-[#363447]' />K</span>
        </div>
      </div>
    </div>
  )
}


export function WeekSales() {
  return (
    <div className='bg-[#363447] text-white flex flex-col gap-8 font-["Inter"] px-12 py-7 lg:w-screen lg:max-w-[1120px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>

        <h1 className='text-2xl text-center font-semibold'>Vendas por dia da semana</h1>

        <div className='flex flex-col lg:flex-row gap-8 place-content-between'>

          <div className='flex flex-col gap-8 '>

            <div className='flex flex-col gap-8'>
              <div className='flex gap-2 items-center'>
                <UpPolygon />
                <span className='text-sm font-medium'>Dia com mais vendas</span>
              </div>
              <p className='font-medium text-2xl'>quarta-feira</p>
            </div>

            <div className='flex flex-col gap-8'>
              <div className='flex gap-2 items-center'>
                <DownPolygon />
                <span className='text-sm font-medium'>Dia com menos vendas</span>
              </div>
              <p className='font-medium text-2xl'>domingo</p>
            </div>

          </div>

          <div className='sm:w-[500px] h-[200px] flex justify-between items-end'>
            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[39px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>dom</p>
            </div>

            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[115px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>seg</p>
            </div>
            
            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[76px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>ter</p>
            </div>
            
            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[159px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>qua</p>
            </div>
            
            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[129px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>qui</p>
            </div>
            
            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[120px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>sex</p>
            </div>
            
            <div className='flex flex-col items-center gap-1'>
              <svg className='w-[10px] h-[69px] bg-[#32CCBC] rounded-full' />
              <p className='text-xs'>sab</p>
            </div>
          </div>

        </div>
        
    </div>
  )
}



export function Challenge8() {
  return (
    <div className='bg-[#1E1E1E] py-28 px-2 flex flex-col items-center gap-8'>
      <div className='flex flex-col sm:flex-row flex-wrap gap-8 items-center justify-center'>
        <NetPromoterScore />
        <ClosedSales />
        <MonthlyGoal />
      </div>
      <div>
        <WeekSales />
      </div>
    </div>
  )
}