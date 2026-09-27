"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import CookieOption from "./CookieOption";
import GoogleAnalytics from "../components/Analytics/GoogleAnalytics";

const CONSENT_VERSION = "1.0.0";
const CONSENT_EXPIRE_DAYS = 30;

const defaultPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
};

const STORAGE_KEY = "cookie-consent";

// localStorage is an external store: components subscribe to it
// instead of copying it into state inside an effect.
const listeners = new Set();

function subscribe(listener) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage unavailable (private mode, blocked site data)
  }

  listeners.forEach((listener) => listener());
}

// Returns the saved preferences, or null when missing, expired,
// from an old consent version, or unreadable.
function parseConsent(saved) {
  if (!saved) return null;

  try {
    const parsed = JSON.parse(saved);

    const isExpired =
      !parsed.expiration ||
      Date.now() > parsed.expiration;

    const isOldVersion =
      parsed.version !== CONSENT_VERSION;

    if (isExpired || isOldVersion) return null;

    return {
      necessary: true,
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
    };
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  // undefined on the server and during hydration, so nothing renders
  // until the browser value is known.
  const saved = useSyncExternalStore(
    subscribe,
    readConsent,
    () => undefined
  );

  const consent = saved === undefined ? null : parseConsent(saved);
  const preferences = consent ?? defaultPreferences;
  const showBanner = saved !== undefined && consent === null;

  const [showPreferences, setShowPreferences] = useState(false);
  const [draft, setDraft] = useState(defaultPreferences);

  const openPreferences = () => {
    setDraft(preferences);
    setShowPreferences(true);
  };

  const saveConsent = (consent) => {
    const now = Date.now();

    const expiration =
      now +
      CONSENT_EXPIRE_DAYS *
        24 *
        60 *
        60 *
        1000;

    const data = {
      necessary: true,
      functional: Boolean(consent.functional),
      analytics: Boolean(consent.analytics),

      version: CONSENT_VERSION,
      consentDate: now,
      expiration,
    };

    writeConsent(JSON.stringify(data));

    // gtag stays on the page after it loads, so a withdrawn consent
    // must be signalled to it directly.
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: data.analytics ? "granted" : "denied",
      });
    }

    setShowPreferences(false);
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      functional: false,
      analytics: false,
    });
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      functional: true,
      analytics: true,
    });
  };

  const acceptSelected = () => {
    saveConsent(draft);
  };

  return (
    <>
      <GoogleAnalytics
        enabled={preferences.analytics}
      />

      {/* Cookie Banner */}
      {showBanner && !showPreferences && (
        <div
          className="
            fixed z-9999

            inset-x-0 bottom-0
            md:inset-x-auto
            md:right-6 md:bottom-6
            md:w-130

            bg-black text-white

            p-5 sm:p-6

            rounded-t-2xl
            md:rounded-2xl

            shadow-2xl

            max-h-[85vh]
            overflow-y-auto
          "
        >
          <h2 className="text-xl font-semibold mb-3">
            การตั้งค่าคุกกี้
          </h2>

          <p className="text-sm text-white/70 leading-6">
            เว็บไซต์นี้ใช้คุกกี้ที่จำเป็น
            และอาจใช้คุกกี้จากบริการภายนอก
            เพื่อแสดงเนื้อหาและวิเคราะห์การใช้งานเว็บไซต์
          </p>

          <Link
            href="/privacy-policy"
            className="
              inline-block mt-3
              text-sm
              underline underline-offset-4
            "
          >
            อ่าน Privacy Policy
          </Link>

          <div
            className="
              grid grid-cols-1
              sm:grid-cols-3
              gap-2 mt-6
            "
          >
            <button
              onClick={rejectAll}
              className="
                px-4 py-3
                border border-white/30
                rounded-full
                text-sm
                hover:bg-white/10
                transition
              "
            >
              ปฏิเสธ
            </button>

            <button
              onClick={openPreferences}
              className="
                px-4 py-3
                border border-white
                rounded-full
                text-sm
                hover:bg-white/10
                transition
              "
            >
              ตั้งค่าการเลือก
            </button>

            <button
              onClick={acceptAll}
              className="
                px-4 py-3
                bg-white text-black
                rounded-full
                text-sm
                hover:bg-gray-200
                transition
              "
            >
              ยอมรับทั้งหมด
            </button>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div
          className="
            fixed inset-0
            z-10000

            bg-black/60
            backdrop-blur-sm

            flex
            items-end
            md:items-center
            justify-center

            p-0 md:p-5
          "
        >
          <div
            className="
              bg-black text-white

              w-full
              md:max-w-150

              max-h-[90vh]
              overflow-y-auto

              rounded-t-2xl
              md:rounded-2xl

              p-5 sm:p-6

              shadow-2xl
            "
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="text-2xl font-semibold">
                  เลือกการตั้งค่าคุกกี้
                </h2>

                <p className="text-sm text-white/60 mt-2 leading-6">
                  คุณสามารถเลือกประเภทคุกกี้ที่อนุญาตได้
                  โดยคุกกี้ที่จำเป็นจะเปิดใช้งานอยู่เสมอ
                </p>
              </div>

              <button
                onClick={() =>
                  setShowPreferences(false)
                }
                className="
                  text-white/60
                  hover:text-white
                  transition
                  text-2xl
                "
                aria-label="ปิด"
              >
                ×
              </button>
            </div>

            <div className="space-y-3 mt-6">
              <CookieOption
                title="คุกกี้ที่จำเป็น"
                description="
                  จำเป็นสำหรับการทำงานพื้นฐาน
                  ความปลอดภัย
                  และการจดจำการตั้งค่าคุกกี้
                "
                alwaysOn
              />

              <CookieOption
                title="คุกกี้เพื่อการใช้งาน"
                description="
                  ใช้สำหรับแสดงเนื้อหาจากบริการภายนอก
                  เช่น YouTube และ Sketchfab
                "
                checked={
                  draft.functional
                }
                onChange={() =>
                  setDraft((prev) => ({
                    ...prev,
                    functional:
                      !prev.functional,
                  }))
                }
              />

              <CookieOption
                title="คุกกี้เพื่อการวิเคราะห์"
                description="
                  ใช้ Google Analytics
                  เพื่อวิเคราะห์การเข้าชม
                  และช่วยปรับปรุงเว็บไซต์
                "
                checked={
                  draft.analytics
                }
                onChange={() =>
                  setDraft((prev) => ({
                    ...prev,
                    analytics:
                      !prev.analytics,
                  }))
                }
              />
            </div>

            <div
              className="
                flex flex-col
                sm:flex-row
                gap-3 mt-7
              "
            >
              <button
                onClick={() =>
                  setShowPreferences(false)
                }
                className="
                  flex-1
                  px-5 py-3
                  border border-white/30
                  rounded-full
                  hover:bg-white/10
                  transition
                "
              >
                กลับ
              </button>

              <button
                onClick={acceptSelected}
                className="
                  flex-1
                  px-5 py-3
                  bg-white text-black
                  rounded-full
                  font-medium
                  hover:bg-gray-200
                  transition
                "
              >
                บันทึกและยอมรับ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}