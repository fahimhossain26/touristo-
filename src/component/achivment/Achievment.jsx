import React from 'react';

const Achievment = () => {
    return (
        <div className='mt-10 '>
            <Carousel5></Carousel5>
        </div>
    );
};

export default Achievment;


import { useEffect, useState } from "react";

export const Carousel5 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [{img: "https://i.postimg.cc/zXM3JvbD/1878484-Saint-Martins-Island-Bangladesh.jpg", title: "saintmartin", des: "St. Martin is generally known as “Narikel Zinzira” in Bengali, means 'Coconut Island' and this is the only coral reef island in Bangladesh.",}, {img: "https://i.postimg.cc/3wTFrYW6/chittagong-hill-tracts-photo.gif", title: "Chittagong Hills", des: "The Chittagong Hill Tracts, often shortened to simply the Hill Tracts and abbreviated to CHT, are a group of districts",}, {img: "https://i.postimg.cc/0ybmfhmj/Sundarban-Luxury-Ship.png", title: "Sundorban", des: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal."}];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
        <>
            <div className="  w-full h-60 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute   transform duration-1000 ease-linear"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>
                {/* text container here */}
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-5xl font-semibold mb-3 font-black ">{sliders[currentSlider].title}</h1>
                    <p className="text-xl md:text-base lg:text-lg font-serif  drop-shadow-lg  shadow-black">{sliders[currentSlider].des}</p>
                </div>
            </div>
            {/* slider container */}
            <div className="flex justify-center items-center gap-3 p-2">
                {/* sliders */}
                {sliders.map((slide, inx) => (
                    <img onClick={() => setCurrentSlider(inx)} key={inx}
                        src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-black p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                        alt={slide.title}/>
                ))}
            </div>
        </>
  )};
