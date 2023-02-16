import { useState } from 'react';

import { Card } from './components/card'

import { ReactComponent as Ilustracao1 } from './assets/fundo1.svg'
import { ReactComponent as Ilustracao2 } from './assets/fundo2.svg'
import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Location } from './assets/location.svg'



export function Challenge7 () {
  const [ listEnabled, setListEnabled ] = useState(true)
  const [ mapEnabled, setMapEnabled ] = useState(false)

  function toggleListEnabled() {
    if (listEnabled === false) {
      setListEnabled(true)
      setMapEnabled(false)
    }
  }
  function toggleMapEnabled() {
    if (mapEnabled === false) {
      setListEnabled(false)
      setMapEnabled(true)
    }
  }



  return (
    <div className='font-["Roboto"]'>

      <div className='bg-[#F8F8FF] flex flex-col sm:flex-row justify-between sm:relative'>
        <Ilustracao1 className='sm:absolute ' />

        <div className='py-24 sm:px-56'>

          <div className='flex flex-col items-center text-center sm:px-40 md:px-20 mb-10'>
            <p className='uppercase text-[#E45858] font-medium'>Find your block</p>
            <h1 className='font-bold text-3xl md:text-5xl'>Encontre os <span className='text-[#6246EA]'>melhores blocos</span> de carnaval de 2023</h1>
          </div>

          <div className='bg-white p-4 sm:p-10 rounded-xl border-[1px] border-[#EAEAEA] flex flex-col sm:flex-row justify-between gap-6 mx-2 sm:mb-3'>
            <form action="" className='bg-[#F8F8FF] p-3 flex gap-3 items-center rounded-md'>
              <Search />
              <input type="text" placeholder='Pesquise por nome' className='bg-[#F8F8FF] focus:outline-none'/>
            </form>

            <form action="" className='bg-[#F8F8FF] p-3 flex gap-3 items-center rounded-md'>
              <Location />
              <select name="" id="cidade" className='bg-[#F8F8FF] focus:outline-none gap-8 opacity-40'>
                <option value="">Selecione uma cidade</option>
                <option value="SP">São Paulo</option>
                <option value="BH">Belo Horizonte</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SA">Salvador</option>
              </select>
            </form>

            <button className='uppercase bg-[#6246EA] text-white text-sm font-bold px-8 py-3 rounded-md'>Buscar agora</button>
          </div>

        </div>

        <Ilustracao2 className='sm:absolute right-0 bottom-0' />

      </div>



      <div className='sm:px-[60px] sm:py-24 px-5 py-10 flex flex-col gap-10'>
        <div className='flex items-center justify-between'>
          <p className='font-bold sm:text-2xl'>Blocos recomendados</p>
          <div className='border-[1px] border-[#EAEAEA] p-1 sm:p-2 rounded-md'>
            <button 
              onClick={toggleListEnabled}
              className={
                listEnabled
                ?
                'uppercase bg-[#6246EA] px-6 py-1 rounded-md text-white font-bold text-xs sm:text-sm transition-all'
                :
                'uppercase px-6 py-1 rounded-md text-[#6246EA] font-bold text-xs sm:text-sm transition-all'
              }
            >
              Lista
            </button>
            <button 
              onClick={toggleMapEnabled}
              className={
                mapEnabled
                ?
                'uppercase bg-[#6246EA] px-6 py-1 rounded-md text-white font-bold text-xs sm:text-sm transition-all'
                :
                'uppercase px-6 py-1 rounded-md text-[#6246EA] font-bold text-xs sm:text-sm transition-all'
              }
            >
              Mapa
            </button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-8 sm:flex-wrap justify-between'>
          <Card />
        </div>
      </div> 
    </div>
  )
}