import React from "react"

export default function Teaser ({content},key=1) {
  return (
      <div id={`teaser-${key}`} className="teaser" >
              <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                  <div className="mx-auto max-w-2xl text-center">
                      {...content?.heading}
                      <br/>
                      {...content?.content}
                      <br/>
                      <img src={content?.image[0].image.url} alt={...content?.image[0].image_alt_text}/>

                  </div>
              </div>
      </div>
  );
}
