import React from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
const NewsCard = ({handleToggle}) => {
    return (
        <div className="absolute h-screen animate-fade-in z-10 bg-black bg-opacity-80" onClick={handleToggle}>
            <div className="m-auto h-auto w-4/5 bg-white rounded-md text-lg text-black flex flex-col p-3 place-content-center border-black border-2 ">
                <button className='text-4xl text-left w-full flex justify-end hover:text-red-500' onClick={handleToggle}>
                    <AiOutlineCloseSquare />
                </button>
                <h1 className="text-xl">Co sprawiło mi trudność?</h1>
                <h3 className="text-md text-gray-500">
                    Najmniej pewnie czułem się korzystając z Reduxa. Korzystałem wcześniej
                    z tej biblioteki, ale nie jest ona moją ulubioną. Początkowo projekt
                    miał być napisany w Next13 ale z uwagi na stale wprowadzane zmiany i
                    sporo niedociągnięć bezpieczniejszym było pozostanie przy vanilla
                    React'cie.
                </h3>
                <h1 className="text-xl">Co sprawiło mi frajdę?</h1>
                <h3 className="text-md text-gray-500">
                    Zdecydowanie API. Bardzo proste i bezproblemowe, dzięki czemu łatwo
                    sobie z nim poradzić. No i oczywiscie korzystanie z Tailwind zamiast klasycznego css, co znacznie usprawniło tworzenie wersji mobilnej.
                </h3>
            </div>
        </div>
    )
}

export default NewsCard