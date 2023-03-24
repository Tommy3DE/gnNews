import React from 'react'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom'
const Sidebar = ({setCountry}) => {
  return (
    <div className='bg-slate-400 w-1/6 px-10 flex flex-col border-r-2 border-white'>
      <h2 className='text-2xl py-3 text-center'>Wybierz kraj:</h2>
      <ul className='text-center text-xl'>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/us' onClick={()=>setCountry('us')}>
              Ameryka
            </Link>
            <Flag code='us' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/pl' onClick={()=>setCountry('pl')}>
              Polska
            </Link>
            <Flag code='pl' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/gb' onClick={()=>setCountry('gb')}>
              Wielka Brytania
            </Link>
            <Flag code='gb' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/de' onClick={()=>setCountry('de')}>
              Niemcy
            </Link>
            <Flag code='de' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/fr' onClick={()=>setCountry('fr')}>
              Francja
            </Link>
            <Flag code='fr' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/jp' onClick={()=>setCountry('jp')}>
              Japonia
            </Link>
            <Flag code='jp' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/it' onClick={()=>setCountry('it')}>
              Włochy
            </Link>
            <Flag code='it' className='h-5 mx-2 my-auto justify-between'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/au' onClick={()=>setCountry('au')}>
              Australia
            </Link>
            <Flag code='au' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/br' onClick={()=>setCountry('br')}>
              Brazylia
            </Link>
            <Flag code='br' className='h-5 mx-2 my-auto'/>
          </li>
          <li className='pb-4 flex flex-row w-auto justify-between'>
            <Link to='/ua' onClick={()=>setCountry('ua')}>
              Ukraina
            </Link>
            <Flag code='ua' className='h-5 mx-2 my-auto'/>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar