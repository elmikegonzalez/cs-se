import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'

export default function SplitBlock({ content }) {

  return (
    <div className="bg-white dark:bg-black">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h5
            className="mt-8 text-2xl font-bold text-center tracking-widest text-neutral-700 dark:text-white"
            {...content?.$?.text}
          >
            {content.text}
          </h5>
          <h1 className="text-7xl dark:text-white">
            <ReactMarkdown>
              {content.markdown}
          </ReactMarkdown>

          </h1>
        </div>
      </div>
    </div>
  );
}
