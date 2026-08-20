'use client'
import { React, useState, useEffect } from 'react'


import HeroSection from "../components/Home/Herosection";
import ShowreelSection from './../components/Home/ShowreelSection';
import Linejob from "../components/Linejob";
import Skillsection from './../components/Home/Skillsection';
import Projectsection from './../components/Home/Projectsection';
import Contactsection from './../components/Home/Contactsection';



export default function Home() {
const [loading, setLoading] = useState(true)
  const [Homedata, setHomedata] = useState(null);
  const [projects, setProjects] = useState([]);
useEffect(() => {
  async function fetchAllData() {
    try {
      setLoading(true)

      const [projectsResponse, homelandResponse] = await Promise.all([
        fetch("/api/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ids: ["25", "14", "22", "13"],
          }),
        }),

        fetch("/api/homeland"),
      ])

      const [projectsResult, homelandResult] = await Promise.all([
        projectsResponse.json(),
        homelandResponse.json(),
      ])

      if (!projectsResponse.ok) {
        throw new Error(
          projectsResult.message ||
          `Projects API Error: ${projectsResponse.status}`
        )
      }

      if (!homelandResponse.ok) {
        throw new Error(
          homelandResult.message ||
          `Homeland API Error: ${homelandResponse.status}`
        )
      }

      setProjects(projectsResult.data ?? [])
      setHomedata(homelandResult)

    } catch (error) {
      console.error("fetchAllData:", error)
    } finally {
      setLoading(false)
    }
  }

  fetchAllData()
}, [])

if (loading) return <div className='h-dvh w-h-dvh'></div>


  return (
    <>
      <HeroSection />
      <Linejob />
      <ShowreelSection data={Homedata?.data} />
      <Skillsection data={Homedata?.data.skills} />
      <Projectsection data={projects}/>
      <Contactsection />




    </>
  );
}
