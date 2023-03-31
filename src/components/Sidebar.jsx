import React, { useState } from "react";
import Flag from "react-world-flags";
import translations from "../locale/translations";
import { Link } from "react-router-dom";
import { BsArrowUpCircle, BsArrowDownCircle } from "react-icons/bs";
import { getCurrCountry } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";
import {data} from '../data/data'

const Sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const dispatch = useDispatch()

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const {language} = useSelector((state)=>state)  

  return (
    <div className="bg-gray-200  px-10 flex flex-col border-r-2 border-gray-400 md:w-1/5 w-full">
      <h2 className="text-2xl py-3 text-center">
        {translations[language].sidebar}:
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
                  onClick={() => dispatch(getCurrCountry(`${country.short}`))}
                >
                  {translations[language][country.short]}
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
