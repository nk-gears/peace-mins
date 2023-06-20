import Head from "next/head";
import Navbar from "../components/navbar";

import Footer from "../components/footer";

import HeadFav from "../components/head-fav";
import Faq from "../components/faq";
import SectionTitle from "../components/sectionTitle";


const FaqPage = () => {
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
        title="Frequent asked Questions">
 
      </SectionTitle>
        <Faq/>
      <Footer />
      
    </>
  );
}

export default FaqPage;