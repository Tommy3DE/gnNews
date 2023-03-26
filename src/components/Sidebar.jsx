import React, { useState } from "react";
import Flag from "react-world-flags";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
const Sidebar = ({ setCountry, engVersion }) => {
  const [showDropdown, setShowDropdown] = useState(true);
  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <div className="bg-gray-200  px-10 flex flex-col border-r-2 border-gray-400 md:w-1/5 w-full">
      <h2 className="text-2xl py-3 text-center">
        {!engVersion ? "Wybierz kraj" : "Choose Country"}:
      </h2>
      <button onClick={handleDropdown} className={`text-4xl mx-auto py-2 active:scale-110 ${showDropdown && 'hidden'}`}>
        <BsArrowDownCircle/>
      </button>
      {showDropdown && (
        <>
          <ul className="text-center text-xl animate-fade-in">
            {data.map((country) => (
              <li
                className="pb-4 flex md:flex-row w-auto justify-center flex-col"
                key={country.short}
              >
                <Link
                  to={`/country/${country.short}`}
                  onClick={() => setCountry(`${country.short}`)}
                >
                  {!engVersion ? `${country.name}` : `${country.enName}`}
                </Link>
                <Flag code={`${country.short}`} className="h-5 mx-2 my-auto" />
              </li>
            ))}
          </ul>
          <button
            onClick={handleDropdown}
            className="text-4xl mx-auto py-2 active:scale-110"
          >
            <BsArrowUpCircle />
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
