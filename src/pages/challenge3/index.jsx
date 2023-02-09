import { useState } from 'react'

import { ReactComponent as Pointer1 } from './assets/pointer1.svg'
import { ReactComponent as Pointer2 } from './assets/pointer2.svg'
import { ReactComponent as Pointer3 } from './assets/pointer3.svg'
import { ReactComponent as Pointer4 } from './assets/pointer4.svg'
import { ReactComponent as Loading } from './assets/loading.svg'
import { ReactComponent as Movable } from './assets/movable.svg'


export function Challenge3() {

  const [buttonType, setButton] = useState(1)
  const toggleButton1 = () => {
    setButton(1)
  }
  const toggleButton2 = () => {
    setButton(2)
  }
  const toggleButton3 = () => {
    setButton(3)
  }

  return (
    <>
      <div className='flex justify-between bg-[#0B0911] font-["Inter"] text-white'>
        
        <div className='px-[75px] py-28 flex flex-col gap-5'>
          <div className='flex flex-col'>
            <h1 className='text-white font-bold text-3xl mb-2'>Tipos de botão</h1>
            <p className='text-white text-[19px] opacity-40'>Dentro de um layout, botões servem para destacar ações importantes a serem tomadas.</p>
            <p className='text-white text-lg opacity-40'>Acompanhe abaixo um exemplo de tipos e propriedades.</p>
          </div>
          <table className='bg-[#0B0911] text-white border-8 border-[#1C162C] text-center align-middle'>
            <tr className='bg-[#1C162C]'>
              <th className=''>&nbsp;</th>
              <th className='py-5 font-normal cursor-pointer' onClick={toggleButton1}>BOTÃO PRIMÁRIO</th>
              <th className='font-normal cursor-pointer' onClick={toggleButton2}>BOTÃO SECUNDÁRIO</th>
              <th className='font-normal cursor-pointer' onClick={toggleButton3}>BOTÃO TERCIÁRIO</th>
              <th className='font-normal cursor-not-allowed'>CURSOR</th>
            </tr>

            <tr className=''>
              <td className='bg-[#1C162C] text-xs pt-8 pl-4 pr-4'>DEFAULT</td>
              <td className='pt-8 px-4 pl-4'><button className='bg-[#8257E5] px-6 py-3 text-sm rounded-full cursor-default'>DEFAULT PRIMARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#3C3748] px-6 py-3 text-sm rounded-full cursor-default'>DEFAULT SECONDARY</button></td>
              <td className='pt-8 px-4'><button className='px-6 py-3 text-sm rounded-full cursor-default'>DEFAULT TERTIARY</button></td>
              <td className='pt-8 pl-4'><Pointer1/></td>
            </tr>

            <tr>
              <td className='bg-[#1C162C] text-xs pt-8 pl-4 pr-4'>HOVER</td>
              <td className='pt-8 px-4 pl-4'><button className='bg-[#9674E5] px-6 py-3 text-sm rounded-full cursor-default'>HOVER PRIMARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#6A617F] px-6 py-3 text-sm rounded-full cursor-default'>HOVER SECONDARY</button></td>
              <td className='pt-8 px-4'><button className='px-6 py-3 text-sm rounded-full cursor-default'>HOVER TERTIARY</button></td>
              <td className='pt-8 pl-4'><Pointer1/></td>
            </tr>

            <tr>
              <td className='bg-[#1C162C] text-xs pt-8 pl-4 pr-4'>FOCUS</td>
              <td className='pt-8 px-4 pl-4'><button className='bg-[#9674E5] px-6 py-3 text-sm rounded-full border-2 border-[#D9CDF7] cursor-default'>FOCUS PRIMARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#6A617F] px-6 py-3 text-sm rounded-full border-2 border-[#D9CDF7] cursor-default'>FOCUS SECONDARY</button></td>
              <td className='pt-8 px-4'><button className='px-6 py-3 text-sm rounded-full border-2 border-[#D9CDF7] cursor-default'>FOCUS TERTIARY</button></td>
              <td className='pt-8 pl-4'><Pointer1/></td>
            </tr>

            <tr>
              <td className='bg-[#1C162C] text-xs pt-8 pl-4 pr-4'>DISABLED</td>
              <td className='pt-8 px-4 pl-4'><button className='bg-[#8257E5] opacity-40 px-6 py-3 text-sm rounded-full cursor-not-allowed'>DISABLED PRIMARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#3C3748] opacity-40 px-6 py-3 text-sm rounded-full cursor-not-allowed'>DISABLED SECONDARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#0B0911] opacity-40 px-6 py-3 text-sm rounded-full cursor-not-allowed'>DISABLED TERTIARY</button></td>
              <td className='pt-8 pl-4'><Pointer2/></td>
            </tr>

            <tr>
              <td className='bg-[#1C162C] text-xs pt-8 pl-4 pr-4'>LOADING</td>
              <td className='pt-8 px-4 pl-4'><button className='bg-[#8257E5] px-6 py-3 text-sm rounded-full cursor-wait flex items-center gap-2'><Loading/>LOADING PRIMARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#3C3748] px-6 py-3 text-sm rounded-full cursor-wait flex items-center gap-2'><Loading/>LOADING SECONDARY</button></td>
              <td className='pt-8 px-4'><button className='px-6 py-3 text-sm rounded-full cursor-wait flex items-center gap-2'><Loading/>LOADING TERTIARY</button></td>
              <td  className='pt-8 pl-4'><Pointer3/></td>
            </tr>

            <tr>
              <td className='bg-[#1C162C] text-xs pt-8 pl-4 pr-4'>MOVABLE</td>
              <td className='pt-8 px-4 pl-4'><button className='bg-[#8257E5] px-6 py-3 text-sm rounded-full flex items-center gap-2 cursor-move'><Movable/>MOVABLE PRIMARY</button></td>
              <td className='pt-8 px-4'><button className='bg-[#3C3748] px-6 py-3 text-sm rounded-full flex items-center gap-2 cursor-move'><Movable/>MOVABLE SECONDARY</button></td>
              <td className='pt-8 px-4'><button className='px-6 py-3 text-sm rounded-full flex items-center gap-2 cursor-move'><Movable/>MOVABLE TERTIARY</button></td>
              <td className='pt-8 pb-4 pl-4'><Pointer4/></td>
            </tr>

          </table>
        </div>

        <div className='w-[406px] px-11 py-28 flex flex-col gap-16 bg-[#130F1E]'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-white font-bold text-3xl'>Teste os botões</h1>
            <p className='text-white text-[19px] opacity-40'>Interaja com os botões e observe a mudança de aparência e de cursores.</p>
          </div>

          <div className='flex justify-center flex-col gap-8'>
            {buttonType == 1 && (
              <>
                <button className='bg-[#8257E5] hover:bg-[#9674E5] focus:border-2 border-[#D9CDF7] px-6 py-3 text-sm rounded-full'>INTERAJA COMIGO</button>
                <button className='bg-[#8257E5] opacity-40 px-6 py-3 text-sm rounded-full cursor-not-allowed'>INTERAJA COMIGO</button>
                <button className='bg-[#8257E5] px-6 py-3 text-sm rounded-full flex items-center justify-center cursor-move'><Movable className='mr-2'/>INTERAJA COMIGO</button>
              </>
            )}
            {buttonType == 2 && (
              <>
                <button className='bg-[#3C3748] hover:bg-[#6A617F] px-6 py-3 text-sm rounded-full cursor-default'>INTERAJA COMIGO</button>
                <button className='bg-[#3C3748] opacity-40 px-6 py-3 text-sm rounded-full cursor-not-allowed'>INTERAJA COMIGO</button>
                <button className='bg-[#3C3748] px-6 py-3 text-sm rounded-full flex items-center justify-center gap-2 cursor-move'><Movable/>INTERAJA COMIGO</button>
              </>
            )}
            {buttonType == 3 && (
              <>
                <button className='bg-[#0B0911] px-6 py-3 text-sm rounded-full cursor-default focus:border-2 focus:border-[#D9CDF7]'>INTERAJA COMIGO</button>
                <button className='bg-[#0B0911] opacity-40 px-6 py-3 text-sm rounded-full cursor-not-allowed'>INTERAJA COMIGO</button>
                <button className='bg-[#0B0911] px-6 py-3 text-sm rounded-full flex items-center justify-center gap-2 cursor-move'><Movable/>INTERAJA COMIGO</button>
              </>
            )}
          </div>
        </div>

      </div>
    </>
  )
}