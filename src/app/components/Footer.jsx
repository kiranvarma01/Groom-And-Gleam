import Link from 'next/link';

export default function Footer() {
  return (
    <div className='bg-purple-950'>
        <div className='flex justify-center items-center w-screen pt-10 text-white text-4xl space-x-10'>
            <h1>Groom & Gleam</h1>
        </div>
        <div className="text-white flex justify-center items-center pt-10 space-x-80">
          <h2>groomandgleam@gmail.com</h2>
          <h2>+91-7093323379</h2>
        </div>
        <div  className='text-white flex justify-center items-center w-screen space-x-80 py-10'>
          <div className=' '>
            <nav>
              <h1 className='text-xl pb-3 font-bold'>Comapny</h1>
              <ul className='underline'>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className=' pl-20'>
            <nav>
              <h1 className='text-xl pb-3 font-bold'>Services</h1>
              <ul className='underline'>
                <li>
                  <Link href="/book-online">Book Online</Link>
                </li>
                <li>
                  <Link href="/monthly-subscription">Subscribe</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </div>
  );
}
