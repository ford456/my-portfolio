// components/analytics/ProjectViewTracker.jsx

"use client";

import { useEffect } from "react";
import { trackProjectView } from "../../app/lib/analytics";

export default function ProjectViewTracker({ project }) {
  const { id, slug, title } = project ?? {};

  useEffect(() => {
    if (id == null) return;

    trackProjectView({ id, slug, title });

  }, [id, slug, title]);

  return null;
}
