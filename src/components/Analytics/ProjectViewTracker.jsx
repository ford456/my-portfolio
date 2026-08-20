// components/analytics/ProjectViewTracker.jsx

"use client";

import { useEffect } from "react";
import { trackProjectView } from "@/lib/analytics";

export default function ProjectViewTracker({ project }) {

  useEffect(() => {
    if (!project) return;

    trackProjectView(project);

  }, [project?.id]);

  return null;
}