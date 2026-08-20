import React from 'react'

import {
    FaInstagram,
    FaYoutube,
    FaFacebook
} from "react-icons/fa";

const iconMap = {
    Instagram: FaInstagram,
    Youtube: FaYoutube,
    Facebook: FaFacebook,
};

function SocialSection({section}) {

    
  return (

    <section className=" flex flex-col py-8 justify-center">
      {section.title && (
        <h2 className="text-3xl text-center font-bold mb-5">
          {section.title}
        </h2>
      )}
      
      <div className="flex flex-wrap gap-4 justify-center">
        {section.links?.map((social, index) => {
          const Icon = iconMap[social.icon];

                return (
                   
          <a
            key={index}
            href={social.url}
            target="_blank"
            
            className="px-5 py-3 rounded-full hover:scale-120 hover:text-white transition duration-300 ease-in-out"
          ><Icon size={32} /> 
            {/* {social.name} */}
          </a>);
        })}
      </div>
    </section>

  )
}

export default SocialSection
