import Head from "next/head";
import Navbar from "../components/navbar";

import Footer from "../components/footer";

import HeadFav from "../components/head-fav";
import SectionTitle from "../components/sectionTitle";


const Campaign = () => {
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
        title="About the Campaign"
           >
            <div className="text-left">
            The mission of this project is to enhance global peace by fostering individual peace.
            </div>
            <div className="text-left">
This aims to help individuals realize their responsibility in increasing world peace by maintaining a calm and peaceful state of mind. By dedicating at least 5 minutes each day to generating positive thoughts, individuals can cultivate inner peace and contribute to global harmony.
</div>


<div className="text-left">
The project follows the belief that small actions can create a significant impact. Participants are encouraged to spend 5 minutes daily engaging in quiet reflection and creating positive thoughts. By doing so, they not only increase their own inner peace but also contribute to world peace.
</div>

          
      </SectionTitle>
      
      <Footer />
      
    </>
  );
}

export default Campaign;