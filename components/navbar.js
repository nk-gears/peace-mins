import Link from "next/link";
import Image from "next/image"
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";

import { UserLang_data } from "../context/context";
import { useContext } from "react";





const Navbar = () => {
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isRegistered,setIsRegistered]=useState(false);

  const { userLanguage, setUserLanguage} = useContext(UserLang_data);  

  useEffect(() => {setMounted(true);
    //if(!userLanguage) setUserLanguage('en');
    if(router.query.lang){

      window.localStorage.setItem("userLang",router.query.lang);
      setUserLanguage(router.query.lang);
    } 
 
    if (typeof window !== "undefined" && window.localStorage) { 
      const userInfo=localStorage.getItem('userInfo');
      console.log(userInfo);
      if(userInfo){
       setIsRegistered(true);
      }
     
     
     }


  
  }, [router.query.lang]);

  if (!mounted) return null;

 
  const navigation = [

   {title : "home",url:"/"},
   {title : "faq",url:"/faq"},
   {title : "about us",url:"/about-us"},
   {title : "resources",url:"/resources"},
   {title : "my minutes",url:"/my-peace-mins"},


  
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-xl font-medium text-baseLink-500 dark:text-gray-100">
                    <span>
                      <Image
                        src={userLanguage=="100"?"/img/brand-logo-en.png":"/img/brand-logo-" + userLanguage + ".png"}
                        alt="N"
                        width="250"
                        height="100"
                      />
                    </span>
                    {/* <span className="my-0 py-0 text-brandBase">5 Mins for Peace<span className="block text-black my-0 py-0 text-xs text-grey-dark m-0 p-0">meditate - transform your day - everyday</span> </span>
                     */}
                  </span>
                </Link>
                
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.url} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none">
                          {item.title}
                      </Link>
                    ))}
            
     
                    { isRegistered===false && 
                    <Link href="/register" className="w-full px-6 py-2 mt-3 text-center text-white bg-buttonBase-500 rounded-md lg:ml-5">         
                        Participate Now
                    </Link>
                    }

                    { isRegistered===true && 
                    <Link href="/mark-minutes" className="w-full px-6 py-2 mt-3 text-center text-white bg-buttonBase-500 rounded-md lg:ml-5">         
                        Mark Peace Minutes
                    </Link>
                    }
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href={menu.url} className="inline-block px-4 py-2 text-sm font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-baseLink-500 focus:text-baseLink-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu.title}
                </Link>
              </li>
            ))}
             
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">

        { isRegistered===false && 
          <Link href="/register" className="px-6 py-2 text-white bg-buttonBase-500 rounded-md md:ml-5">
              Participate Now
          </Link>
}
          { isRegistered===true && 
                      <Link href="/mark-minutes" className="px-6 py-2 text-white bg-buttonBase-500 rounded-md md:ml-5">
                      Mark Peace Minutes
                  </Link>
                    }

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
