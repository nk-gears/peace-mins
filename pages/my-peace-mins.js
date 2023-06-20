import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";

import HeadFav from "../components/head-fav";
import Link from "next/link";
import ButtonGroupPM from "../components/segmentedControl";

const MyPeaceMins = () => {
  return (
    <>
      <Head><HeadFav />
        <title>5 mins for Peace</title>
        <meta name="description" content="5 mins for Peace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div
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
      </div>

      <div className="flex items-center text-center w-full justify-center bg-white-50 pt-4 mt-2">
      <p>Today</p>
      </div>
      <div className="py-8 flex items-center justify-center bg-white-50 space-x-8">
        <div className="relative w-64 h-64 bg-indigo-100 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
          <span className="absolute text-8xl left-0 top-0 text-purple-800 "></span>
          <span className="text-5xl text-brandBase">
            <span>
              <Image
                src="/img/brand-logo-bird.png"
                alt="N"
                width="160"
                height="260"
                className="w-8 text-center align-center"
              />
            </span>
            951110
            <span className="block text-xl text-brandBase text-gray-400">
              minutes of peace
            </span>
          </span>
        </div>
      </div>
      <p className="text-center px-6 py-0 m-0">
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
            className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
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
