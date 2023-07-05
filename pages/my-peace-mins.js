import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import HeadFav from "../components/head-fav";
import Link from "next/link";
import { useState,useEffect } from "react";

const MyPeaceMins = () => {

  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isRegistered,setIsRegistered]=useState(false);
  const [userInfo,setUserInfo]=useState(false);
  const [remindUser,setRemindUser]=useState(1);
  const [totalMinutes,setTotalMinutes]=useState('...');

  const saveUserPref=async (_pushEnabled)=>{
      await fetch(`/api/users/${userInfo.id}`, {
          method: 'PUT',
          contentType:"application/json",
          body: JSON.stringify({push_enabled:_pushEnabled})
        })
  }


  const loadTotalMinutes=async (userInfo)=>{

    return fetch(`/api/peace-minutes/${userInfo.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const handleChange=async (e)=>{
    setRemindUser(e.target.checked===true?1:0);
    userInfo.push_enabled=e.target.checked===true?1:0;
    localStorage.setItem('userInfo',JSON.stringify(userInfo));
    await saveUserPref(e.target.checked===true?1:0);

  }
  useEffect(() => {setMounted(true);
  
    if (typeof window !== "undefined" && window.localStorage) { 
      const _userInfo=localStorage.getItem('userInfo');
   
      async function fetchData() {
        const response=await loadTotalMinutes(JSON.parse(_userInfo));
        const jsonData = await response.json();
        setTotalMinutes(jsonData.totalMinutes);
      }

      if(_userInfo){
       setIsRegistered(true);
       setUserInfo(JSON.parse(_userInfo));

       setRemindUser(userInfo.push_enabled);
      fetchData();
       
      }else{
        router.push('/register');
      }
     };
     window.OneSignal = window.OneSignal || [];
     OneSignal.push(function() {
       OneSignal.init({
         autoRegister: true,
         appId: "7145473f-7782-4f88-a0d6-a5a81fda6092",
         safari_web_id: "web.onesignal.auto.0d6d1ede-d24a-45d0-ba73-2f88839c0735",
         notifyButton: {
           enable: true,
         },
         notificationClickHandlerMatch: 'origin',
         addListenerForNotificationOpened:function(event){
           console.log("OneSignal notification clicked11:", event);
         }
       });

      //  OneSignal.push(['addListenerForNotificationOpened', notificationData => {
      //    console.log('Received NotificationOpened:', notificationData);
      //    notifListen();
      //  }]);


     });
  
  }, [remindUser]);

  if (!mounted) return null;

  return (
    <>
      <Head><HeadFav />
        <title>5 mins for Peace</title>
        <meta name="description" content="5 mins for Peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* <div
        className="inline-flex rounded-md shadow-sm container mx-auto xl:px-0 flex w-full items-center justify-center text-center"
        role="group"
      >
        <button
          className="relative active inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150   first:rounded-l-md last:rounded-r-md"
          type="button"
        >
            <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          </svg>
          Overall
        </button>
        <button
          className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150   first:rounded-l-md last:rounded-r-md"
          type="button"
        >
          <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
          Today
        </button>
        <button
          className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150   first:rounded-l-md last:rounded-r-md"
          type="button"
        >
             <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 fill-current"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
          This Week
        </button>
      </div> */}

<div className="text-center px-6 py-0 m-0">
<span className="block ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Click the bottom bell symbol to get reminder to Mark Minutes at 12 PM and 9 PM Everyday (Push Notification)</span>
{/* <label className="block relative inline-flex items-center cursor-pointer">
<input type="checkbox"  checked={remindUser===1?"checked":""} className="block sr-only peer" onChange={handleChange}/>
<div className="block w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
</label> */}

</div>
      <div className="flex items-center text-center w-full justify-center bg-white-50 pt-4 mt-2">
      <p>Peace Minutes from <span>{userInfo.user_org_name || userInfo.user_fullname} - {userInfo.user_city} </span></p>
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
