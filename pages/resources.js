import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image";
import Footer from "../components/footer";
import HeadFav from "../components/head-fav";

const RegThanks = () => {
  return (
    <>
      <Head>
        <title>Guided Resources for Peace Practicing</title>
        <meta
          name="description"
          content="Guided Resources for Peace Practicing"
        />
        <HeadFav />
      </Head>

      <Navbar />

      <div className="flex flex-col items-center justify-top px-6 mx-auto  lg:py-0">
        <div className=" w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h3 className="text-xl font-normal leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Resources

            </h3>
            <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          
          <p className="mb-4 font-light">
            Checkout the following links includes guided peace commentry
         </p>
         
          <a target="_blank" href="https://www.youtube.com/watch?v=sxHRuA7xgbE&list=PLVcx92cvpgdjb7_bsZjEe8a1yUnonTsvb&index=4" className="py-4 inline-flex items-center font-medium text-baseLink-600 hover:text-baseLink-800 dark:text-baseLink-500 dark:hover:text-baseLink-700">
              Peace - Mediatation Playlist - Tamil 
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>


          <a target="_blank"  href="https://www.youtube.com/watch?v=TDxksbZnPT8" className="py-4 inline-flex items-center font-medium text-baseLink-600 hover:text-baseLink-800 dark:text-baseLink-500 dark:hover:text-baseLink-700">
              Guided Commentry - English 
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>

          <a target="_blank"  href="https://youtu.be/oZ_cPpFJaHQ" className="py-4 inline-flex items-center font-medium text-baseLink-600 hover:text-baseLink-800 dark:text-baseLink-500 dark:hover:text-baseLink-700">
              International Yoga Day - Tamil Song (2023)
              <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          
      </div>
  </div>
</section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegThanks;
