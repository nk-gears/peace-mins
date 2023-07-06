import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";
import { benefitOne, benefitTwo } from "../components/data";
import PeaceObjectives  from "../components/peaceObjective";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import { useRouter } from "next/router";
import HeadFav from "../components/head-fav";
import { useEffect, useState } from "react";
import Container from "../components/container";
import { UserLang_data } from "../context/context";
import { useContext } from "react";
import {homepage_en,homepage_ta } from "../components/content";

const Home = () => {
  const router = useRouter();

  const { userLanguage, setUserLanguage} = useContext(UserLang_data);
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState(homepage_en);
  
  // When mounted on client, now we can show the UI
  const saveUserLang=(langName)=>{
    window.localStorage.setItem("userLang",langName);
    setUserLanguage(langName);
  }
  useEffect(() => {
    setMounted(true);

    let _userLang = window.localStorage.getItem("userLang") || "100";

    if(router.query.lang){
      _userLang=router.query.lang
      window.localStorage.setItem("userLang",router.query.lang);
    } 
      if(_userLang=="ta")
         setContent(homepage_ta)
        else
        setContent(homepage_en)
      setUserLanguage(_userLang);
   
  }, [userLanguage]);

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

      {userLanguage == "100" && (
        <Container className="flex flex-wrap m-auto">

          <div className="flex items-center w-full m-auto lg:w-1/2">
            <div class="inline-flex shadow-sm rounded-md m-auto" role="group">
              <button
                type="button" onClick={()=>{
                  saveUserLang('ta');
                }}
                class="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-indigo-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center "
              >
               
               தமிழ்
              </button>
              <button  onClick={()=>{
                  saveUserLang('en');
                }}
                type="button"
                class="rounded-r-md border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-indigo-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center"
              >
               
                English
              </button>
            
            </div>
            
          </div>
        </Container>
      )}
 

      {userLanguage != "100" && (
        <>
          <Hero />

          <Container className="w-full ">
    
        


<div className="">
          <div className="flex flex-col  w-full h-full px-8 rounded-2xl py-8 ">
          <p className="text-2xl  leading-normal "></p>
          <Image
                src="/img/brand-logo-bird.png"
                alt="N"
                width="300"
                height="300"
                className="animate-bounce w-12 "
              />
            <p className="pl-3 pr-3 mb-2 text-brandBase bg-indigo-100 rounded-md ring-indigo-50 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200 text-3xl py-4 text-lg leading-normal text-gray-900 lg:text-xl xl:text-xl dark:text-gray-900">
           
          
          {content.page2_top}</p>
          </div>
   

          

           
          </div>
     
    
             
          </Container>
          <Benefits imgPos="left"  data={{...benefitTwo,title:content.title, desc:content.hero_right_bottom }} />
          <Benefits imgPos="left" data={{...benefitOne,title:content.objective, desc:content.hero_top_left + content.hero_top_right}} />
       

          <PeaceObjectives content={content}/>
          {/* <SectionTitle
            pretitle=""
            title="Good Wishes from Seniors - Yoga Day 2023"
          ></SectionTitle> */}
          {/* <Video /> */}
          <Footer />
        </>
      )}

       

      {/* <Cta /> */}
    </>
  );
};

export default Home;
