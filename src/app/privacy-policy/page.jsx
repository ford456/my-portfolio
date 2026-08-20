import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Patcharadol Portfolio",
  description: "Privacy Policy and information about how this website handles user data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#EEEDEF] text-black">
      <div className="max-w-4xl mx-auto px-6 py-32">

        <p className="text-sm text-gray-500 mb-4">
          Last updated: August 20, 2026
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-10 leading-7">

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Introduction
            </h2>
            <p>
              This website is a personal portfolio created to showcase
              projects, skills, experience, and related professional work.
              Your privacy is important, and this policy explains how
              information may be collected and used when you visit this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p>
              This website may collect information that you voluntarily
              provide, such as your name, email address, contact information,
              or message when submitting a contact form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Automatically Collected Information
            </h2>
            <p>
              Certain technical information may be collected automatically,
              such as browser type, device type, referring pages, and general
              usage information. This information may be used to understand
              website performance and improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Cookies
            </h2>
            <p>
              This website may use cookies or similar technologies for
              essential website functionality, preferences, analytics,
              or performance measurement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. How Information Is Used
            </h2>
            <p>
              Information collected through this website may be used to
              respond to inquiries, maintain website functionality, improve
              website performance, and understand how visitors interact
              with the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Third-Party Services
            </h2>
            <p>
              This website may contain links or embedded content from
              third-party services such as YouTube, Instagram, Sketchfab,
              or other platforms. These services may collect information
              according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              7. Data Security
            </h2>
            <p>
              Reasonable measures are taken to protect information submitted
              through this website. However, no method of transmission or
              electronic storage can guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              This Privacy Policy may be updated when website functionality,
              services, or data practices change. The latest revision date
              will be displayed at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              9. Contact
            </h2>
            <p>
              If you have questions regarding this Privacy Policy,
              please contact me through the contact information provided
              on this website.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-black/20">
          <Link
            href="/"
            className="underline underline-offset-4 hover:opacity-60 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}