export type Image = {
    id: string;
    title: string;
    category: 'Supercar' | 'Sportive' | 'Berline compact' | 'Berline' | 'Citadine' | string;
    src: string;          // chemin relatif vers l'image
    likes: number;        // compteur local
    createdAt?: string;   // ISO date (optionnel)
};