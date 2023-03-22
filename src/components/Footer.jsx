import React, {useState, useEffect} from 'react'

const Footer = () => {
    const [time, setTime ] = useState(new Date())
    useEffect (()=>{
        const timer = setInterval(()=> setTime(new Date()), 1000)
        return function cleanUp() {
            clearInterval(timer)
        }
    })
  return (
    <footer className='flex flex-row justify-between my-auto bg-blue-400 text-yellow-300 w-full h-10 '>
        <div>
            {time.toLocaleTimeString()}
        </div>
        <div>
            Copyright 
        </div>
        <div>
            Na stronie zjaduje się obecnie: <span className='text-xl text-red-600 font-bold '>X</span> Artykułów
        </div>
    </footer>
  )
}

export default Footer