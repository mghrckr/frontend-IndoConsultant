import { fetchNews } from '@/store/actionCreators';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

export const Content = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const news = useSelector((state) => state.news.news);
  const filterNews = news.filter((n) => n.id === Number(id));
  const BASE_URL = `http://localhost:3000`;

  // Log all news items for debugging
  console.log(news, 'All news items');
  const currentNews = filterNews[0]; // Access the first matching news item

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto sm:text-center lg:max-w-2xl">
        {currentNews ? (
          <>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mt-14 mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                {currentNews.judul}
              </h2>
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="object-cover w-full h-40 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src={BASE_URL + currentNews.gambar}
                alt={currentNews.judul}
              />
            </div>
            <p className="max-w-xl mb-4 text-base text-gray-700 sm:mx-auto">
              {currentNews.isi}
            </p>
          </>
        ) : (
          <p>No news found.</p>
        )}
      </div>
    </div>
  );
};
