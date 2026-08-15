'use client'
import { React, useState, useEffect } from 'react'


import HeroSection from "../components/Home/Herosection";
import ShowreelSection from './../components/Home/ShowreelSection';
import Linejob from "../components/Linejob";
import Skillsection from './../components/Home/Skillsection';
import Projectsection from './../components/Home/Projectsection';
import Contactsection from './../components/Home/Contactsection';

import Loading from './loading';

export default function Home() {


  const [loading, setLoading] = useState(true);


  const [Homedata, setSkilldata] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const startTime = Date.now();
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ids: ["25", "14", "22", "13"],
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          console.error("API Error:", {
            status: response.status,
            statusText: response.statusText,
            result,
          });

          throw new Error(
            result.message || `API Error: ${response.status}`
          );
        }

        setProjects(result.data);

      } catch (error) {
        console.error("fetchProjects:", error);
      } 
    }
    async function getHomeLand() {
      try {
        const response = await fetch("/api/homeland")
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();

        

        setSkilldata(result);
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
    fetchProjects();
    getHomeLand();
  }, []);


  if (loading) {
    return <Loading />
  }

  return (
    <>
      <HeroSection />
      <Linejob />
      <ShowreelSection data={Homedata.data} />
      <Skillsection data={Homedata.data.skills} />
      <Projectsection data={projects}/>
      <Contactsection />




    </>
  );
}
