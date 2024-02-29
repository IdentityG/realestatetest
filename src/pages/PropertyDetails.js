import React from "react";
import './video.css'

import { housesData } from "../data";
import { Link, useParams } from "react-router-dom";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  // console.log(house);

  return (
    <div className=" container mx-auto min-h-[800px] mb-14 pt-8">
      <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between ">
        <div>
          <h2 className="text-2xl font-semibold"> {house.name} </h2>{" "}
          <h3 className=" text-lg mb-4"> {house.address} </h3>{" "}
        </div>{" "}
        <div className=" mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className=" bg-green-500 text-white px-3 rounded-full">
            {" "}
            {house.type}{" "}
          </div>{" "}
          <div className=" bg-secondary text-white px-3 rounded-full">
            {" "}
            {house.country}{" "}
          </div>{" "}
          <div className=" bg-primary text-white px-3 rounded-full">
            {" "}
            {house.to}{" "}
          </div>{" "}
        </div>{" "}
        <div className=" text-3xl font-semibold text-primary">
          $ {house.price}{" "}
        </div>{" "}
      </div>{" "}
      <div className=" flex flex-col items-start gap-8 lg:flex-row">
        <div className=" max-w-[768px]">
          <div className=" mb-8">
            <img src={house.imageLg} alt="" />
          </div>
          <div className="flex gap-x-6 text-primary mb-6">
            <div className=" flex gap-x-2 items-center">
              <BiBed className=" text-2xl" />
              <div>{house.bedrooms} </div>
            </div>
            <div className=" flex gap-x-2 items-center">
              <BiBath className=" text-2xl" />
              <div>{house.bathrooms} </div>
            </div>
            <div className=" flex gap-x-2 items-center">
              <BiArea className=" text-2xl" />
              <div>{house.surface} </div>
            </div>
          </div>
          <div>{house.description} </div>
        </div>
        <div className=" flex-1 bg-white w-full mb-8 border-gray-300 rounded-lg px-6 py-8">
        <h2 className="text-center mb-4 text--2xl lg:text-3xl font-semibold text-primary">Talk to agent</h2>  
        <div className=" flex items-center gap-x-4 mb-8">
            <div className=" w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src={house.agent.image} alt="" />
            </div>
            <div>
              <div className=" font-bold text-lg">{house.agent.name} </div>
              <Link className=" text-primary text-sm">View Listing</Link>
            </div>
          </div>

          <form className="flex flex-col gap-y-2">
            <input
              className=" border border-gray-300 focus:border-primary outline-none rounded w-full px-4 h-14 text-sm"
              placeholder="Name*"
              type="text"
            />
            <input
              className=" border border-gray-300 focus:border-primary outline-none rounded w-full px-4 h-14 text-sm"
              placeholder="Email"
              type="text"
            />
            <input
              className=" border border-gray-300 focus:border-primary outline-none rounded w-full px-4 h-14 text-sm"
              placeholder="Phone"
              type="text"
            />
            <textarea
              className=" border border-gray-300 focus:border-primary outline-none rounded w-full p-4 h-36 text-sm text-gray-400"
              defaultValue="Hello, I am interested in your Modern ..."
              placeholder="Enter the message"
            ></textarea>

            <div className="flex gap-2">
              <button className=" bg-primary hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition">
                Send message
              </button>
              <button className=" border border-primary hover:bg-violet-800 text-primary hover:text-white rounded p-4 text-sm w-full transition">
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div class="p-5 sm:p-8 pt-12">
      <h2 class="mb-6 text-center text-3xl font-semibold text-primary lg:text-4xl">Explore Gallery</h2>
      <div class="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          <img src={house.gallery.img1}  class="hover:scale-110" />
          <img src={house.gallery.img2}  class="hover:scale-110" />
          <img src={house.gallery.img3}  class="hover:scale-110" />
          <img src={house.gallery.img4}  class="hover:scale-110" />
          <img src={house.gallery.img5}  class="hover:scale-110" />
          <img src={house.gallery.img6}  class="hover:scale-110" />
          <img src={house.gallery.img7}  class="hover:scale-110" />
          <img src={house.gallery.img2}  class="hover:scale-110" />
          <img src={house.gallery.img4}  class="hover:scale-110" />
          <img src={house.gallery.img3}  class="hover:scale-110" />
          <img src={house.gallery.img5}  class="hover:scale-110" />
      </div>
  </div>

  <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
  <div className="video-docker relative w-full h-full">
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src={house.video}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</section>

  </div>
  );
};

export default PropertyDetails;



