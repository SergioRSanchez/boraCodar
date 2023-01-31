import { ReactComponent as Cecilia } from './assets/cecilia.svg';
import { ReactComponent as Ellipse } from './assets/ellipse.svg';
import { ReactComponent as Close } from './assets/close.svg';
import {ReactComponent as Send} from './assets/send.svg';

import './css/main.css';

export function Challenge4() {
  return (
    <>
      <div className='py-6 px-8 sm:py-8 sm:px-[72px] flex flex-col gap-[30px] h-screen justify-between'>
        <div >
          <div>
            <div className='flex justify-between items-center'>
              <div className='flex gap-4 items-center'>
                <Cecilia />
                <div>
                  <p className='text-white font-bold'>Cecilia Sassaki</p>
                  <p className='text-[#00B37E] flex gap-1 items-center'><Ellipse/>Online</p>
                </div>
              </div>
              <button><Close className='fill-white hover:opacity-70' /></button>
            </div>
            <div>
              <p className='text-[#E1E1E6] text-xs flex justify-center mt-6'>Hoje 11:30</p>
            </div>
          </div>
          <div className='flex flex-col gap-7 mt-7'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#E1E1E6] text-xs'>Cecilia - 11:30</p>
              <p className='text-[#E1E1E6] text-xs p-[14px] bg-[#633BBC] w-[149px] sm:w-[252px] rounded-r-lg rounded-bl-lg mt-[10px]'>Tive uma ideia incrível para um projeto! 😍</p>
            </div>
            <div className='self-end flex flex-col gap-2'>
              <p className='text-[#E1E1E6] text-xs place-self-end'>Você - 11:32</p>
              <p className='text-[#E1E1E6] text-xs p-[14px] bg-[#07847E] w-[150px] rounded-l-lg rounded-br-lg mt-[10px]'>Sério? Me conta mais.</p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-[#E1E1E6] text-xs'>Cecilia - 11:34</p>
              <p className='text-[#E1E1E6] text-xs p-[14px] bg-[#633BBC] w-[149px] sm:w-[442px] rounded-r-lg rounded-bl-lg mt-[10px]'>E se a gente fizesse um chat moderno e responsivo em apenas uma semana?</p>
            </div>
            <div className='self-end flex flex-col gap-2'>
              <p className='text-[#E1E1E6] text-xs place-self-end'>Você - 11:36</p>
              <p className='text-[#E1E1E6] text-xs p-[14px] bg-[#07847E] w-[110px] rounded-l-lg rounded-br-lg mt-[10px]'>#boraCodar! 🚀</p>
            </div>
          </div>
        </div>
        <div className='mt-6 flex w-full items-center bg-[#282843] px-6 py-[14px] rounded-full leading-none'>
          <input
            type="text" 
            placeholder='Digite sua mensagem' 
            className='bg-[#282843] text-xs text-[#E1E1E6] items-center flex w-full leading-none outline-none resize-none '
          />
          <button><Send className='fill-[#E1E1E6] hover:opacity-70'/></button>
        </div>
      </div>
    </>
  );
}