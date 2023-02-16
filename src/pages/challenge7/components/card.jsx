import { ReactComponent as Location } from '../assets/location.svg';

import Card1 from '../assets/card1.png';

export function Card() {
  return (
    <div className='border-[1px] border-[#EAEAEA] rounded-lg flex flex-col gap-4'>
      <div>
        <img src={Card1} className='rounded-t-lg sm:w-[360px]'/>
      </div>
      <div className='px-4 pb-4 text-left max-w-[360px] flex flex-col gap-4'>
        <h1 className='font-bold sm:text-xl'>O Python do vovô não sobe mais</h1>
        <p className='opacity-70'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <p className='flex items-center gap-2 opacity-70'>
          <span><Location /></span>
          <span>São Paulo</span>
        </p>
      </div>
    </div>
  )
}