import React from 'react';

type Props = {
    categories: string[];
    current: string;
    onSelect: (cat: string) => void;
};

export const FilterBar: React.FC<Props> = ({ categories, current, onSelect }) => {
    return (
        <div className="sticky top-4 z-10 flex flex-wrap justify-center gap-3 mb-12 backdrop-blur-md bg-white/5 border border-white/10 shadow-sm px-4 py-3 rounded-full">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelect(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-transform duration-150 ${
                        current === cat
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow hover:scale-105'
                            : 'bg-slate-800/70 border border-slate-700 text-gray-200 hover:bg-cyan-900/40'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default FilterBar;
