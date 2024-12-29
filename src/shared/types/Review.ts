export interface Review {
    id: number;
    text: string;
    rating: number;
    imageSet: string[];
    createdAt: string; // ISO timestamp
    updatedAt: string; // ISO timestamp
}
