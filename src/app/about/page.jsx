'use client'
import React from 'react';
import HeroAbout from '../../components/Aboutcomponents/Hero'
import AboutMe from '../../components/Aboutcomponents/AboutMe';
import Aboutcover from '../../components/AboutCover';
import Profilesection from '../../components/About/Profilesection';
import Biographycontent from '../../components/About/Biographycontent';
import Linejob from '../../components/Linejob'
import ExpTimeline from './../../components/About/ExpTimeline';
import SkillsAbout from './../../components/About/SkillsAbout';
import Certificatescontent from './../../components/About/Certificatescontent';
import CTAsection from './../../components/About/CTAsection';

function AboutPage() {

    return (



        <>
            {/* <HeroAbout /> */}
            <Profilesection />
            <Linejob/>
            {/* <Aboutcover /> */}
            {/* <AboutMe /> */}
            <Biographycontent />
            <ExpTimeline/>
            <SkillsAbout/>
            <Certificatescontent/>
            <CTAsection/>
        </>

    )
}

export default AboutPage;