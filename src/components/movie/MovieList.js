import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config/config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=00378cddb9a419427e807c3421af6a19&language=en-US&page=1

const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=00378cddb9a419427e807c3421af6a19`,
    fetcher
  );
  useEffect(() => {
    // if(error) ;
    if (data && data.results) setMovies(data.results);
  }, [data]);
  // console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies &&
          movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide>
              <MovieCard item={item} key={item.id}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
