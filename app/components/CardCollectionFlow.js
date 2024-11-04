import React from "react"
import {CldImage} from "next-cloudinary";

export default function CardCollectionFlow ({content}) {
    console.log(content.cards[0].$.content)
    return (
        <div className="max-w-full flex items-center justify-center place-items-center dark:bg-evil">
        <div className="grid auto-cols-max gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 p-7">
                {content.cards.map((card, index) => (
                <div key={`content.cards[index].$.content}`+Math.random()}
                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    {/*<a href="#">*/}
                    {/*    <img className="rounded-t-lg" src={card.cloud_image[0].url} alt=""/>*/}
                    {/*</a>*/}
                    <CldImage className="rounded-t-lg"
                        src={card.cloud_image[0].url}
                        // src="berlin"
                        width="384" // Transform the image: auto-crop to square aspect_ratio
                        height="384"
                        alt={card.image_alt_text}
                        crop={{
                            type: 'auto',
                            source: true
                        }}
                    />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.content}</p>
                        <a href="#"
                           className="bg-ironBlue inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                    ))}
        </div>
        </div>
    );
}
