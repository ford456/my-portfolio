"use client";

import { OPEN_PREFERENCES_EVENT } from "./PrivacyNotice";

export default function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))
      }
      className="cursor-pointer"
    >
      ตั้งค่าคุกกี้
    </button>
  );
}
