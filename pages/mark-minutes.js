import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import Link from "next/link";
import HeadFav from "../components/head-fav";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const preDefinedTimeList = [
  "04:00 AM",
  "05:45 AM",
  "07:00 AM",
  "10:30 AM",
  "12:00 PM",
  "05:30 PM",
  "07:30 PM",
  "09:30 PM",
  "10:00 PM",
];

const MarkMinutes = () => {
  const router = useRouter();

  const [peaceTime, setPeaceTime] = useState("10:30");

  const [memberCount, setMemberCount] = useState(1);

  const [peaceTimeAMPM, setPeaceTimeAMPM] = useState("AM");
  const [todayDate, setTodayDate] = useState(new Date());
  const [mounted, setMounted] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userInfo, setUserInfo] = useState(true);
  const [selectedTimes, setSelectedTimes] = useState([]);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined" && window.localStorage) {
      const _userInfo = localStorage.getItem("userInfo");

      if (_userInfo) {
        setIsRegistered(true);
        setUserInfo(JSON.parse(_userInfo));

        try {
          window.OneSignal = window.OneSignal || [];
          OneSignal.push(function () {
            OneSignal.init({
              autoRegister: true,
              appId: "7145473f-7782-4f88-a0d6-a5a81fda6092",
              safari_web_id:
                "web.onesignal.auto.0d6d1ede-d24a-45d0-ba73-2f88839c0735",
              notifyButton: {
                enable: true,
              },
            });
          });
        } catch (ex) {}
      }
    }
  }, [peaceTime]);

  if (!mounted) return null;

  const renderTimeOptions = () => {
    const timeOptions = [];
    for (let hour = 1; hour <= 12; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        timeOptions.push(
          <option key={formattedTime} value={formattedTime}>
            {formattedTime}
          </option>
        );
      }
    }
    return timeOptions;
  };

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const savePeaceMinutesByItem = async (peaceTimeMins) => {
    const actualData = {
      user_id: userInfo.id,
      event_date: Date.now() / 1000,
      event_date_str: formatDate(Date.now()),
      event_time: peaceTimeMins,
      event_minutes: memberCount * 5,
      event_members: memberCount,
    };
    return fetch("/api/peace-minutes", {
      method: "POST",
      body: JSON.stringify(actualData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const savePeaceMinutes = async () => {
    const actualData = {
      user_id: userInfo.id,
      event_date: Date.now() / 1000,
      event_date_str: formatDate(Date.now()),
      event_time: peaceTime + " " + peaceTimeAMPM,
      event_minutes: memberCount * 5,
      event_members: memberCount,
    };
    return fetch("/api/peace-minutes", {
      method: "POST",
      body: JSON.stringify(actualData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const savePeaceTime = async (e) => {
    const response = await savePeaceMinutes();
    const jsonData = await response.json();
    //if(jsonData.peaceMinutes){
    router.push("/my-peace-mins");
    //}
  };

  const savePeaceTimeMultiple = async (e) => {
    for (let peaceMin of selectedTimes) {
      try {
        const response = await savePeaceMinutesByItem(peaceMin);
        await response.json();
      } catch (ex) {}
      if (selectedTimes.length - 1 == selectedTimes.indexOf(peaceMin)) {
        router.push("/my-peace-mins");
      }
    }

    //if(jsonData.peaceMinutes){

    //}
  };

  const renderTimeOptionsAMPM = () => {
    const timeOptions = [];
    timeOptions.push(
      <option key={"AM"} value={"AM"}>
        {"AM"}
      </option>
    );
    timeOptions.push(
      <option key={"PM"} value={"PM"}>
        {"PM"}
      </option>
    );
    return timeOptions;
  };

  const handleMemberCount = (event) => {
    const memberCount = event.target.value;
    setMemberCount(memberCount);
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    setPeaceTime(selectedTime);
  };

  const handlePredefined = (event) => {
    const selectedTime = event.target.innerHTML;
    const parts = selectedTime.split(" ");
    setPeaceTime(parts[0]);
    setPeaceTimeAMPM(parts[1]);
    console.log(parts[0]);
  };

  const handleTimeAMPMChange = (event) => {
    const selectedTime = event.target.value;
    setPeaceTimeAMPM(selectedTime);
  };

  const handleMultiTimePredefined = (event) => {
    const selectedTime = event.target.value;
    let finalItemSelected = "";
    // console.log(selectedTime);
    // console.log(event.target.checked);
    let finalSelected = [...selectedTimes];

    if (event.target.checked === false) {
      const itemIndex = finalSelected.indexOf(selectedTime);
      console.log(itemIndex);

      finalSelected.splice(itemIndex, 1);

      setSelectedTimes(Array.from(new Set([...finalSelected])));
    } else {
      setSelectedTimes([...finalSelected, selectedTime]);
      finalItemSelected = selectedTime;
    }

    if (event.target.checked === true) {
      const parts = selectedTime.split(" ");
      if (finalItemSelected != "") {
        setPeaceTime(parts[0]);
        setPeaceTimeAMPM(parts[1]);
      }
    }
  };

  return (
    <>
      <Head>
        <HeadFav />
        <title>5 mins for Peace</title>
        <meta name="description" content="5 mins for Peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="flex justify-center items-center my-3 text-baseLink-900">
        <h4>
          Mark your Peace Minutes for Today -{" "}
          {todayDate.getDate() +
            " " +
            months[todayDate.getMonth()] +
            " " +
            todayDate.getFullYear()}
        </h4>
      </div>
      {userInfo && userInfo.user_type === 2 && (
        <p className="flex justify-center items-center">
          Select the Time in which the group remained in peace.
        </p>
      )}

      {userInfo && userInfo.user_type === 1 && (
        <p className="flex justify-center items-center">
          Select the Time in which you have remained in peace.
        </p>
      )}

      {selectedTimes.length <= 1 && (
        <div className="flex justify-center items-center my-6">
          <select
            id="timePicker"
            onChange={handleTimeChange}
            className="text-3xl text-purple-900"
            value={peaceTime}
          >
            {renderTimeOptions()}
          </select>
          <select
            id="timePickerAMPM"
            onChange={handleTimeAMPMChange}
            className="text-3xl ml-4"
            value={peaceTimeAMPM}
          >
            {renderTimeOptionsAMPM()}
          </select>
        </div>
      )}
      {userInfo && userInfo.user_type === 2 && (
        <div className="mb-1 mr-10 ml-10 m-auto">
          <label
            htmlFor="org_members"
            className="m-auto flex justify-center items-center font-medium block mb-2 text-sm text-gray-600 dark:text-white"
          >
            Enter total people gathered.{" "}
            <span>Total minutes : {memberCount * 5}</span>
          </label>
          <input
            type="number"
            id="org_members"
            name="org_members"
            size="200"
            maxLength={1}
            defaultValue={1}
            min="1"
            max="1000"
            onChange={handleMemberCount}
            placeholder="Select no of people gathered."
            required
            className="bg-gray-50  border border-gray-300 text-gray-900 justify-center items-center m-auto sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      )}

      {selectedTimes.length > 1 && (
        <div className="block  flex justify-center items-center my-2">
          <div className="bg1-gray-800 border-2 border1-gray-900 shadow-2xl rounded-lg">
            <ul className="p-6 text-gray-800 grid grid-cols-3 gap-3 text-sm">
              {selectedTimes.map((item) => {
                return (
                  <li key={item} className=" text-buttonBase-500">
                    <span className="font-bold text-red-500 pr-2">✓</span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <div className="block  flex justify-center items-center my-4">
        {selectedTimes.length <= 1 && (
          <button
            onClick={savePeaceTime}
            className="text-sm  bg-buttonBase-500 hover:bg-indigo-700 text-white font-bold py-1 px-8 rounded"
          >
            Submit
          </button>
        )}

        {selectedTimes.length > 1 && (
          <button
            onClick={savePeaceTimeMultiple}
            className="text-sm  bg-buttonBase-500 hover:bg-indigo-700 text-white font-bold py-1 px-8 rounded"
          >
            Submit Multiple
          </button>
        )}
      </div>

      <p className=" justify-top flex items-center justify-center">
        You can also choose the pre-defined time from below
      </p>

      <div className="m-4 justify-top flex items-center justify-center">
        <div className="bg1-gray-800 border-2 border1-gray-900 shadow-2xl rounded-lg">
          <ul className="p-6 text-gray-800 grid grid-cols-3 gap-3 text-sm">
            {preDefinedTimeList.map((item) => {
              return (
                <li className="hover:animate-pulse" key={item}>
                  <input
                    type="checkbox"
                    id={item}
                    value={item}
                    className="hidden peer"
                    required=""
                    onChange={(e) => handleMultiTimePredefined(e)}
                  />
                  <label
                    htmlFor={item}
                    className="inline-flex items-center text-justify px-2 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    ✓ {item}
                  </label>
                </li>
              );
            })}
          </ul>

          {/* <div className="p-6 text-gray-800 grid grid-cols-3 gap-3 text-sm">
            {preDefinedTimeList.map((item) => {
              return (
                <button
                  key={item}
                  className="hover:animate-pulse  hover:text-white font-medium bg-gray-200 hover:bg-buttonBase-500 rounded-full p-5"
                  onClick={handlePredefined}
                >
                  {item}
                </button>
              );
            })}
          </div> */}
        </div>
      </div>
      <ul className="flex items-center justify-center items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
        <li className="mr-3 nav__item" key={15}>
          <Link
            href="/resources"
            className="animate-pulse inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
          >
            Resources
          </Link>
        </li>
        |
        <li className="mr-3 nav__item" key={25}>
          <Link
            href="/my-peace-mins"
            className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
          >
            My Minutes
          </Link>
          |
        </li>
        <li className="mr-3 nav__item" key={35}>
          <Link
            href="/global-minutes"
            className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
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
