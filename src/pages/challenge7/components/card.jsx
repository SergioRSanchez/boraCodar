import { ReactComponent as Location } from '../assets/location.svg';

import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Card4 from '../assets/card4.png';
import Card5 from '../assets/card5.png';
import Card6 from '../assets/card6.png';
import Card7 from '../assets/card7.png';
import Card8 from '../assets/card8.png';
import Card9 from '../assets/card9.png';

export function Card() {

  // const cards = [
  //   {id: 0, name: 'O Python do vovô não sobe mais', img: Card1, city: 'São Paulo', state: 'SP'},
  //   {id: 1, name: 'Todo mundo null', img: Card2, city: 'Florianópolis', state: 'SC'},
  //   {id: 2, name: 'Hoje dou exception', img: Card3, city: 'Curitiba', state: 'PR'},
  //   {id: 3, name: 'Manda Node', img: Card4, city: 'Salvador', state: 'BA'},
  //   {id: 4, name: 'Só no back-end', img: Card5, city: 'São Paulo', state: 'SP'},
  //   {id: 5, name: 'Esse anel não é de Ruby', img: Card6, city: 'São Paulo', state: 'SP'},
  //   {id: 6, name: 'Pimenta no C# dos outros é refresco', img: Card7, city: 'Rio de Janeiro', state: 'RJ'},
  //   {id: 7, name: 'EnCACHE aqui', img: Card8, city: 'Porto Alegre', state: 'RS'},
  //   {id: 8, name: 'Não valho nada mas JAVA li', img: Card9, city: 'São Paulo', state: 'SP'},
  // ]

  return (
    <div className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4'>
      <div>
        <img src={cards.img} className='rounded-t-lg sm:w-[360px]'/>
      </div>
      <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
        <h1 className='font-bold sm:text-xl'>{cards.name}</h1>
        <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <p className='flex items-center gap-2 opacity-70'>
          <span><Location /></span>
          <span>{cards.city} - {cards.state}</span>
        </p>
      </div>
    </div>
  )
}