import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";
import { BsArrowDown } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
    <div className="w-full bg-center bg-cover h-[38rem]" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
    <div className="flex items-center justify-center w-full h-full bg-gray-900/40 flex-col">
    <div className="text-center">
    <h1 className="text-3xl font-bold text-white lg:text-6xl">Discover Your <span className="text-secondary">Dream</span> Home</h1>
    <p className="text-lg text-white">Explore our wide range of properties and find the perfect one for you.</p>
    </div>
    <div className="flex-grow-0 justify-center pt-20 md:pb-10 transition-all duration-1000 cursor-pointer">
    <BsArrowDown size={80} className="animate-bounce" color="white" />
    </div>
    </div>
    </div>
      <Search />
    </section>
  );
};

export default Banner;
