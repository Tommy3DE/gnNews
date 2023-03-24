import React from 'react'
import Flag from 'react-world-flags'
import {data} from '../data/data'
import { Link } from 'react-router-dom'
const Sidebar = ({setCountry}) => {
  return (
    <div className='bg-slate-400 md:min-w-max px-10 flex flex-col border-r-2 border-white'>
      <h2 className='text-2xl py-3 text-center'>Wybierz kraj:</h2>
      <ul className='text-center text-xl'>
        {data.map(country=>(
          <li className='pb-4 flex flex-row w-auto justify-center' key={country.short}>
            <Link to={`/${country.short}`} onClick={()=>setCountry(`${country.short}`)}>
              {`${country.name}`}
            </Link>
            <Flag code={`${country.short}`} className='h-5 mx-2 my-auto'/>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default Sidebar