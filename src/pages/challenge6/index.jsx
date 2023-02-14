import './css/main.css';
import 'animate.css';

import { ReactComponent as Airplane } from './assets/airplane.svg'
import { ReactComponent as QRCode } from './assets/qrcode.svg'

export function Challenge6() {
  return (
    <div className='font-["Rubik"] h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#8257E5] to-[#271A45]'>
      <div>
        <p className='text-white font-bold text-xl mb-4'>Cartão de embarque</p>
      </div>

      <div id='boarderCard1' className='animate__animated  bg-white rounded-3xl'>
        <div className='flex px-8 py-6 justify-between gap-6'>
          <div className=''>
            <p className='text-sm opacity-60'>Voo</p>
            <p className='font-bold'>RS995</p>
          </div>

          <div className='text-right'>
            <p className='text-sm opacity-60 '>Data</p>
            <p className='font-bold'>23/05/2023</p>
          </div>
        </div>

        <div className='flex px-8 py-6 justify-between gap-6 items-center'>
          <div>
            <p className='text-sm opacity-60'>São Paulo, Brasil</p>
            <p className='font-bold text-4xl'>GRU</p>
            <p className='text-sm opacity-60'>17:00</p>
          </div>

          <Airplane />
          
          <div className='text-right'>
            <p className='text-sm opacity-60'>São Francisco, EUA</p>
            <p className='font-bold text-4xl'>SFO</p>
            <div className='flex justify-end'>
              <span className='text-sm opacity-60'>04:48</span>
              <span className='font-bold text-[10px]'>+1</span>
            </div>
          </div>

        </div>

      </div>

      <div id='boarderCard2' className='bg-white rounded-3xl w-[368px] border-t border-dashed border-gray-400'>
        <div className='flex px-8 py-6 justify-between'>
            <div className=''>
              <p className='text-sm opacity-60'>Passageiro</p>
              <p className='font-bold'>Sérgio Sanchez</p>
            </div>

            <div className='text-right'>
              <p className='text-sm opacity-60 '>Assento</p>
              <p className='font-bold'>28A</p>
            </div>
          </div>
      </div>

      <div id='boarderCard3' className='animate__animated  bg-white rounded-3xl border-t border-dashed border-gray-400 px-8 py-6 w-[368px] flex flex-col gap-6'>
        <div>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-col items-start'>
                <p className='text-sm opacity-60'>Embarque</p>
                <p className='font-bold text-white bg-[#633BBC] rounded-lg px-2 py-1'>16:15</p>
              </div>

              <div className='flex flex-col items-start'>
                <p className='text-sm opacity-60'>Terminal</p>
                <p className='font-bold'>2</p>
              </div>
              
              <div className='flex flex-col items-start'>
                <p className='text-sm opacity-60'>Portão</p>
                <p className='font-bold'>15</p>
              </div>

            </div>

            <div><QRCode /></div>
          </div>

        </div>
        <div className='flex justify-center'>
          <span className='font-bold'>Atenção: &nbsp;</span>
          <span>o portão fecha 16:45</span>
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-sm px-7 text-center w-[369px] text-white opacity-60'>Qualquer problema procure o balcão de atendimento da sua companhia aérea</p>
      </div>
    </div>
  )
}