

import Showreel from "../components/Showreel";
import HomeBanner from "../components/HomeBanner";
import HomeHeader from '../components/HomeHeader'

import Page from "../components/Contactban";


import HeroSection from "../components/Home/Herosection";
import ShowreelSection from './../components/Home/ShowreelSection';
import Linejob from "../components/Linejob";
import Skillsection from './../components/Home/Skillsection';
import Projectsection from './../components/Home/Projectsection';
import Contactsection from './../components/Home/Contactsection';

export default function Home() {

  return (
    <>
      <HeroSection />
      <Linejob/>
      <ShowreelSection/>
      <Skillsection/>
      <Projectsection/>
      <Contactsection/>
      {/* <HomeBanner /> */}
      {/* <Skills/> */}
      {/* <HomeHeader /> */}
      {/* <Showreel /> */}
      {/* <div className="justify-center lg:m-20">
      <Page/>
      </div> */}
      


    </>
  );
}
