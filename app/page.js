"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../lib/index";
import Footer from "./components/Footer";
import TextBlock from "./components/TextBlock";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ImageGallery from "./components/ImageGallery";
import SplitBlock from "./components/SplitBlock";
import CardCollection from "@/app/components/CardCollection";
import Teaser from "./components/Teaser";

export default function Home({ params }) {
  const [entry, setEntry] = useState({});
  const [loading, SetLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs(
      "home_page",
      ["hero_banner", "page_content.image_gallery.gallery_item.page"]
    );
    console.log("homepage:", entry[0][0]);
    setEntry(entry[0][0]);
    SetLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (loading) {
    return;
  }

  return (
    <>
      <NavBar />

      <Hero content={entry.hero_banner[0]} />

      {entry.page_content?.map((item, index) => {
        if (item.hasOwnProperty("text_block")) {
          console.log(entry.page_content[index])
          return <TextBlock key={index} content={item.text_block} />;
        }
        if (item.hasOwnProperty("image_gallery")) {
          console.log(entry.page_content[index])
          return <ImageGallery key={index} content={item.image_gallery} />;
        }
        if (item.hasOwnProperty("split_block")) {
          console.log(entry.page_content[index])
          return <SplitBlock key={index} content={item.split_block} />;
        }
        if (item.hasOwnProperty("card_collection")) {
          console.log(entry.page_content[index])
          return <CardCollection key={index} content={item.card_collection} />;
        }
        if (item.hasOwnProperty("teaser")) {
          console.log(entry.page_content[index])
          return <Teaser content={item.teaser} key={index}  />;
        }
      })}
      <Footer />
    </>
  );
}
