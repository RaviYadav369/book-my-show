import React, { useState, useEffect } from "react";
import axios from "axios";
import Defaultlayout from "../layout/Default-layout";

import HeroCarouselComponent from "../components/HeroCarousel/HeroCarousel-Component";
import EntertainmentCardComponent from "../components/Entertainment/EntertainmentCard-Component";
import PostSliderComponent from "../components/PosterSlider/PostSlider-Component";

const Homepage = () => {
  const [recommendedMovies, setrecommendedMovies] = useState([]);
  const [premierMovies, setpremierMovies] = useState([]);
  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestTopPopularMovies = async () => {
      const getTopPopularMovies = await axios.get("/movie/popular");
      setrecommendedMovies(getTopPopularMovies.data.results);
    };

    requestTopPopularMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      setpremierMovies(getTopRatedMovies.data.results);
    };

    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const upCommingMovies = async () => {
      const getupCommingMovies = await axios.get("/movie/upcoming");
      setonlineStreamEvents(getupCommingMovies.data.results);
    };

    upCommingMovies();
  }, []);

  return (
    <>
      <HeroCarouselComponent />
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardComponent />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PostSliderComponent
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-premier-800 py-12 ">
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className="w-full h-full"
            />
          </div>
          <PostSliderComponent
            title="Premium Movies"
            subtitle="Brand new releases every friday"
            posters={premierMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8 ">
        <PostSliderComponent
          title="Online Streaming Event"
          subtitle="Brand new releases every friday"
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
};

export default Defaultlayout(Homepage);
