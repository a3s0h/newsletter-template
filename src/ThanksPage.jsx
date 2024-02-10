import React from 'react'
import tick from "./assets/images/icon-success.svg";
import App from './App';

export const ThanksPage = () => {

  const handleClick = (e) =>{
    e.preventDefault();
    console.log("hello")
    return <App />
  }

  return (
    <div className="flex w-full  justify-center items-center bg-red h-[100vh]" >
    
    <div className= "p-[3rem] bg-white h-full flex justify-between  items-start flex-col  sm:rounded-3xl sm:h-[500px] sm:w-[400px] md:h-[500px] md:w-[30vmax]">
      <div>
        <img src={tick} className="w-[80px]"  alt="" />
        <h1 className="my-5 mt-12 text-slate-900 font-bold text-[6.3vmax] leading-[1] sm:text-[3vmax] sm:my-4">Thanks for subscribing!</h1>
        <p className="text-[2vmax] text-gray-800 mb-6 sm:text-[1vmax]" >
        A confirmation email has been sent to ash@loremcompany.com. 
  Please open it and click the button inside to confirm your subscription.
        </p>
        </div>
        <button onClick={handleClick} className="w-full mt-[10rem] text-1xl bg-slate-900 py-3 text-white font-semibold rounded-lg sm:mt-3">Dismiss message</button>
    </div>
    </div>
  )
}


// Thanks for subscribing!

  // A confirmation email has been sent to ash@loremcompany.com. 
  // Please open it and click the button inside to confirm your subscription.

//   Dismiss message