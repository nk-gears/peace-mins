import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import HeadFav from "../components/head-fav";
import Navbar from "../components/navbar";

const MyPeaceMins = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userInfo, setUserInfo] = useState(false);
  const [remindUser, setRemindUser] = useState(1);
  const [totalMinutes, setTotalMinutes] = useState("...");
  const [peaceDataList, setPeaceDataList] = useState([]);

  const saveUserPref = async (_pushEnabled) => {
    await fetch(`/api/users/${userInfo.id}`, {
      method: "PUT",
      contentType: "application/json",
      body: JSON.stringify({ push_enabled: _pushEnabled }),
    });
  };

  const showDetails = async () => {
    const dataList = await fetch(
      `/api/peace-minutes/${userInfo.id}?include=all`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const minutes = await dataList.json();

    setPeaceDataList(minutes.userMinutes);
  };

  const loadTotalMinutes = async (userInfo) => {
    return fetch(`/api/peace-minutes/${userInfo.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleChange = async (e) => {
    setRemindUser(e.target.checked === true ? 1 : 0);
    userInfo.push_enabled = e.target.checked === true ? 1 : 0;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    await saveUserPref(e.target.checked === true ? 1 : 0);
  };
  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined" && window.localStorage) {
      const _userInfo = localStorage.getItem("userInfo");

      async function fetchData() {
        const response = await loadTotalMinutes(JSON.parse(_userInfo));
        const jsonData = await response.json();
        setTotalMinutes(jsonData.totalMinutes);
      }

      if (_userInfo) {
        setIsRegistered(true);
        setUserInfo(JSON.parse(_userInfo));

        setRemindUser(userInfo.push_enabled);
        fetchData();
      } else {
        router.push("/register");
      }
    }

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
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <HeadFav />
        <title>5 mins for Peace</title>
        <meta name="description" content="5 mins for Peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="text-center px-6 py-0 m-0">
        <span className="block ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Click the bottom bell symbol to get reminder to Mark Minutes at 12 PM
          and 9 PM Everyday (Push Notification)
        </span>
      </div>
      <div className="flex items-center text-center w-full justify-center bg-white-50 pt-4 mt-2">
        <p>
          Peace Minutes from{" "}
          <span>
            {userInfo.user_org_name || userInfo.user_fullname} -{" "}
            {userInfo.user_city}{" "}
          </span>
        </p>
      </div>
      <div className="py-8 flex items-center justify-center bg-white-50 space-x-8">
        <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          <span className="absolute text-8xl left-0 top-0 text-purple-800 "></span>
          <span className="text-5xl text-brandBase ">
            <span className="h-screen">
              <Image
                src="/img/brand-logo-bird.png"
                alt="N"
                width="160"
                height="260"
                className="mx-auto animate-bounce   w-8 text-center align-center"
              />
            </span>
            <span className="animate-bounce">{totalMinutes}</span>
            <span className="block text-xl text-brandBase text-gray-400">
              minutes of peace
            </span>
          </span>
        </div>
      </div>

      {peaceDataList && peaceDataList.length == 0 && (
        <div className="text-center px-6 py-2 m-0">
          <button
            className="text-sm  bg-buttonBase-500 hover:bg-indigo-700 text-white font-bold py-1 px-8 rounded"
            onClick={showDetails}
          >
            Show Details
          </button>
        </div>
      )}

      {peaceDataList && peaceDataList.length > 0 && (
        <div className="m-4 justify-top flex items-center justify-center">
          <div className="bg1-gray-800 border-2 border1-gray-900 shadow-2xl rounded-lg">
            <ul className="p-6 text-gray-800 grid grid-cols-3 gap-3 text-sm">
              {peaceDataList.map((item) => {
                return (
                  <li className="hover:animate-pulse" key={item}>
                    <label className="inline-flex items-center text-justify px-2 py-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                      {item.event_date_str} &nbsp;
                      {item.event_time}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <p className="text-center px-6 py-2 m-0">
        Thanks for your contribution to spread the peace in and around the globe
        so far.
      </p>
      <p className="text-center m-0">
        Share this with your friends and relatives.
      </p>
      <div id="box" className="m-0 brightness-200 text-center"></div>

      <ul className="flex items-center justify-center items-center justify-center flex-1 pt-6 list-none lg:pt-0 lg:flex">
        <li className="mr-3 nav__item" key={5}>
          <Link
            href="/global-minutes"
            className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
          >
            Show Global Minutes
          </Link>
        </li>
      </ul>

      <Footer />
    </>
  );
};

export default MyPeaceMins;
