import Link from 'next/link';


export default function AboutUs() {
    return (
      <div>
        <div className="flex justify-center items-center w-screen pb-10">
            <h1 className="text-7xl font-bold text-purple-950">About Us</h1>
        </div>
        <div className="flex justify-center items-center w-screen pb-10">
            <h2 className="text-2xl font-bold text-purple-950">Who We Are</h2>
        </div>
        <div className="flex justify-center items-center w-screen ">
            <p className="text-l font-extralight  text-black max-w-2xl mx-4  text-center">As pet owners ourselves, we understand the importance of providing your pets with the very best care. That’s why we offer a wide range of pet grooming services that are both affordable and effective. Our team of experienced professionals goes above and beyond to make sure that your pet feels comfortable and relaxed during their grooming session. We genuinely care about the wellbeing of your pet and make sure they get the attention they deserve.</p>           
        </div>
        <div className='flex justify-center items-center w-screen pt-10'>
        <Link href="/book-online">
            <div className="bg-pink-400 text-black  py-3 px-6 rounded-full cursor-pointer hover:bg-white hover:border hover:border-pink-500 hover:text-pink-500 font-light transition duration-300 ease-in-out inline-flex items-center justify-center">
                Learn More
            </div>
            </Link>

        </div>
      </div>
    );
  }