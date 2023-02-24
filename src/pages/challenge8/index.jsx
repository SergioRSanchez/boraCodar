import { ReactComponent as Smile } from './assets/smile.svg'
import { ReactComponent as ReachSales } from './assets/reachSales.svg'
import { ReactComponent as ReachGoal } from './assets/reachGoal.svg'
import { ReactComponent as Expected } from './assets/expected.svg'
import { ReactComponent as SalesEllipse } from './assets/salesEllipse.svg'
import { ReactComponent as GoalEllipse } from './assets/goalEllipse.svg'
import { ReactComponent as UpPolygon } from './assets/upPolygon.svg'
import { ReactComponent as DownPolygon } from './assets/downPolygon.svg'
import { ReactComponent as Graph } from './assets/graph.svg'


export function NetPromoterScore() {
  return (
    <div className='bg-[#363447] flex flex-col gap-8 font-["Inter"] px-12 py-7 w-[296px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
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
    <div className='bg-[#363447] flex flex-col gap-8 items-center font-["Inter"] px-12 py-7 w-[351px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
      <h1 className='text-white text-2xl font-semibold text-center'>Vendas fechadas</h1>
      <ReachSales />
      <div className='flex gap-5'>
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
  return (
    <div className='bg-[#363447] flex flex-col gap-8 items-center font-["Inter"] px-12 py-7 sm:w-[409px] rounded-2xl shadow-[3px_4px_26px_0_rgba(0,0,0,0.25)]'>
      <h1 className='text-white text-2xl font-semibold text-center'>Meta mensal</h1>
      <ReachGoal />
      <div className='flex gap-5'>
        <div className='text-white text-sm flex gap-2'>
          <div className='flex items-center gap-1 font-medium'>
            <Expected />
            <span>Esperado</span>
          </div>
          <span>R$ 70K</span>
        </div>

        <div className='text-white text-sm flex gap-2'>
          <div className='flex items-center gap-1 font-medium'>
            <GoalEllipse />
            <span>Alcançado</span>
          </div>
          <span>R$ 63K</span>
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

          <div>
            <Graph className='w-[280px] sm:w-[523px]' />
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