

export default function HeadingSection({ section }) {
  return (
    <section className="pt-15 flex flex-col place-items-center ">
      <h3 className='text-4xl text-center font-bold pb-2'>{section.text}</h3>
<div className="w-25 h-1 bg-white"></div>
    </section>
  );
}