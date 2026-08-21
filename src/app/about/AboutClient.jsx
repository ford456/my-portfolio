"use client";

import React, { useEffect, useState } from "react";

import Profilesection from "../../components/About/Profilesection";
import Biographycontent from "../../components/About/Biographycontent";
import Linejob from "../../components/Linejob";
import ExpTimeline from "../../components/About/ExpTimeline";
import SkillsAbout from "../../components/About/SkillsAbout";
import Certificatescontent from "../../components/About/Certificatescontent";
import CTAsection from "../../components/About/CTAsection";

import "../../styles/about.css";

export default function AboutClient() {
  const [AboutData, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAbouts() {
      try {
        const response = await fetch("/api/abouts");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();

        setAbout(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getAbouts();
  }, []);

  if (loading) {
    return <div className="h-dvh w-full" />;
  }

  if (!AboutData) {
    return <div>About data not found</div>;
  }

  return (
    <>
      <Profilesection
        data={AboutData.Profiles}
        fetchPriority="high"
      />

      <Linejob />

      <Biographycontent />

      <ExpTimeline data={AboutData.experiences} />

      <SkillsAbout data={AboutData.skills} />

      <Certificatescontent data={AboutData.certificates} />

      <CTAsection />
    </>
  );
}