import React, { useEffect, useMemo, useState } from 'react';
import Card from './Card';
import FilterBar from './FilterBar';
import type { CarItem } from "../types";

type Props = {
    initialData: CarItem[];
};

export const Gallery: React.FC<Props> = ({ initialData }) => {
    // Normalisation des données (évite NaN sur likes/dislikes)
    const normalize = (list: CarItem[]) =>
        list.map(c => ({
            ...c,
            likes: c.likes ?? 0,
            dislikes: c.dislikes ?? 0,
        }));

    const [cars, setCars] = useState<CarItem[]>(() => {
        try {
            const raw = localStorage.getItem('autopulse_cars');
            const data = raw ? (JSON.parse(raw) as CarItem[]) : initialData;
            return normalize(data);
        } catch {
            return normalize(initialData);
        }
    });

    const [filter, setFilter] = useState<string>('All');

    useEffect(() => {
        localStorage.setItem('autopulse_cars', JSON.stringify(cars));
    }, [cars]);

    const categories = useMemo(() => {
        const set = new Set(cars.map((c) => c.category));
        return ['All', ...Array.from(set)];
    }, [cars]);

    const visible = useMemo(() => {
        return filter === 'All' ? cars : cars.filter((c) => c.category === filter);
    }, [cars, filter]);

    // Gestion des likes
    const handleLike = (id: string) => {
        setCars(prev =>
            prev.map(c =>
                c.id === id ? { ...c, likes: (c.likes ?? 0) + 1 } : c
            )
        );
    };

    // Gestion des dislikes
    const handleDislike = (id: string) => {
        setCars(prev =>
            prev.map(c =>
                c.id === id ? { ...c, dislikes: (c.dislikes ?? 0) + 1 } : c
            )
        );
    };

    return (
        <>
            <FilterBar categories={categories} current={filter} onSelect={setFilter} />

            <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {visible.length === 0 ? (
                    <p className="text-center text-gray-400 col-span-full">
                        No matching cars found
                    </p>
                ) : (
                    visible.map((car) => (
                        <Card
                            key={car.id}
                            car={car}
                            onLike={handleLike}
                            onDislike={handleDislike}
                        />
                    ))
                )}
            </section>
        </>
    );
};

export default Gallery;
