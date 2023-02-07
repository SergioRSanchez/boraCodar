import './css/main.css'

import { ReactComponent as LightDefault } from './assets/light-default.svg'
import { ReactComponent as LightHover } from './assets/light-hover.svg'
import { ReactComponent as DarkDefault } from './assets/dark-default.svg'
import { ReactComponent as DarkHover } from './assets/dark-hover.svg'

import { useState } from 'react';
import DesktopDiurno from './assets/Desktop-diurno.png'

export function Home() {
  const [ darkMode, setDarkMode ] = useState(false)

  function toggleDarkMode() {
    if (darkMode === false) {
      setDarkMode(true)
    } else (
      setDarkMode(false)
    )
  }

  return (
    <div className={
      darkMode 
      ? 
      "bg-[url('src/pages/home/assets/Desktop-noturno.png')] bg-cover h-screen flex flex-col items-center py-14 px-[426px]" 
      : 
      "bg-[url('src/pages/home/assets/Desktop-diurno.png')] bg-cover h-screen flex flex-col items-center py-14 px-[426px]"
    }>
      <div className='text-[#C6ADFF] text-5xl'>#boracodar</div>
      <div>
        <button className='' onClick={toggleDarkMode}>
          {
            darkMode 
            ?
            <DarkDefault />
            :
            <LightDefault />
          }
        </button>
        
        
      </div>
    </div>
  );
}