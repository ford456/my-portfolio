export default function GallerySection({ section }) {
  return (
    <section className={`${section.layout} px-15 mx-1 mt-5 py-12`}>
      {section.images?.map((image, index) => (
        // <img
        //   key={index}
        //   src={image}
        //   alt={`${section.title || "Gallery"} ${index + 1}`}
        //   className="w-full rounded-xl object-cover"
        // />
        <div key={index}
                    className={`${image.className || "aspect-square"} rounded-xl overflow-hidden bg-surface-container-highest group relative`}>
                    <img className="w-full h-full object-cover "
                        alt={`${image.title || "Gallery"} ${index + 1}`}
                        src={image.src}/>
                </div>
      ))}
    </section>
  );
}