import React from "react";
import { BiTable } from "react-icons/bi";
import { MdTableRows } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCurrLanguage } from "../store/reducer";

//z uwagi na wybnrany layout appki (zawsze widoczne artykuły) 
// nie było sensu dodawac mechaniki z powrotem do main page'a
// wiem jak to zrobić z uyciem <Link to'/><Link>

const Navbar = ({
  handleTiles,
  tiles,
  setShowModal,
  showModal,
}) => {
  const dispatch = useDispatch()

  const handleLang = (lang) => {
    dispatch(getCurrLanguage(lang))
  };

  const {language} = useSelector((state)=>state)  

  return (
    <nav>
      <div className="flex flex-row justify-between h-20 bg-blue-500 px-10 text-white">
        <div className="my-auto">
            <h1 className="text-4xl font-bold">gnNews</h1>
        </div>
        <div className="my-auto text-2xl flex">
          {!showModal && (
            <button
              type="button"
              onClick={handleTiles}
              className="cursor-pointer hover:scale-110 mx-1"
            >
              {tiles ? <MdTableRows /> : <BiTable />}
            </button>
          )}
          {!showModal && (
          <>
            <div
              onClick={()=>handleLang('pl')}
              className="cursor-pointer hover:scale-110 mx-1"
              style={ language === 'pl' ? { fontWeight: 'bold' } : { color: 'lightgray' }}
            >
              PL
            </div>
            <div
              onClick={()=>handleLang('en')}
              className="cursor-pointer hover:scale-110 mx-1"
              style={ language === 'en' ? { fontWeight: 'bold' } : {color: 'lightgray'}}
              >
                EN
            </div>
            </>
          )}
          <button
            type="button"
            className="cursor-pointer hover:scale-110 mx-1 lg:block hidden"
            onClick={() => setShowModal((prev) => !prev)}
          >
            {!showModal ? (
              <BsFileEarmarkText />
            ) : (
              <button className="text-4xl">
                <AiOutlineCloseSquare />
              </button>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
