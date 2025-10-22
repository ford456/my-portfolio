

import Showreel from "../components/Showreel";
import HomeBanner from "../components/HomeBanner";
import HomeHeader from '../components/HomeHeader'
import Aboutme from "../components/Aboutme";
import Page from "../components/Contactban";
import { Suspense } from "react";
import Skills from "../components/Skills";

export default function Home() {

  return (
    <>
      
      <HomeBanner />
      <Skills/>
      {/* <HomeHeader /> */}
      <Showreel />
      <div className="justify-center lg:m-20">
      <Page/>
      </div>
      


    </>
  );
}
