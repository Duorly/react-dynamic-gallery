import React, { useEffect, useMemo, useState } from 'react';
import Card from './Card';
import FilterBar from './FilterBar';
import type {CarItem} from "../types";

type Props = {
    initialData: CarItem[];
};

export const Gallery: React.FC<Props> = ({ initialData }) => {
    const [cars, setCars] = useState<CarItem[]>(() => {
        try {
            const raw = localStorage.getItem('autopulse_cars');
            return raw ? (JSON.parse(raw) as CarItem[]) : initialData;
        } catch {
            return initialData;
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

    const handleLike = (id: string) => {
        setCars((prev) => prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c)));
    };

    const handleDelete = (id: string) => {
        if (confirm('Supprimer cette carte ?')) {
            setCars((prev) => prev.filter((c) => c.id !== id));
        }
    };

    return (
        <>
            <FilterBar categories={categories} current={filter} onSelect={setFilter} />

            <section className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                {visible.length === 0 ? (
                    <p className="text-center text-gray-400 col-span-full">Aucune carte correspondante</p>
                ) : (
                    visible.map((car) => (
                        <Card key={car.id} car={car} onLike={handleLike} onDelete={handleDelete} />
                    ))
                )}
            </section>
        </>
    );
};

export default Gallery;
