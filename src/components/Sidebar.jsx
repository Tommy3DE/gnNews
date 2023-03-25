import React from 'react'
import Flag from 'react-world-flags'
import {data} from '../data/data'
import { Link } from 'react-router-dom'
const Sidebar = ({setCountry, engVersion}) => {
  return (
    <div className='bg-gray-200 md:min-w-max px-10 flex flex-col border-r-2 border-gray-400'>
      <h2 className='text-2xl py-3 text-center'>{engVersion ? 'Wybierz kraj' : 'Choose Country'}:</h2>
      <ul className='text-center text-xl'>
        {data.map(country=>(
          <li className='pb-4 flex flex-row w-auto justify-center' key={country.short}>
            <Link to={`/${country.short}`} onClick={()=>setCountry(`${country.short}`)}>
              {!engVersion ?`${country.name}` : `${country.enName}`}
            </Link>
            <Flag code={`${country.short}`} className='h-5 mx-2 my-auto'/>
          </li>
          ))}
      </ul>
    </div>
  )
}

export default Sidebar