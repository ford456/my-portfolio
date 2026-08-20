import React from 'react'

function YoutubeSection({section}) {
  return (
    <>
    {section.Videos?.map((sections , index)=>(
        
    <section key={index} className="py-8 mx-20">
      <div className="aspect-video w-full overflow-hidden rounded-xl ">
        <iframe
          src={sections.url}
          title={sections.title || "YouTube video"}
          className="w-full h-full"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
    ))}
    </>
  )
}

export default YoutubeSection
