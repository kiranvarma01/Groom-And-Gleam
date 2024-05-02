// components/Navbar.js
import Link from 'next/link';
import React from 'react';
import { getServerSession } from 'next-auth';
import '../globals.css';
import { options } from '../api/auth/[...nextauth]/options';


const Navbar = async () => {
  const session = await getServerSession(options)
  return (
    <>
    <nav className="flex justify-between items-center">
     <Link href="/">
       <div className="pt-7 pl-8 pb-1">
         <img src="/weblogo.png" alt="Website Logo" style={{ width: '148px', height: '67px' }} className="cursor-pointer" />
       </div>
    </Link>
      <ul className="text-slate-700 flex list-none gap-5 m-0 lg:pr-80 md:pr-10 sm:pr-10 text-md space-x-5 sm:space-x-2 md:space-x-3">
        <li className=" hover:text-gray-800 transition-colors cursor-pointer ">
          <Link href="/">Home</Link>
        </li>
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/book-online">Book Online</Link>
        </li>
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/monthly-subscription">Monthly Subscription</Link>
        </li>
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/contact">Contact</Link>
        </li>
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/faq">FAQ</Link>
        </li>
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/cart">Cart</Link>
        </li>
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/Signin">Signin</Link>
        </li>
        {session ? (
        <li className=" hover:text-gray-800 transition-colors cursor-pointer">
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        </li>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )
          }
      </ul>
    </nav>
     <div className="mx-auto my-0 h-0.25 bg-slate-800 " style={{ width: '95%', height: '1px' }}></div>
     </>
  );
};

export default Navbar;
