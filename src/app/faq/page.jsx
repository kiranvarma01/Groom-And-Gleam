import React from 'react';
import faqData from '../components/faq.json';

export default function FAQ() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="flex justify-center items-center w-full">
            <h1 className="text-7xl font-bold">FAQ</h1>
        </div>
        <div className="mt-12">
          {faqData.faq.map((item, index) => (
            <div key={index} className="mb-8 bg-purple-950 p-5 text-white">
              <h2 className="text-xl font-semibold pb-4 word-spacing-wide tracking-widest">{item.question}</h2>
              <p className="mt-2 text-md font-extralight">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
