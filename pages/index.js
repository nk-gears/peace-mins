import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import HeadFav from "../components/head-fav";
import { useEffect, useState } from "react";
import Container from "../components/container";

const Home = () => {
  const [userLang, setUserLang] = useState("100");
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);

    const _userLang = window.localStorage.getItem("userLang") || "100";
    if (_userLang != "") {
      setUserLang(_userLang);
    }
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

      {userLang == "100" && (
        <Container className="flex flex-wrap m-auto">
          <div className="flex items-center w-full m-auto lg:w-1/2">
            <div class="inline-flex shadow-sm rounded-md m-auto" role="group">
              <button
                type="button" onClick={()=>{
                  setUserLang('ta');
                }}
                class="rounded-l-lg border border-gray-200 bg-white text-sm font-medium px-4 py-2 text-gray-900 hover:bg-indigo-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center "
              >
               
               தமிழ்
              </button>
              <button  onClick={()=>{
                  setUserLang('en');
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

      {userLang == "en" && (
        <>
          <Hero />

          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
          <SectionTitle
            pretitle=""
            title="Good Wishes from Seniors - Yoga Day 2023"
          ></SectionTitle>
          <Video />
          <Footer />
        </>
      )}

      {userLang == "ta" && (
        <>
          <Hero />

          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
          <SectionTitle
            pretitle=""
            title="Good Wishes from Seniors - Yoga Day 2023"
          ></SectionTitle>
          <Video />
          <Footer />
        </>
      )}

      {/* <Cta /> */}
    </>
  );
};

export default Home;
