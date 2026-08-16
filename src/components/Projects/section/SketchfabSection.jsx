import React from 'react'

function SketchfabSection({section}) {
  return (
    <section className="py-8 px-20">
      {section.title && (
        <div className="mb-5">
        <h2 className="text-3xl font-bold mb-2 ">
          {section.title}
          
        </h2>
        <div className="w-35 h-1 bg-white"></div>
        </div>
      )}
      <div className="flex gap-6">
        {section.model?.map((items,i)=>(
      <div key={i} className="aspect-video w-full overflow-hidden rounded-xl">
        
        <iframe
          src={items.url}
          title={items.title || "Sketchfab 3D Model"}
          className="w-full h-full"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
        />
      </div>))}
      </div>
    </section>
  )
}

export default SketchfabSection
