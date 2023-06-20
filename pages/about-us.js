import Head from "next/head";

import Navbar from "../components/navbar";

import Footer from "../components/footer";

import HeadFav from "../components/head-fav";
import SectionTitle from "../components/sectionTitle";


const AboutUs = () => {
  return (
    <>
      <Head><HeadFav />
        <title>5 mins for Peace</title>
        <meta
          name="description"
          content="5 mins for Peace"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />    
      <SectionTitle
        pretitle=""
        title="About Brahma Kumaris">
      <div className="text-left">
      The Brahma Kumaris is a worldwide organisation dedicated to personal transformation and world renewal through the power of meditation. It has an ongoing interest in developing programs that empower the individual. Originally founded in India in 1937, there are one million students world-wide across 110 countries.
      </div>
      <a href="https://brahmakumaris.org.au/new/about-us/" target="_blank" >Visit the Official Site here</a>
      
      </SectionTitle>
 
      <Footer />
      
    </>
  );
}

export default AboutUs;