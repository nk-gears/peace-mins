import Head from "next/head";
import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Link from "next/link";

const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MarkMinutes = () => {
  const [peaceTime, setPeaceTime] = useState('10:30');
  const [peaceTimeAMPM, setPeaceTimeAMPM] = useState('AM');
  const [todayDate, setTodayDate] = useState(new Date());

   useEffect(() => {}, [peaceTime]);

  const renderTimeOptions = () => {
    const timeOptions = [];
    for (let hour = 0; hour <=12; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeOptions.push(
          <option key={formattedTime} value={formattedTime} >{formattedTime}</option>
        );
      }
    }
    return timeOptions;
  };


  const renderTimeOptionsAMPM = () => {
    const timeOptions = [];
    timeOptions.push(
      <option key={"AM"} value={"AM"}>{"AM"}</option>
    );
    timeOptions.push(
      <option key={"PM"} value={"PM"}>{"PM"}</option>
    );
    return timeOptions;
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setPeaceTime(selectedTime);

  };

  const handlePredefined = (event) => {
    const selectedTime = event.target.innerHTML;
    const parts=selectedTime.split(' ');
    setPeaceTime(parts[0]);
    setPeaceTimeAMPM(parts[1]);
    console.log(parts[0]);
  };

  const handleTimeAMPMChange = (event) => {
    const selectedTime = event.target.value;
    setPeaceTimeAMPM(selectedTime);
  };

  return (
    <>
      <Head>
        <title>5 mins for Peace</title>
        <meta name="description" content="5 mins for Peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="flex justify-center items-center my-3 text-indigo-900">
        <h4>Mark your Peace Minutes for Today - { todayDate.getDate() + ' ' + months[todayDate.getMonth()] + ' ' + todayDate.getFullYear()}</h4>
      </div>
      <p className="flex justify-center items-center">
        Select the Time in which you have remained in peace.
      </p>
      <div className="flex justify-center items-center my-6">
      <select id="timePicker" onChange={handleTimeChange} className="text-3xl text-purple-900" value={peaceTime}>
  {renderTimeOptions()}
</select>
<select id="timePickerAMPM" onChange={handleTimeAMPMChange} className="text-3xl ml-4" value={peaceTimeAMPM}>
  {renderTimeOptionsAMPM()}
</select>
      
      </div>

      <div className="mb-1 mr-10 ml-10 m-auto">
      <label htmlFor="org_members" className="m-auto flex justify-center items-center font-medium block mb-2 text-sm text-gray-600 dark:text-white">
           Total people gathered if you registered as group
        </label>
        <input
          type="number"
          id="org_members"
          name="org_members"
          size="200"
          defaultValue={1}
          min="1" max="1000"
          placeholder="Select no of people gathered."
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 justify-center items-center m-auto sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>


      <div className="block  flex justify-center items-center my-6">
          <button className="text-sm  bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-8 rounded">
            Submit
          </button>
        </div>

      <p className=" justify-top flex items-center justify-center">
        You can also choose the pre-defined time from below
      </p>

      <div className="m-4 justify-top flex items-center justify-center">
        <div className="bg1-gray-800 border-2 border1-gray-900 shadow-2xl rounded-lg">
          <div className="p-6 text-gray-800 grid grid-cols-3 gap-3 text-sm">
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              04:00 AM
            </button>
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              05:45 AM
            </button>
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              07:00 AM
            </button>

            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              10:30 AM
            </button>
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              12:00 PM
            </button>
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              05:30 PM
            </button>

            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              07:30 PM
            </button>
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              09:30 PM
            </button>
            <button className="font-mono bg-gray-300 hover:bg-indigo-400 rounded-full p-5" onClick={handlePredefined} >
              10:00 PM
            </button>
          </div>
        </div>
      </div>
      <ul className="flex items-center justify-center items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
        <li className="mr-3 nav__item" key={25}>
          <Link
            href="/my-peace-mins"
            className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
          >
            My Minutes
          </Link>
          |
        </li>
        <li className="mr-3 nav__item" key={15}>
          <Link
            href="/global-minutes"
            className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
          >
            Global Minutes
          </Link>
        </li>
      </ul>

      <Footer />
    </>
  );
};

export default MarkMinutes;
