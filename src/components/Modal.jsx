import React from "react";

const Modal = () => {
  return (
    <div className="absolute h-screen animate-fade-in">
      <div className="m-auto h-auto w-1/2 bg-white rounded-md text-lg text-black flex flex-col p-3 place-content-center border-black border-2">
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
  );
};

export default Modal;
