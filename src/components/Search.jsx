import React, { useContext } from "react";

import CountryDropdown from "./CountryDropdown";
import PriceRangeDropdown from "./PriceRangeDropdown";
import PropertyDropdown from "./PropertyDropdown";

import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import { housesData } from "../data";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:backdrop:blur rounded-lg  ">
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className=" bg-primary hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-2xl  "
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
