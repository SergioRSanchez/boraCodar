import { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { ReactComponent as LightDefault } from './assets/light-default.svg';
import { ReactComponent as LightHover } from './assets/light-hover.svg';
import { ReactComponent as DarkDefault } from './assets/dark-default.svg';
import { ReactComponent as DarkHover } from './assets/dark-hover.svg';
import { ReactComponent as Github } from './assets/github.svg';
import { ReactComponent as Instagram } from './assets/instagram.svg';
import { ReactComponent as Linkedin } from './assets/linkedin.svg';
import { ReactComponent as Rocket } from './assets/rocket.svg';

import challenge1 from '../challenge1/assets/desktop.png';
import challenge2 from '../challenge2/assets/desktop.png';
import challenge3 from '../challenge3/assets/capa.png';
import challenge4 from '../challenge4/assets/capa.png';
import challenge5 from '../challenge5/assets/capa.png';

import desktopDay from './assets/Desktop-diurno.png'



export function Home() {
  const [ darkMode, setDarkMode ] = useState(false)

  function toggleDarkMode() {
    if (darkMode === false) {
      setDarkMode(true)
    } else (
      setDarkMode(false)
    )
  }

  const navigate = useNavigate();

  function goToChallenge1() {
    navigate('/challenge1')
  }
  function goToChallenge2() {
    navigate('challenge2')
  }
  function goToChallenge3() {
    navigate('challenge3')
  }
  function goToChallenge4() {
    navigate('challenge4')
  }
  function goToChallenge5() {
    navigate('challenge5')
  }

  return (
    <div className={
      darkMode 
      ? 
      "font-['Roboto'] md:bg-[url('src/pages/home/assets/Desktop-noturno.png')] bg-[url('src/pages/home/assets/Mobile-noturno.png')] bg-cover flex flex-col gap-4 items-center pt-12 pb-7 md:px-[426px] px-5 transition-all"
      : 
      `font-['Roboto'] md:bg-[url('/src/pages/home/assets/Desktop-diurno.png')] bg-[url('src/pages/home/assets/Mobile-diurno.png')] bg-cover flex flex-col gap-4 items-center pt-12 pb-7 md:px-[426px] px-5 transition-all`
    }>
      <div className='flex justify-center items-center'>
        <Rocket  height={50} />
        <div className='text-[#C6ADFF] text-3xl'> #boracodar</div>
      </div>
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
      <div>

        <Carousel>

          <div onClick={goToChallenge1}>
            <img src={challenge1} alt="" />
            <p className="legend">Challenge 1: Music Player</p>
          </div>

          <div onClick={goToChallenge2}>
            <img src={challenge2} alt="" />
            <p className="legend">Challenge 2: Product Card</p>
          </div>
          
          <div onClick={goToChallenge3}>
            <img src={challenge3} alt="" />
            <p className="legend">Challenge 3: Buttons and Cursors</p>
          </div>
          
          <div onClick={goToChallenge4}>
            <img src={challenge4} alt="" />
            <p className="legend">Challenge 4: Chat</p>
          </div>
          
          <div onClick={goToChallenge5}>
            <img src={challenge5} alt="" />
            <p className="legend">Challenge 5: Calculator</p>
          </div>

        </Carousel>

      </div>

      <div className='flex gap-8 items-center'>
        <Github className={darkMode ? 'fill-white cursor-pointer transition-all' : 'fill-black cursor-pointer transition-all'} />
        <Instagram className={darkMode ? 'fill-white cursor-pointer transition-all' : 'fill-black cursor-pointer transition-all'} />
        <Linkedin className={darkMode ? 'fill-white cursor-pointer transition-all' : 'fill-black cursor-pointer transition-all'} />
      </div>
    </div>
  );
}