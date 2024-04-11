"use client"

import Link from 'next/link';
import Image from 'next/image'

export default function Hero() {

    return (
      <div className='flex flex-col lg:flex-row items-center justify-between pb-20'>
        <div>
        <div className="text-7xl font-bold text-purple-950 pt-16 lg:pl-36 md:pl-16 space-y-3">
            <h1>Unleash</h1>
            <h1>Your Pet's</h1>
            <h1>Beauty</h1>
        </div>
        <div className="lg:pl-36 md:pl-16 pt-8  text-purple-950 text-2xl font-sans space-y-2"> 
            <h2>Home Pet Grooming Services |</h2>
            <h2>Hyderabad</h2>
        </div>
        <div className="lg:pl-36 md:pl-16 pt-6">
        <Link href="/book-online">
            <div className="bg-pink-400 text-black  py-3 px-6 rounded-full cursor-pointer hover:bg-white hover:border hover:border-pink-400 hover:text-pink-400 font-light transition duration-300 ease-in-out inline-flex items-center justify-center">
                Discover Now
            </div>
            </Link>
        </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end items-center pt-16 lg:pt-4"  style={{ position: 'relative', width: '100%', maxWidth: '750px', height: '560px' }}>
        <Image src="/petimage.webp" width={800} height={560} />
        </div>

      </div>
    );
  }