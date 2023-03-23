import React from "react";
import {BiTable} from "react-icons/bi";
import {MdTableRows} from 'react-icons/md'
const Navbar = ({handleTiles, tiles}) => {
  return (
    <nav>
      <div className="flex flex-row justify-between h-20 bg-blue-500 px-10 text-white">
        <div className="my-auto">
            <h1 className="text-4xl font-bold  ">RealNews</h1>
        </div>
        <div className="my-auto text-2xl">
            <button type="button" onClick={handleTiles} className='cursor-pointer hover:scale-110 ' >
              {tiles ?  <MdTableRows/> : <BiTable/>}
            </button>
            <button>
              
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
