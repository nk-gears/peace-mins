import Head from "next/head";
import Navbar from "../components/navbar";
import React, { useState } from 'react';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import Footer from "../components/footer";

import TimePicker from 'react-time-picker';
import Link from "next/link";

const MarkMinutes = () => {
    const [value, onChange] = useState('10:00');
  return (
    <>
      <Head>
        <title>5 mins for Peace</title>
        <meta
          name="description"
          content="5 mins for Peace"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />    
      <div className="flex justify-center items-center my-3">
      <h4>Mark your Peace Minutes for Today</h4>

 
        </div>
   <p className="flex justify-center items-center">
   Select the Time in which you remained in peace.
   </p>
      <div className="flex justify-center items-center my-6">
        
      <TimePicker onChange={onChange} value={value} /> 
      <div className="block">
      <button className="text-sm  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-8 rounded">
        Submit
        </button>
      </div>
      

</div>

<p className="p-2 m-2 m-4 justify-top flex items-center justify-center">You can also choose the pre-defined time from below</p>

<div className="m-4 justify-top flex items-center justify-center">

  <div className="bg1-gray-800 border-2 border1-gray-900 shadow-2xl rounded-lg">
  
    <div className="p-6 text-gray-800 grid grid-cols-3 gap-3 text-sm">

      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">04:00 AM</button>
      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">05:45 AM</button>
      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">07:00 AM</button>

      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">10:30 AM</button>
      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">12:00 PM</button>
      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">05:30 PM</button>

      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">07:30 PM</button>
      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">09:30 PM</button>
      <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5">10:00 PM</button>
      
    </div>
  </div>

</div>
<ul className="flex items-center justify-center items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
            
             <li className="mr-3 nav__item" key={5}>
                <Link href="/my-peace-mins" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    My Minutes
                </Link>
                |
              </li>
              <li className="mr-3 nav__item" key={5}>
                <Link href="/my-peace-mins" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    Global Minutes
                </Link>
                
              </li>
          </ul>


      <Footer />
      
    </>
  );
}

export default MarkMinutes;