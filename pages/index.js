import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import { NotificationList } from "../components/notificationList";
import HeadFav from "../components/head-fav";


const Home = () => {
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
      <Hero />
      <NotificationList />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle=""
        title="Good Wishes from Seniors - Yoga Day 2023">
       
      </SectionTitle>
      <Video />
      {/* <Cta /> */}
      <Footer />
      
    </>
  );
}

export default Home;