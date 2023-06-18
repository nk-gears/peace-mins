import Head from "next/head";

import Navbar from "../components/navbar";

import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";


const AboutUs = () => {
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
      <SectionTitle
        pretitle=""
        title="About Brahma Kumaris">
 
      </SectionTitle>
      
      <Footer />
      
    </>
  );
}

export default AboutUs;