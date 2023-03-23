import React from "react";
import {BiTable} from "react-icons/bi";
import {MdTableRows} from 'react-icons/md'
import { BsFileEarmarkText } from 'react-icons/bs'
const Navbar = ({handleTiles, tiles, setShowModal, showModal}) => {
  

  return (
    <nav>
      <div className="flex flex-row justify-between h-20 bg-blue-500 px-10 text-white">
        <div className="my-auto">
            <h1 className="text-4xl font-bold  ">RealNews</h1>
        </div>
        <div className="my-auto text-2xl">
            {!showModal && <button type="button" onClick={handleTiles} className='cursor-pointer hover:scale-110 mx-1' >
              {tiles ?  <MdTableRows/> : <BiTable/>}
            </button>}
            <button type="button" className='cursor-pointer hover:scale-110 mx-1' onClick={()=>setShowModal(prev=>!prev)} >
                <BsFileEarmarkText/>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
