import Head from "next/head";
import Navbar from "../components/navbar";

import Footer from "../components/footer";
import SectionTitle from "../components/sectionTitle";


const Campaign = () => {
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
        title="About the Campaign">
 
      </SectionTitle>
      
      <Footer />
      
    </>
  );
}

export default Campaign;