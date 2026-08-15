'use client'
import React, { useEffect, useState } from 'react';

import Profilesection from '../../components/About/Profilesection';
import Biographycontent from '../../components/About/Biographycontent';
import Linejob from '../../components/Linejob'
import ExpTimeline from './../../components/About/ExpTimeline';
import SkillsAbout from './../../components/About/SkillsAbout';
import Certificatescontent from './../../components/About/Certificatescontent';
import CTAsection from './../../components/About/CTAsection';

import Loading from "../loading"

function AboutPage() {
    const [AboutData, setAbout] = useState([]);
      const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAbouts() {
            const startTime = Date.now();
            try {
                const response = await fetch("/api/abouts")
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();



                setAbout(result.data);
            } catch (error) {
                console.error(error);
            }
            finally {
                const elapsed = Date.now() - startTime;
                const remaining = Math.max(3000 - elapsed, 0);

                setTimeout(() => {
                    setLoading(false);
                }, remaining);
            }
        }

        getAbouts();
    }, []);

  if (loading) {
    return <Loading />
  }

    
    return (



        <>
            {/* <HeroAbout /> */}
            <Profilesection data={AboutData.Profiles} />

            <Linejob />
            {/* <Aboutcover /> */}
            {/* <AboutMe /> */}
            <Biographycontent />
            <ExpTimeline data={AboutData.experiences} />
            <SkillsAbout data={AboutData.skills} />
            <Certificatescontent data={AboutData.certificates} />
            <CTAsection />
        </>

    )
}

export default AboutPage;