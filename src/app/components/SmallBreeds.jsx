import React from 'react';
import servicesData from "../components/services.json"; 

const SmallBreeds = () => {
 
  const smallBreedsData = servicesData.find(service => service['main-title'] === 'Small Breeds') || { services: [] };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">Small Breeds</h1>
      <div className="space-y-4">
        {smallBreedsData.services.map(service => (
          <div key={service.title} className="p-5 shadow-lg rounded-lg bg-white">
            <h2 className="text-xl font-semibold text-gray-700">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-gray-500">Duration: {service.duration}</p>
            <p className="text-gray-500">Price: {service.price}</p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors duration-200 ease-in-out">
              {service.linkText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallBreeds;
