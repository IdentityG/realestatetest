import React from "react";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const {
    price,
    image,
    address,
    bathrooms,
    bedrooms,
    description,
    type,
    country,
    surface,
    to
  } = house;
  return (
    <div className="bg-white shadow-1 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 w-full" src={image} alt="" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full px-3 text-white">{type}</div>
        <div className=" bg-secondary rounded-full text-white px-3 ">
          {country}
        </div>
        <div className={`rounded-full text-white px-3 ${to === 'Rent' ? 'bg-primary' : 'bg-red-500'}`}>
  {to}
</div>
      </div>
      <div className="text-lg font-semibold max-w-[260px] ">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-600 gap-1">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-lg font-semibold text-primary mb-4">
        $ {price}
      </div>
    </div>
  );
};

export default House;
