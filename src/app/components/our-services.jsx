import React from 'react';
import servicesData from "./servicesData.json"; // Ensure the path matches your project structure

export default function OurServices() {
    return (
      <div className="bg-purple-950 pb-10">
        <div className="flex justify-center items-center w-screen pt-20">
            <h1 className="text-7xl font-bold text-white">Our Services</h1>
        </div>
        <div className="flex justify-center items-center w-screen pb-10 pt-10">
            <h2 className="text-2xl font-bold text-white">We Put Your Pet First</h2>
        </div>
        <div className="flex justify-center items-center w-screen">
            <p className="text-l font-extralight text-white max-w-2xl mx-4 text-center">At Groom & Gleam, we know that your pet is more than just an animal, they are a part of your family. That’s why we offer professional grooming services and packages that cater specifically to their needs. Our experienced team understands the importance of keeping your pet healthy and happy, both inside and out.</p>
        </div>
        <div className="flex justify-center mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 max-w-6xl px-4">
            {servicesData.services.map((service, index) => (
              <div key={index} className="flex flex-col text-white text-left  space-y-4 max-w-md pr-4">
                <h3 className="text-4xl font-bold">{service.title}</h3>
                <p className='leading-relaxed font-extralight'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
