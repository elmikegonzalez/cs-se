import React from 'react'
import ReactMarkdown from 'react-markdown'

export default function Video({ content }) {
    let autoPlay = false;
    let loop = false;
    let muted = false;

    if (content.muted === true){
        autoPlay = true;
    }
    if (content.loop === true){
        loop = true;
    }
    if (content.muted === true){
        muted = true;
    }
  return (
      <header className="relative flex items-center justify-center h-screen mb-12 overflow">
          <div className="relative z-30 p-5 text-5xl text-evil bg-purple-300 bg-opacity-50 rounded-xl">
              <ReactMarkdown>
                  {content.overlay_text}
              </ReactMarkdown>
          </div>
              <video
                  autoPlay = {...autoPlay}
                  loop = {...loop}
                  muted = {...muted}
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
