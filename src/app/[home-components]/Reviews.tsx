'use client'

import React, {useState, useRef} from 'react';
import {ChevronLeft, ChevronRight, Star} from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        rating: 5,
        date: 'May 15, 2024',
        text: 'Absolutely amazing product! It exceeded all my expectations and solved my problem perfectly.',
        avatar: '/api/placeholder/50/50',
        photos: ['/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100']
    },
    {
        id: 2,
        name: 'Michael Chen',
        rating: 4,
        date: 'April 22, 2024',
        text: 'Great value for money. The quality is top-notch and the customer service was exceptional.',
        avatar: '/api/placeholder/50/50',
        photos: ['/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100']
    },
    {
        id: 3,
        name: 'Sarah Rodriguez',
        rating: 5,
        date: 'June 1, 2024',
        text: 'I was skeptical at first, but this product has completely transformed my daily routine.',
        avatar: '/api/placeholder/50/50',
        photos: ['/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100']
    },
    {
        id: 4,
        name: 'David Kim',
        rating: 4,
        date: 'March 10, 2024',
        text: 'Solid performance and great design. Would definitely recommend to anyone looking for a reliable solution.',
        avatar: '/api/placeholder/50/50',
        photos: ['/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100']
    },
    {
        id: 5,
        name: 'Anna Petrova',
        rating: 5,
        date: 'May 5, 2024',
        text: 'Incredible product that delivers exactly what it promises. Couldn\'t be happier!',
        avatar: '/api/placeholder/50/50',
        photos: ['/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100', '/api/placeholder/100/100']
    }
];

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth;
            carouselRef.current.scrollLeft -= scrollAmount;
            setCurrentIndex(prev => Math.max(0, prev - 1));
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth;
            carouselRef.current.scrollLeft += scrollAmount;
            setCurrentIndex(prev => Math.min(reviews.length - 1, prev + 1));
        }
    };

    const renderStars = (rating) => {
        return Array.from({length: 5}, (_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill={index < rating ? 'currentColor' : 'none'}
            />
        ));
    };

    return (
        <div className="w-full max-w-4xl mx-auto relative my-10">
            {/*<div className="w-10/12 mx-auto">*/}
            {/*    <svg id="Background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.88 43.01"*/}
            {/*         className="fill-none stroke-black stroke-[6px]">*/}
            {/*        <path d="M.72,40.08L150,3.08l164.22,37" className="stroke-tint stroke-[6px]"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Липовые отзывы</h2>
                <p className="text-gray-600 mt-2">Посмотрите как о нас отзываются наши клиенты</p>
            </div>

            <div className="relative">
                {/* Scroll Left Button */}
                {currentIndex > 0 && (
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700"/>
                    </button>
                )}

                {/* Scroll Right Button */}
                {currentIndex < reviews.length - 1 && (
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700"/>
                    </button>
                )}

                {/* Reviews Carousel */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-scroll scroll-smooth no-scrollbar space-x-6 py-4 px-2"
                    style={{
                        scrollSnapType: 'x mandatory',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex-shrink-0 flex flex-col space-y-3 w-[22rem] bg-white shadow-lg rounded-xl p-6 border border-gray-100 scroll-snap-align-start"
                        >
                            {/* Review Header */}
                            <div className='flex-grow' >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={'/user.jpg'}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="flex mb-3">
                                    {renderStars(review.rating)}
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex space-x-2 mt-auto">
                                {review.photos.map((photo, index) => (
                                    <img
                                        key={index}
                                        src={photo}
                                        alt={`Review photo ${index + 1}`}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                ))}
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;
