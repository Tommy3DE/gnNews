import React from "react";
import { BiTable } from "react-icons/bi";
import { MdTableRows } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = ({
  handleTiles,
  tiles,
  setShowModal,
  showModal,
  engVersion,
  handleLang,
}) => {
  return (
    <nav>
      <div className="flex flex-row justify-between h-20 bg-blue-500 px-10 text-white">
        <div className="my-auto">
          <Link to="/country/us">
            <h1 className="text-4xl font-bold">gnNews</h1>
          </Link>
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
            <div
              onClick={handleLang}
              className="cursor-pointer hover:scale-110 mx-1"
            >
              {engVersion ? "EN" : "PL"}
            </div>
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
