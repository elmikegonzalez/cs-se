import React from 'react'
import ReactMarkdown from 'react-markdown'


export default function Video({ content }) {
    // console.log(content)
    let position_css

    // let autoPlay = false;
    // let loop = false;
    // let muted = false;
    //
    // if (content.muted === true){
    //     autoPlay = true;
    // }
    // if (content.loop === true){
    //     loop = true;
    // }
    // if (content.muted === true){
    //     muted = true;
    // }

    if (content.styles && content.styles?.text_align === 'Top Left'){
        position_css = 'pt-24 ml-8 items-start justify-start'
    }
    else if (content.styles && content.styles?.text_align === 'Top Center') {
        position_css = 'pt-24 mx-auto text-center items-start justify-center'
    }
    else if (content.styles && content.styles?.text_align === 'Top Right') {
        position_css = 'pt-24 ml-auto mr-8 text-right items-start justify-end'
    }
    else if (content.styles && content.styles?.text_align === 'Middle Left') {
        position_css = 'ml-8  items-center justify-start'
    }
    else if (content.styles && content.styles?.text_align === 'Middle Center') {
        position_css = 'mx-auto text-center items-center justify-center'
    }
    else if (content.styles && content.styles?.text_align === 'Middle Right') {
        position_css = 'ml-auto mr-8 text-right items-center justify-end'
    }
    else if (content.styles && content.styles?.text_align === 'Bottom Left') {
        position_css = 'ml-8 pb-8 items-end justify-start'
    }
    else if (content.styles && content.styles?.text_align === 'Bottom Center') {
        position_css = 'mx-auto pb-8 text-center items-end justify-center'
    }
    else if (content.styles && content.styles?.text_align === 'Bottom Right') {
        position_css = 'ml-auto pb-8 mr-8 text-right items-end justify-end'
    }

  return (
      <header className="relative flex items-center justify-center h-screen mb-12 overflow">
          <div className={`relative z-30 p-5 text-5xl text-evil bg-purple-300 bg-opacity-50 rounded-xl ${position_css}`} >
              <ReactMarkdown>
                  {content.overlay_text}
              </ReactMarkdown>
          </div>
              <video
                  // autoPlay = {...autoPlay}
                  // loop = {...loop}
                  // muted = {...muted}
                  muted
                  autoPlay
                  loop
                  className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
              >
                  <source
                      src={content.video.url}
                      type="video/mp4"
                  />
                  Your browser does not support the video tag.
              </video>
      </header>
  );
}
