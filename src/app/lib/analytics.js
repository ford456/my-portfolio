export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") {
    console.warn("Google Analytics is not initialized");
    return;
  }

  window.gtag("event", eventName, params);
}


// ========================================
// Project View
// ========================================

export function trackProjectView(project) {
  if (!project) return;

  trackEvent("project_view", {
    project_id: String(project.id ?? ""),
    project_slug: project.slug ?? "",
    project_name: project.title ?? "",
  });
}


// ========================================
// Contact Click
// ========================================

export function trackContactClick({
  method,
  location = "unknown",
} = {}) {
  trackEvent("contact_click", {
    contact_method: method ?? "unknown",
    click_location: location,
  });
}


// ========================================
// Social Click
// ========================================

export function trackSocialClick({
  platform,
  url,
  location = "unknown",
} = {}) {
  trackEvent("social_click", {
    social_platform: platform ?? "unknown",
    social_url: url ?? "",
    click_location: location,
  });
}


// ========================================
// Resume Download
// ========================================

export function trackResumeDownload({
  fileName = "resume.pdf",
  location = "unknown",
} = {}) {
  trackEvent("resume_download", {
    file_name: fileName,
    click_location: location,
  });
}