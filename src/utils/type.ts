export type Image = {
    id: string;
    title: string;
    category: 'Nature' | 'Voyage' | 'Art' | 'Architecture' | 'Food' | string;
    src: string;          // chemin relatif vers l'image
    likes: number;        // compteur local
    createdAt?: string;   // ISO date (optionnel)
};