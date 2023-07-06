import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/feature3.png";
import { useState,useEffect } from "react";
import { useContext } from "react";
import {homepage_en,homepage_ta } from "../components/content";
import { UserLang_data } from "../context/context";
import { useRouter } from "next/router";


const Hero = () => {


  const { userLanguage, setUserLanguage} = useContext(UserLang_data);
  const [content, setContent] = useState(homepage_en);
  const [mounted, setMounted] = useState(false);
  const [isRegistered,setIsRegistered]=useState(false);
  const router = useRouter();
  useEffect(() => {setMounted(true);
  
    if (typeof window !== "undefined" && window.localStorage) { 
      const userInfo=localStorage.getItem('userInfo');
      console.log(userInfo);
      if(userInfo){
       setIsRegistered(true);
      }
      if(router.query.lang){
        const _userLang=router.query.lang
        window.localStorage.setItem("userLang",router.query.lang);
        setUserLanguage(_userLang);
      } 

     }
     if(userLanguage=="ta")
         setContent(homepage_ta)
        else
        setContent(homepage_en)
  
  }, [userLanguage]);

  if (!mounted) return null;
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-2">

            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
             <span className="text-brandBase text-italic">{content.objective_1}</span> <span className="text-2xl text-brandBase block">{content.objective_2}</span>

            </h1>
            <p className="py-5 text-xl  leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
{content.hero_main}            </p>

          { isRegistered===false &&
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/register"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-buttonBase-500 rounded-md ">
{content.registerCaption}              </a>
            
            </div>
             }
             { isRegistered===true &&
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/mark-minutes"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-buttonBase-500 rounded-md ">
                {content.buttonTitle}
              </a>
            
            </div>
             }
          </div>
       
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
     
    </>
  );
}

 
export default Hero;