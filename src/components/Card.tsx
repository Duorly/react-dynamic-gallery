import React from 'react';
import type { CarItem } from "../types";

type Props = {
    car: CarItem;
    onLike: (id: string) => void;
    onDislike: (id: string) => void;
};

export const Card: React.FC<Props> = ({ car, onLike, onDislike }) => {
    return (
        <article className="group relative break-inside-avoid overflow-hidden rounded-3xl bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:brightness-110">
            <img
                src={car.src}
                alt={car.title}
                className="w-full h-auto object-cover inline-block rounded-3xl group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition" />

            <div className="absolute bottom-0 w-full p-5 flex justify-between items-end">
                <div>
                    <h3 className="text-white font-semibold text-lg tracking-tight drop-shadow">
                        {car.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{car.category}</p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => onLike(car.id)}
                        aria-label={`Like ${car.title}`}
                        className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/10 hover:scale-105 transition"
                    >
                        <span className="text-cyan-400 text-lg leading-none">❤️</span>
                        <span className="text-gray-200 font-medium">
                            {car.likes ?? 0}
                        </span>
                    </button>

            
                    <button
                        onClick={() => onDislike(car.id)}
                        aria-label={`Dislike ${car.title}`}
                        className="flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-white/10 hover:scale-105 transition"
                    >
                        <span className="text-rose-500 text-lg leading-none">💔</span>
                        <span className="text-gray-200 font-medium">
                            {car.dislikes ?? 0}
                        </span>
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Card;
