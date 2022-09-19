import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PostSliderComponent from "../components/PosterSlider/PostSlider-Component";
import { MovieContext } from "../context/Movie-Context";
import Movielayout from "../layout/Movie-layout";
import Slider from "react-slick";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import MovieHero from "../components/MovieHero/MovieHero-Component";
import CastCompinent from "../components/cast/CastCompinent";

function Moviepage() {
  const { id } = useParams();

  const { movie, setmovie } = useContext(MovieContext);

  const [cast, setcast] = useState([]);
  const [similarMovies, setsimilarMovies] = useState([]);
  const [Recommended, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setcast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimillarMovies = async () => {
      const getSimillarMovies = await axios.get(`/movie/${id}/similar`);
      setsimilarMovies(getSimillarMovies.data.results);
    };
    requestSimillarMovies();
  }, [id]);

  useEffect(() => {
    const requestrecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results);
    };
    requestrecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`./movie/${id}`);
      setmovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);

  const settingsCast = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlider: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlider: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-gray-800 font-bold text-2xl">About the movies</h3>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offer
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8 ">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offfer
                </h3>
                <p>Get 50% off up to INR RuPay card* on BookMyShow</p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8 ">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR RuPay card* on BookMyShow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* recommende Movies */}
      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <h2 className="text-gray-800 font-bold text-2xl mb-4">Cast and Crew</h2>
        <Slider {...settingsCast}>
          {cast.map((castData,index) => (
            <CastCompinent
              image={castData.profile_path}
              castName={castData.original_name}
              role={castData.character}
              key={index}
            />
          ))}
        </Slider>
      </div>

      <div className="my-8">
        <hr />
      </div>
      <div className="my-8">
        <PostSliderComponent
          config={settings}
          title="BMS XCLUSIVE"
          posters={Recommended}
          isDark={false}
        />
      </div>

      {/* recommendations movies */}
      <div className="my-8">
        <hr />
      </div>

      <div className="my-8">
        <PostSliderComponent
          config={settings}
          title="Similar Movies"
          posters={similarMovies}
          isDark={false}
        />
      </div>
    </>
  );
}

export default Movielayout(Moviepage);
