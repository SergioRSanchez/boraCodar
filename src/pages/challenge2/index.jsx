import { ReactComponent as Round } from './assets/round.svg'
import { ReactComponent as Sofa } from './assets/sofa.svg'

import './css/main.css'

export default function Challenge2() {
  return (
    <>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col items-end pr-10 py-36'>
          <Round />
          <Sofa />
        </div>

        <div className='py-44'>
          <div className='flex flex-col gap-3 mb-5'>
            <p className='font-light text-xs text-[#271A45]'>CÓDIGO: 42404</p>
            <h1 className='font-semibold text-3xl text-[#271A45]'>Sofá Margot II - Rosé</h1>
            <p className='text-[#271A45]'>R$ 4.000 </p>
          </div>

          <button className='text-[#271A45] text-xs py-2 px-4 border-[0.5px] border-[#271A45] rounded-full'>ADICIONAR À CESTA</button>

        </div>

      </div>
    </>
  )
}