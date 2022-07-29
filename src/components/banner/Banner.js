import React, { useEffect } from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import { fetcher } from "apiConfig/config";
import Button from "components/button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=00378cddb9a419427e807c3421af6a19`,
    fetcher
  );
  const movies = data?.results || [];
  // console.log(movies);
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg bg-opacity-70"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-5 h-wull text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Action
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Drama
          </span>
        </div>
        <Button
          className="font-medium"
          onClick={() => navigate(`/movies/${id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
