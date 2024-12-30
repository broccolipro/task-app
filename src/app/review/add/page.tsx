'use client'
import React, {useState} from 'react';
import {Card, CardHeader, CardTitle, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Star, X} from 'lucide-react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {useAddReviewMutation} from "@/lib/store/services/reviewApi";

// Define the validation schema
const reviewSchema = z.object({
    content: z
        .string()
        .min(10, 'Отзыв должен содержать минимум 10 символов')
        .max(1000, 'Отзыв не должен превышать 1000 символов'),
    rating: z
        .number()
        .min(1, 'Пожалуйста, поставьте оценку')
        .max(5, 'Максимальная оценка - 5 звезд'),
    photos: z
        .array(z.instanceof(File))
        .max(5, 'Максимум 5 фотографий')
        .optional()
        .default([])
});

type ReviewFormDataType = {
    content: string
    rating: number
    photos?: File[]
}

type ErrorLocal = {
    status: number;
    data: {
        message: string;
        error: string;
        statusCode: number;
    }
}

const ReviewForm = () => {

    const [addReview, {data, isLoading, isError, error, isSuccess}] = useAddReviewMutation()
    const [hoveredRating, setHoveredRating] = useState(0);
    const [previews, setPreviews] = useState<string[]>([]);
    const [token, setToken] = useState('')

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {errors},
        reset
    } = useForm<ReviewFormDataType>({
        resolver: zodResolver(reviewSchema),
        defaultValues: {
            content: '',
            rating: 0,
            photos: []
        }
    });

    const {rating, photos} = watch();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;

        const files: File[] = Array.from(e.target.files);
        setValue('photos', files);

        // Create previews
        files.forEach(file => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews(prev => [...prev, reader.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleRemoveImage = (index: number) => {
        const newPhotos = Array.from(photos).filter((_, i) => i !== index);
        setValue('photos', newPhotos);
        setPreviews(prev => prev.filter((_, i) => i !== index));
    };

    const onSubmit = async (data: ReviewFormDataType) => {


        localStorage.setItem('authToken', token);

        try {
            const formData = new FormData();
            formData.append('text', data.content);
            formData.append('rating', data.rating.toString());

            if (data.photos) {
                for (const photo of data.photos) {
                    formData.append('images', photo);
                }
            }
            await addReview(formData).unwrap();
            reset();
            setPreviews([]);
        } catch (error) {
            console.error('Error submitting the review:', error);
        }


    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 font-nunito ">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle>Оставить отзыв</CardTitle>
                </CardHeader>
                <CardContent className='space-y-6'>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Content field */}
                        <div className="space-y-2">
                            <Label htmlFor="content">Содержание отзыва</Label>
                            <Textarea
                                id="content"
                                {...register('content')}
                                placeholder="Поделитесь своими впечатлениями..."
                                className={`min-h-32 ${errors.content ? 'border-red-500' : ''}`}
                            />
                            {errors.content && (
                                <p className="text-sm text-red-500">{errors.content.message}</p>
                            )}
                        </div>

                        {/* Rating field */}
                        <div className="space-y-2">
                            <Label>Рейтинг</Label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className="focus:outline-none"
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        onClick={() => setValue('rating', star)}
                                    >
                                        <Star
                                            className={`w-8 h-8 ${
                                                star <= (hoveredRating || rating)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            {errors.rating && (
                                <p className="text-sm text-red-500">{errors.rating.message}</p>
                            )}
                        </div>

                        {/* Photos field */}
                        <div className="space-y-2">
                            <Label htmlFor="photos">Фотографии</Label>
                            <div className="flex flex-col gap-4">
                                {previews.length > 0 && (
                                    <div className="grid grid-cols-4 gap-4">
                                        {previews.map((preview, index) => (
                                            <div key={index} className="relative group">
                                                <img
                                                    src={preview}
                                                    alt={`Preview ${index + 1}`}
                                                    className="w-full h-32 object-cover rounded-lg"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveImage(index)}
                                                    className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white"
                                                >
                                                    <X className="w-4 h-4"/>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <input
                                    type="file"
                                    id="photos"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => document.getElementById('photos')?.click()}
                                >
                                    Выбрать фотографии
                                </Button>
                                {errors.photos && (
                                    <p className="text-sm text-red-500">{errors.photos.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit button */}
                        <Button type="submit" disabled={isLoading} className="w-full bg-tint hover:bg-none">

                            {isLoading ? 'Идет загрузка...' : 'Отправить отзыв'}
                        </Button>
                    </form>
                    {/*{isLoading && <h1>Is loading...</h1>}*/}
                    {/*{isError && <h1 className='text-red-500'>Ошибка: {error?.data?.message || error?.message || 'Что-то пошло не так'}</h1>}*/}
                    {isError && <h1 className='text-red-500'>Ошибка: {(error as ErrorLocal).data.message}</h1>}
                    {isSuccess && <h1 className='text-green-500'>Новый отзыв добавлен!</h1>}
                    <Textarea placeholder='Token' value={token} onChange={(e) => setToken(e.target.value)}/>

                </CardContent>
            </Card>

        </div>
    );
};

export default ReviewForm;
