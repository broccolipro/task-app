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

const reviews = [
    {
        id: 1,
        name: 'анонимно',
        rating: 5,
        date: 'April 22, 2024',
        text: 'Спасибо большое за работу! Всё сделали аккуратно и качественно демонтировали дверь установили новую, смонтировали наличники и провели герметизацию Очень довольны результатом! СПАСИБО!',
        avatar: '/api/placeholder/50/50',
        photos: ['/review_images/review_door1.jpeg', '/review_images/review_door2.jpeg', '/review_images/review_door3.jpeg', '/review_images/review_door4.jpeg']
    },
    {
        id: 2,
        name: 'анонимно',
        rating: 5,
        date: 'May 15, 2024',
        text: 'Заказывали установку полок на дом. Ребята сами купили полки и крепления по нашим размерам, постоянно советовались, что лучше взять. Всё установили точно так, как мы хотели. Очень удобно, остались довольны. Спасибо! 009.md',
        avatar: '/api/placeholder/50/50',
        photos: ['/review_images/review_shelf1.jpeg', '/review_images/review_shelf2.jpeg', '/review_images/review_shelf3.jpeg', '/review_images/review_shelf4.jpeg']
    },
    {
        id: 3,
        name: 'Олег',
        rating: 5,
        date: 'June 1, 2024',
        text: 'Recomand cu încredere! Am avut nevoie de o lampă-instalare pe care nu o găseam în magazine. Le-am scris băieților și am discutat toate detaliile: de unde să iau materialele, cu ce să vopsesc. Mulțumesc mult pentru ajutor – a ieșit cu adevărat frumos!',
        avatar: '/api/placeholder/50/50',
        photos: ['/review_images/review_luster1.jpeg', '/review_images/review_luster2.jpeg', '/review_images/review_luster3.jpeg', '/review_images/review_luster4.jpeg', '/review_images/review_luster5.jpeg', '/review_images/review_luster6.jpeg']
    },
    {
        id: 4,
        name: 'анонимно',
        rating: 5,
        date: 'March 10, 2024',
        text: 'Договорились о дате и времени, обсудили все материалы и клеи. Я всё купил, ребята приехали и быстро уложили паркет. Работа выполнена отлично, огромный респект за профессионализм!',
        avatar: '/api/placeholder/50/50',
        photos: ['/review_images/review_floor.jpeg',]
    },
    {
        id: 5,
        name: 'патрик',
        rating: 5,
        date: 'May 5, 2024',
        text: 'Mulțumesc mult pentru ajutorul cu montarea mobilei\n' +
            'Trebuia să adun totul seara, ca să fie gata până dimineața. Băieții au făcut totul de calitate. Foarte comod cu siguranță voi apela din nou!',
        avatar: '/api/placeholder/50/50',
        photos: ['/review_images/review_closet.jpeg',]
    }
];

const ReviewCarousel = () => {

    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(0)
    const {reviewsRef, t} = useContext(AppContext)


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
            }} >
                <CarouselContent >
                    {reviews.map((review, index) => (
                        <CarouselItem key={index} className='sm:basis-1/2 xl:basis-1/3'>
                            <div className="p-1">
                                <Card className='hover:cursor-pointer'>
                                    <CardContent className="flex h-72 flex-col p-4">
                                            {/* Review Header */}
                                            <div className='flex-grow'>
                                                <div className="flex items-center mb-4">
                                                    <img
                                                        src={'/user.jpg'}
                                                        alt={'Мастер на час'}
                                                        className="w-12 h-12 rounded-full mr-4"
                                                    />
                                                    <div className={''}>
                                                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                                                        <p className="text-sm text-gray-500">{review.date}</p>
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
                                                {review.photos.slice(0,4).map((photo, sub_index) => (
                                                    <div  key={sub_index} className=''
                                                          onClick={() => {
                                                              setCurrent(index)
                                                              setOpen(true)
                                                          }}
                                                    >
                                                        <img
                                                            src={photo}
                                                            alt={''}
                                                            className="aspect-square object-cover rounded-md max-h-[80px]"
                                                        />
                                                    </div>

                                                ))}
                                            </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>

            <Dialog open={open} onOpenChange={setOpen} >
                <DialogTrigger/>
                <DialogContent className='font-nunito'>
                    <DialogHeader>
                        <DialogTitle></DialogTitle>
                    </DialogHeader>
                    <Carousel className="m-8">
                        <CarouselContent  >
                            {
                                reviews[current].photos.map((url, index) =>
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
