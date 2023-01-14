import { useState } from 'react'

import { ReactComponent as Round } from './assets/round.svg'
import { ReactComponent as Close } from './assets/close.svg'
import { ReactComponent as Sofa } from './assets/sofa.svg'

import spin from './assets/spin.gif'

import './css/main.css'

export default function Challenge2() {

  const [enabled, setEnabled] = useState(false)
  const toggleEnabled = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <div className='md:grid md:grid-cols-2 flex flex-col justify-center'>
        <div className='flex flex-col items-end md:pr-10 md:py-36'>
          <button onClick={toggleEnabled}>
            {enabled ? <Close /> : <Round />}
          </button>
          {enabled ? <img src={spin} className='w-[489px]'/> : <Sofa className='w-[500px]'/>}
        </div>

        <div className='md:py-44 m-auto md:m-0'>
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