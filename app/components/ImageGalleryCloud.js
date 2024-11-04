"use client";
// import { CldImage } from 'next-cloudinary';

export default function ImageGalleryCloud({ content }) {
    // console.log(content)
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-8 px-8">
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">

        {/* ----- ITTERATING OVER ARRAY OF IMAGES COMING FROM CLOUDINARY ----- */}
        {content.cloud_gallery_item.map((item, index) => (
          <div key={index} className="relative">
            <a href={item.page.length > 0 ? item.page[0].url : "#"}>
            <div className="bg-cover bg-bottom aspect-h-1 aspect-w-1 flex items-center justify-center" {...item?.$?.image}>
                {/*<CldImage*/}
                {/*    src={item.image[0].url}*/}
                {/*    width="384" // Transform the image: auto-crop to square aspect_ratio*/}
                {/*    height="384"*/}
                {/*    alt={item.header}*/}
                {/*    crop={{*/}
                {/*         type: 'auto',*/}
                {/*         source: true*/}
                {/*     }}*/}
                {/*/>*/}
            </div>
            </a>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-white" {...item?.$?.header}>
              {item.header}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}