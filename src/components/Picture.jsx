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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: mar2024,
      title: "March 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: apr2024,
      title: "April 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: may2024,
      title: "May 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: june2024,
      title: "June 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: july2024,
      title: "July 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: aug2024,
      title: "August 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: sept2024,
      title: "September 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: oct2024,
      title: "October 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: nov2024,
      title: "November 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: dec2024,
      title: "December 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
    },
    {
      Image: jan2025,
      title: "January 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, possimus!",
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
