import React from "react";
import {
  picture,
  feb2024,
  mar2024,
  apr2024,
  may2024,
  june2024,
  july2024,
  aug2024,
  sept2024,
  oct2024,
  nov2024,
  dec2024,
  jan2025,
} from "../assets";
import Carousel from "./Carousel";
import { ImageCard } from "./ImageCard";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    {
      Image: feb2024,
      title: "February 2024",
      description: "Our second meet-up in Victorias led to a heartfelt confession.",
    },
    {
      Image: mar2024,
      title: "March 2024",
      description: "Our first adventure to Patag together.",
    },
    {
      Image: apr2024,
      title: "April 2024",
      description: "Tried Bibimbap for the first time with you.",
    },
    {
      Image: may2024,
      title: "May 2024",
      description: "Reminiscing about how we first met here.",
    },
    {
      Image: june2024,
      title: "June 2024",
      description: "Met your high school friends for the first time.",
    },
    {
      Image: july2024,
      title: "July 2024",
      description: "We started spending more nights together at your place.",
    },
    {
      Image: aug2024,
      title: "August 2024",
      description: "The first time I gave you a bouquet of flowers.",
    },
    {
      Image: sept2024,
      title: "September 2024",
      description: "Feeling lucky to have such a goofy, loving, and caring girlfriend like you.",
    },
    {
      Image: oct2024,
      title: "October 2024",
      description: "Celebrated your 24th birthday at Cityscape!",
    },
    {
      Image: nov2024,
      title: "November 2024",
      description: "Our second trip to Patag, enjoying the campfire together.",
    },
    {
      Image: dec2024,
      title: "December 2024",
      description: "Spent more quality time before celebrating Christmas and New Year apart.",
    },
    {
      Image: jan2025,
      title: "January 2025",
      description: "Watched the sunset together at Seaside—one of our most unforgettable moments.",
    },
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Pictures
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description, index }) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate("/recap")}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Picture;
