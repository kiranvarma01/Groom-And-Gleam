export default function MonthlySubscription() {
  return (
    <div className="pb-16">
      <div className="flex justify-center items-center w-screen pt-16">
        <h1 className="text-6xl  font-bold text-center">Choose your pricing plan</h1> 
      </div>
      <div className="flex justify-center items-center w-screen">
        <div className="flex flex-row justify-center items-center space-x-10 pt-12">
          <div className="border border-slate-400 px-10 py-10 text-center">
            <h1 className="text-xl pb-2">3 Month Plan</h1>
            <h1 className="text-5xl">₹1,900</h1>
            <h1 className="pb-2">Every month</h1>
            <h1>3 months subscription for full</h1>
            <h1 className="pb-2">Spa Access</h1>
            <h1 className="pb-3">Valid for 3 months</h1>
            <button className="px-20 py-2 border bg-pink-400 hover:bg-pink-300">Select</button>
            <div className="w-full border-t border-slate-400 my-4"></div>
            <div>
              <h1 className="pb-4">Full Spa</h1>
              <h1 className="pb-4">Medical Spray</h1>
              <h1>Fur Trimming</h1>
            </div>
          </div>
          <div className="border border-slate-400 px-10 py-10 text-center"> 
            <h1 className="text-xl pb-2">6 Month Plan</h1>
            <h1 className="text-5xl">₹1,800</h1>
            <h1 className="pb-2">Every month</h1>
            <h1>6 months subscription for full</h1>
            <h1 className="pb-2">Spa Access</h1>
            <h1 className="pb-3">Valid for 6 months</h1>
            <button className="px-20 py-2 border bg-pink-400 hover:bg-pink-300">Select</button>
            <div className="w-full border-t border-slate-400 my-4"></div>
            <div>
              <h1 className="pb-4">Professional Bath & Spa</h1>
              <h1 className="pb-4">Medical Spray</h1>
              <h1>Repetitive Grooming Expert</h1>
            </div>
          </div>
          <div className="border border-slate-400 px-10 py-10 text-center"> 
            <h1 className="text-xl pb-2">12 Month Plan</h1>
            <h1 className="text-5xl">₹1,600</h1>
            <h1 className="pb-2">Every month</h1>
            <h1>12 months subscription for full</h1>
            <h1 className="pb-2">Spa Access</h1>
            <h1 className="pb-3">Valid for 12 months</h1>
            <button className="px-20 py-2 border bg-pink-400 hover:bg-pink-300">Select</button>
            <div className="w-full border-t border-slate-400 my-4"></div>
            <div>
              <h1 className="pb-4">Personalized Assistance</h1> 
              <h1 className="pb-4">Repetitive Grooming Expert</h1>
              <h1>Free Basic Training</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
