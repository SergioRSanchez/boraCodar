import { useMemo, useState } from 'react';

import { ReactComponent as Ilustracao1 } from './assets/fundo1.svg'
import { ReactComponent as Ilustracao2 } from './assets/fundo2.svg'
import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Location } from './assets/location.svg'

import Card1 from './assets/card1.png';
import Card2 from './assets/card2.png';
import Card3 from './assets/card3.png';
import Card4 from './assets/card4.png';
import Card5 from './assets/card5.png';
import Card6 from './assets/card6.png';
import Card7 from './assets/card7.png';
import Card8 from './assets/card8.png';
import Card9 from './assets/card9.png';



export function Challenge7 () {
  const [ listEnabled, setListEnabled ] = useState(true)
  
  function toggleListEnabled() {
    if (listEnabled === false) {
      setListEnabled(true)
      setMapEnabled(false)
    }
  }
  
  const [ mapEnabled, setMapEnabled ] = useState(false)

  function toggleMapEnabled() {
    if (mapEnabled === false) {
      setListEnabled(false)
      setMapEnabled(true)
    }
  }

  const cards = [
    {id: 0, name: 'O Python do vovô não sobe mais', img: Card1, city: 'São Paulo', state: 'SP'},
    {id: 1, name: 'Todo mundo null', img: Card2, city: 'Florianópolis', state: 'SC'},
    {id: 2, name: 'Hoje dou exception', img: Card3, city: 'Curitiba', state: 'PR'},
    {id: 3, name: 'Manda Node', img: Card4, city: 'Salvador', state: 'BA'},
    {id: 4, name: 'Só no back-end', img: Card5, city: 'São Paulo', state: 'SP'},
    {id: 5, name: 'Esse anel não é de Ruby', img: Card6, city: 'São Paulo', state: 'SP'},
    {id: 6, name: 'Pimenta no C# dos outros é refresco', img: Card7, city: 'Rio de Janeiro', state: 'RJ'},
    {id: 7, name: 'EnCACHE aqui', img: Card8, city: 'Porto Alegre', state: 'RS'},
    {id: 8, name: 'Não valho nada mas JAVA li', img: Card9, city: 'São Paulo', state: 'SP'},
  ]

  const [ blockName, setBlockName ] = useState('')

  const filtredBlocks = useMemo(() => {
    const blockLower = blockName.toLowerCase()
    return cards.filter(card => card.name.toLowerCase().includes(blockLower))
  }, [blockName]) 
  
  
  const [ searchCity, setSearchCity ] = useState('geral')
  const sp = cards.filter(card => card.state === 'SP')
  const sc = cards.filter(card => card.state === 'SC')
  const pr = cards.filter(card => card.state === 'PR')
  const ba = cards.filter(card => card.state === 'BA')
  const rj = cards.filter(card => card.state === 'RJ')
  const rs = cards.filter(card => card.state === 'RS')


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
            <form  className='bg-[#F8F8FF] p-3 flex gap-3 items-center rounded-md'>
              <Search />
              <input 
                type="text" 
                placeholder='Pesquise por nome' 
                className='bg-[#F8F8FF] focus:outline-none'
                onChange={event => setBlockName(event.target.value)}
                value={blockName}
              />
            </form>

            <form  className='bg-[#F8F8FF] p-3 flex gap-3 items-center rounded-md'>
              <Location />
              <select name="cidade" id="cidade" value={searchCity} onChange={event => setSearchCity(event.target.value)} className='bg-[#F8F8FF] focus:outline-none gap-8 opacity-40'>
                <option value="geral">Selecione uma cidade</option>
                <option value="SP" >São Paulo</option>
                <option value="SC">Florianópolis</option>
                <option value="PR">Curitiba</option>
                <option value="BA">Salvador</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RS">Porto Alegre</option>
              </select>
            </form>

            <button 
              className='uppercase bg-[#6246EA] text-white text-sm font-bold px-8 py-3 rounded-md'
            >
              Buscar agora
            </button>
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

        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-between'>
          {
            listEnabled
            ?
            (searchCity === 'geral' 
            && filtredBlocks.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            ) ||
            (searchCity === 'SP'
            &&
            sp.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            ) ||
            (searchCity === 'SC'
            &&
            sc.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            ) ||
            (searchCity === 'PR'
            && 
            pr.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            ) ||
            (searchCity === 'BA'
            &&
            ba.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            ) ||
            (searchCity === 'RJ'
            &&
            rj.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            ) ||
            (searchCity === 'RS'
            &&
            rs.map(card => {
              return (
                <div key={card.id} className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4 w-[360px]'>
                  <div>
                    <img src={card.img} className='rounded-t-lg sm:w-[360px]'/>
                  </div>
                  <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
                    <h1 className='font-bold sm:text-xl'>{card.name}</h1>
                    <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    <p className='flex items-center gap-2 opacity-70'>
                      <span><Location /></span>
                      <span>{card.city} - {card.state}</span>
                    </p>
                  </div>
                </div>
              )
            })
            )
            :
            (searchCity === 'geral'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]'  height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Brasil&t=&z=3&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            ) ||
            (searchCity === 'SP'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=S%C3%A3o%20Paulo,%20SP%20-%20Brasil&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            ) ||
            (searchCity === 'SC'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Florian%C3%B3polis&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            ) ||
            (searchCity === 'PR'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Curitiba&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            ) ||
            (searchCity === 'BA'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=salvador&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            ) ||
            (searchCity === 'RJ'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=rio%20de%20janeiro&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            ) ||
            (searchCity === 'RS'
            &&
            <div className='flex justify-center flex-1'>
              <iframe className='flex items-center rounded-xl justify-center sm:w-[800px]' height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=porto%20alegre&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            )
          }
        </div>
      </div> 
    </div>
  )
}