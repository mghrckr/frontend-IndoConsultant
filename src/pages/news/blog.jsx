import { fetchNews } from '@/store/actionCreators';
import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const BASE_URL = `http://localhost:3000`

export const Blog = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const news = useSelector((state) => state.news.news);
    console.log(news);


    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...'; // Append ellipsis if truncated
        }
        return text;
    };

    const handleLearnMore = (id) => {
        navigate(`/content/${id}`); // Navigate to the content page with the news id
    };

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);


    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex items-center justify-center min-h-screen">
                {news.map((newsItem) => (
                    <div key={newsItem.id} className="mr-14 overflow-hidden transition-transform transform duration-300 bg-white rounded-xl shadow-sm hover:shadow-2xl hover:scale-105 w-full max-w-sm">
                        <img
                            src={BASE_URL + newsItem.gambar || "https://via.placeholder.com/500"} // Fallback image
                            className="object-cover w-full h-64"
                            alt={newsItem.judul}
                        />
                        <div className="p-5 border border-t-0 h-full flex flex-col">
                            <a
                                href="/"
                                aria-label="Category"
                                title={newsItem.judul}
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                {newsItem.judul}
                            </a>
                            <p className="mb-2 text-gray-700 flex-grow">
                                {truncateText(newsItem.isi, 100)}
                            </p>
                            <a
                                href="/content"
                                aria-label=""
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default anchor behavior
                                    handleLearnMore(newsItem.id); // Call handler with the news id
                                }}
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {news.length === 0 && (
                <p className="mt-5">No news available.</p>
            )}
        </div>
    );
};
