import React from 'react'

const Modal = () => {
  return (
    <div className='h-auto w-auto bg-transparent'>
        <div className='m-auto h-1/3 w-1/2 bg-white rounded-md text-lg text-black flex flex-col p-3 place-content-center border-black border-2'>
            <h1 className='text-lg font-bold'>
                Co sprawiło mi trudność?
            </h1>
            <h3 className='text-md '>
                Najmniej pewnie czułem się korzystając z Reduxa. Korzystałem wcześniej z tej biblioteki, ale nie jest ona moją ulubioną. Początkowo projekt miał być napisany w Next13 ale z uwagi na stale wprowadzane zmiany i sporo niedociągnięć bezpieczniejszym było pozostanie przy vanilla React'cie.  
            </h3>
            <h1 className='text-lg font-bold'>
                Co sprawiło mi frajdę?
            </h1>
            <h3 className='text-md '>
                Zdecydowanie API. Bardzo proste i bezproblemowe, dzięki czemu łatwo sobie z nim poradzić.
            </h3>
        </div>
    </div>
  )
}

export default Modal