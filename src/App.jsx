import './App.css';
import React, { useState, useEffect } from 'react';
import signUpDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "./assets/images/illustration-sign-up-mobile.svg";
import tick from "./assets/images/icon-success.svg";
import { ThanksPage } from './ThanksPage';

function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter a valid email");
      return;
    }

    setSubmitted(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (submitted) {
    return <ThanksPage />;
  }

  return (
    <div className='h-[100vh]'>
      <div className="w-full h-[100vh]] border-gray-400  lg:border-gray-400 sm:flex sm:justify-center sm:items-center  leading-normal">
        <div className=" bg-white h-auto flex flex-col-reverse justify-end gap-10 sm:flex-row sm:h-auto sm:w-84 sm:items-center sm:rounded-3xl">
          <div className="text-gray-900 font-bold mb-4 text-xl w-full px-6 sm:mb-2 sm:px-5">
            <h1 className="mb-6 text-[2.8rem] leading-10 sm:text-[3rem]">Stay updated!</h1>
            <p className="mb-1 text-gray-700 text-[19px] font-semibold py-5 sm:mt-[-25px] sm:text-[14px]">Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className='py-4 text-gray-700 leading-5 sm:py-1'>
              <li className='flex items-center gap-3 text-[12px] sm:text-[16px] mb-6 font-medium '>
                <img src={tick} className='w-8' alt=""/>
                Product discovery and building what matters
              </li>
              <li className='flex items-center gap-3 text-[16px] mb-6 font-medium'>
                <img src={tick} className='w-8' alt="" />
                Measuring to ensure updates are a success
              </li>
              <li className='flex items-center gap-3 text-[16px] mb-6 font-medium'>
                <img src={tick} className='w-8' alt="" />
                And much more!
              </li>
            </ul>

            <p className="font-semibold text-sm">Email Address</p>
            <input
              className="border-gray-500 font-normal rounded-lg border-2 px-4 w-[100%] py-4 mt-3 mb-8 sm:py-2"
              type="email"
              placeholder='email@company.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button onClick={handleSubmit} className="bg-slate-800 w-[100%] text-white py-5 px-3 text-sm rounded-lg sm:py-3" >Subscribe to monthly newsletter</button>
          </div>

          <div className="w-full sm:h-[100%] sm:w-full sm:p-3">
            <img className="w-full h-full object-cover" src={isSmallDevice ? signUpMobile : signUpDesktop} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
