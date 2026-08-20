function hasAnalyticsConsent() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const raw =
      localStorage.getItem("cookie_consent");

    if (!raw) {
      return false;
    }

    const consent = JSON.parse(raw);

    return consent.analytics === true;

  } catch {
    return false;
  }
}


export function trackEvent(
  eventName,
  params = {}
) {

  if (typeof window === "undefined") {
    return;
  }

  if (!hasAnalyticsConsent()) {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag(
    "event",
    eventName,
    params
  );
}


export function trackProjectView(project) {

  if (!project) return;

  trackEvent("project_view", {
    project_id: String(project.id ?? ""),
    project_slug: project.slug ?? "",
    project_name: project.title ?? "",
  });
}


export function trackContactClick({
  method,
  location = "unknown",
} = {}) {

  trackEvent("contact_click", {
    contact_method: method ?? "unknown",
    click_location: location,
  });
}


export function trackSocialClick({
  platform,
  location = "unknown",
} = {}) {

  trackEvent("social_click", {
    social_platform: platform ?? "unknown",
    click_location: location,
  });
}


export function trackResumeDownload({
  fileName = "resume.pdf",
  location = "unknown",
} = {}) {

  trackEvent("resume_download", {
    file_name: fileName,
    click_location: location,
  });
}


export function trackGenerateLead({
  source = "contact_form",
  location = "contact_page",
} = {}) {

  trackEvent("generate_lead", {
    lead_source: source,
    form_location: location,
  });
}