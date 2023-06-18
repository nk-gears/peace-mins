import Head from "next/head";
import Navbar from "../components/navbar";
import Image from "next/image"
import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";


const GlobalPeaceMins = () => {
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
 
    
   <div className="inline-flex rounded-md shadow-sm container mx-auto xl:px-0 flex w-full items-center justify-center text-center" role="group">
  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-indigo-900 rounded-l-lg hover:bg-indigo-200 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
    Today
  </button>
  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-indigo-900 hover:bg-indigo-200 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg>
    This Week
  </button>
  <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-indigo-900 rounded-r-md hover:bg-indigo-200 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
    <svg aria-hidden="true" className="w-4 h-4 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clip-rule="evenodd"></path></svg>
    This Month
  </button>
</div>

<div className="py-24 flex items-center justify-center bg-white-50 space-x-8">
<div className="relative w-64 h-64 bg-purple-200 rounded-full flex justify-center items-center text-center p-5 shadow-xl">
<span className="absolute text-8xl left-0 top-0 text-purple-800 ">
</span>
<span className="text-5xl text-brandBase"><span>

<Image
                        src="/img/brand-logo-bird.png"
                        alt="N"
                        width="160"
                        height="260"
                        className="w-8 text-center align-center"
                      />  
                        
                    </span>951110
                    <span className="block text-xl text-brandBase text-gray-500"> minutes of peace globally</span>
                    
                    </span>
                   
                    
 
</div>
</div>
<p className="text-center px-6 py-0 m-0">
Thanks for your contribution to spread the peace in and around the globe so far.
</p>
<p className="text-center m-0">
Share this with your friends and relatives.

</p>

      <Footer />
      
    </>
  );
}

export default GlobalPeaceMins;