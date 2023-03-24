import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = ({setCountry}) => {
  return (
    <div className='bg-slate-400 w-1/6 px-10 flex flex-col border-r-2 border-white'>
      <h2 className='text-2xl py-3 text-center'>Wybierz kraj:</h2>
      <ul className='text-center text-xl'>
          <li className='pb-4'>
            <Link to='/us' onClick={()=>setCountry('us')}>
              Ameryka
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/pl' onClick={()=>setCountry('pl')}>
              Polska
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/uk' onClick={()=>setCountry('uk')}>
              Wielka Brytania
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/de' onClick={()=>setCountry('de')}>
              Niemcy
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/fr' onClick={()=>setCountry('fr')}>
              Francja
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/es' onClick={()=>setCountry('es')}>
              Hiszpania
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/it' onClick={()=>setCountry('it')}>
              Włochy
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/au' onClick={()=>setCountry('au')}>
              Australia
            </Link>
          </li>
          <li className='pb-4'>
            <Link to='/br' onClick={()=>setCountry('br')}>
              Brazylia
            </Link>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar