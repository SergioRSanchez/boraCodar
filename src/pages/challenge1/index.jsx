import { ReactComponent as Hans } from './assets/hans.svg'
import { ReactComponent as PlayBack } from './assets/playBack.svg'
import { ReactComponent as Play } from './assets/play.svg'
import { ReactComponent as PlayForward } from './assets/playForward.svg'

import './css/main.css'

export default function Challenge1() {
  return (
    <>
      <div className='bg-[#0F0D13] flex flex-col sm:flex-row gap-8 items-center'>

        <section>
          <div className='bg-[#2A2141] py-9 px-9 rounded-lg w-64 flex flex-col gap-7'>
            <div>
              <Hans className='w-[190px]' />
            </div>
            <div>
              <h1 className='text-[#E1E1E6] mb-2 font-bold text-2xl'>Acorda Devinho</h1>
              <p className='text-[#E1E1E6] text-lg opacity-70'>Banda RocketSeat</p>
            </div>
            <div className='flex justify-between'>
              <PlayBack />
              <Play />
              <PlayForward />
            </div>
            <div>
              <div className='relative'>
                <div className='block bg-[#D9D9D9] opacity-30 h-[6px] w-full rounded-lg absolute'></div>
                <div className='block bg-[#D9D9D9] opacity-80 h-[6px] w-4/5 rounded-lg'></div>
              </div>
              <div className='flex justify-between mt-3'>
                <p className='text-[#C4C4CC] text-sm opacity-80'>03:20</p>
                <p className='text-[#C4C4CC] text-sm opacity-80'>00:12</p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-8'>
          <div className='bg-[#2A2141] p-7 w-[357px] flex flex-col gap-7 rounded-lg'>
            <div className='flex gap-7 justify-center items-center'>
              <div>
                <Hans className='w-[84px]' />
              </div>
              <div>
                <h1 className='text-[#E1E1E6] mb-2 font-bold text-2xl'>Acorda Devinho</h1>
                <p className='text-[#E1E1E6] text-lg opacity-70'>Banda RocketSeat</p>
              </div>
            </div>
            <div className='flex justify-evenly'>
              <PlayBack />
              <Play />
              <PlayForward />
            </div>
            <div>
              <div className='relative'>
                <div className='block bg-[#D9D9D9] opacity-30 h-[6px] w-full rounded-lg absolute'></div>
                <div className='block bg-[#D9D9D9] opacity-80 h-[6px] w-4/5 rounded-lg'></div>
              </div>
              <div className='flex justify-between mt-3'>
                <p className='text-[#C4C4CC] text-sm opacity-80'>03:20</p>
                <p className='text-[#C4C4CC] text-sm opacity-80'>00:12</p>
              </div>
            </div>
          </div>

          <div className='bg-[#2A2141] p-7 w-[357px] flex flex-col gap-7 rounded-lg'>
            <div className='flex gap-7 justify-center items-center'>
              <div>
                <Hans className='w-[84px]' />
              </div>
              <div>
                <h1 className='text-[#E1E1E6] mb-2 font-bold text-2xl'>Acorda Devinho</h1>
                <p className='text-[#E1E1E6] text-lg opacity-70'>Banda RocketSeat</p>
              </div>
            </div>
            <div className='flex justify-evenly'>
              <PlayBack />
              <Play />
              <PlayForward />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}