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
      <p><b></b></p>
    <p><b>Organizers</b></p>
    <p>Prajapita Brahma Kumaris Ishwariya Vishwa Vidyalaya</p>
    <p> Zonal HQ : “Shanti Dham” Q-96, 3rd Avenue, Anna Nagar, Chennai, Tamil Nadu, India. </p>
    <p> Intl. HQ : Pandav Bhawan, Mount Abu, Rajasthan </p>
  
  
    <p> பிரஜாபிதா பிரம்மா குமாரிகள் ஈஸ்வரிய விஷ்வ வித்யாலயா</p>
    <p> மண்டல தலைமையகம்: “சாந்தி தாம்” Q-96, 3வது அவென்யூ, அண்ணா நகர், சென்னை, தமிழ்நாடு, இந்தியா.</p>
    <p>உள்நாட்டில் தலைமையகம்: பாண்டவ் பவன், மவுண்ட் அபு, ராஜஸ்தான்</p>
    <p>Website : <a className="text-indigo" href="https://brahmakumaris.com">brahmakumaris.com</a> </p>

      </div>

      
      </SectionTitle>
 
      <Footer />
      
    </>
  );
}

export default AboutUs;