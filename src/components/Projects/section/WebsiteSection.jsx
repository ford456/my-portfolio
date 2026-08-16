export default function WebsiteSection({ section }) {
  return (
    <section className="pb-8 flex justify-center">
      

      {/* <div className="border rounded-xl overflow-hidden">
        <iframe
          src={section.url}
          title={section.title || "Website preview"}
          className="w-full h-[600px]"
        />
      </div> */}

      <a
        href={section.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-6 py-3 rounded-ful hover:text-blue-400 hover:underline hover:underline-offset-8"
      >{section.label && (
        <h2 className="text-lg font-bold mb-5">
          {section.label}
        </h2>
      )}
        
      </a>
    </section>
  );
}