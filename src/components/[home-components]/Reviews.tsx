'use client'

import React, {useState, useContext} from 'react';
import {Star} from 'lucide-react';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card";
import {AppContext} from "@/shared/providers/AppProvider";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Skeleton} from "@/components/ui/skeleton";
import {Review} from "@/shared/types/Review";
import {useGetReviewsQuery} from "@/lib/store/services/reviewApi";

export const renderStars = (rating) => {
    return Array.from({length: 5}, (_, index) => (
        <Star
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill={index < rating ? 'currentColor' : 'none'}
        />
    ));
};



const ReviewCarousel = () => {

    const { data: reviews, isLoading, isError, error } = useGetReviewsQuery(null)

    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState<Review | null>(null)
    const {reviewsRef, t} = useContext(AppContext)

    const CarouselItemBase = ({review, children}: {review?: Review, children: any}) =>
        <CarouselItem className='sm:basis-1/2 2xl:basis-1/3'
                      onClick={() => {
                          setCurrent(review)
                          setOpen(true)
                      }}
        >
            <div className="p-1">
                <Card className='hover:cursor-pointer'>
                    <CardContent className="flex h-72 flex-col p-4">
                        {children}
                    </CardContent>
                </Card>
            </div>
        </CarouselItem>


    const CarouselItemLocal = ({review}: {review: Review}) =>
        <CarouselItemBase review={review}>
            <div className='flex-grow'>
                <div className="flex items-center mb-4">
                    <img
                        src={'/user.jpg'}
                        alt={'Мастер на час'}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className={''}>
                        <h3 className="font-semibold text-gray-800">{t('anonymously')}</h3>
                        <p className="text-sm text-gray-500">{review.createdAt}</p>
                    </div>
                </div>

                {/* Star Rating */}
                <div className="flex mb-3">
                    {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 ">
                    "{review.text}"
                </p>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-5 ">
                {review.imageSet.slice(0, 4).map((photo, sub_index) => (
                    <div key={sub_index}>
                        <img
                            src={photo}
                            alt={''}
                            className="aspect-square object-cover rounded-md max-h-[80px]"
                        />
                    </div>

                ))}
            </div>
        </CarouselItemBase>


    return (
        <div className="w-full p-10 font-nunito pt-20" id={"reviews"} ref={reviewsRef}>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">
                    {t('last_reviews_h')}
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    {t('last_reviews_p')}
                </p>
            </div>

            <Carousel className="w-full" opts={{
                loop: true
            }}>
                <CarouselContent>
                    {
                        reviews ? reviews.map((review, index) => (
                                <CarouselItemLocal key={review.id} review={review}/>
                            )) :
                            [1, 2, 3].map(index =>
                                <CarouselItemBase key={index}>
                                    <div className="flex space-x-4 flex-grow">
                                        <Skeleton className="h-12 w-12 rounded-full"/>
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-[150px]"/>
                                            <Skeleton className="h-4 w-[100px]"/>
                                        </div>
                                    </div>
                                    <div>
                                        <Skeleton className=" rounded-xl"/>
                                    </div>
                                    <div className='flex justify-between'>
                                        <Skeleton className="h-12 w-12 rounded-xl"/>
                                        <Skeleton className="h-12 w-12 rounded-xl"/>
                                        <Skeleton className="h-12 w-12 rounded-xl"/>
                                        <Skeleton className="h-12 w-12 rounded-xl"/>
                                    </div>
                                </CarouselItemBase>
                            )
                    }

                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
            {
                error && <h1 className={'text-red-500'} >an error occurred</h1>
            }

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger/>
                <DialogContent className='font-nunito'>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                        <p>{
                            current && current.text
                        }</p>
                    </DialogHeader>
                    <Carousel className="m-8">
                        <CarouselContent>
                            {
                                current && current.imageSet.map((url, index) =>
                                    <img key={index} src={url} alt="" className='object-contain'/>)
                            }
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ReviewCarousel;
