

import Showreel from "../components/Showreel";
import HomeBanner from "../components/HomeBanner";
import HomeHeader from '../components/HomeHeader'
import Aboutme from "../components/Aboutme";
import Page from "./contact/page";
import { Suspense } from "react";

export default function Home() {

  return (
    <>
      
      <HomeBanner />
      <Aboutme />
      <HomeHeader />
      <Showreel />
      <Page />


    </>
  );
}
