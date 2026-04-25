import React from 'react';
import { Category } from '../data/categories';

interface Props {
  categories: Category[];
  onSelect: (category: Category) => void;
}

export default function GameMenu({ categories, onSelect }: Props) {
  return (
    <div className="menu-screen">
      <div className="menu-header">
        <h1 className="menu-title">Word Search</h1>
        <p className="menu-subtitle">Pick a category to play</p>
      </div>
      <div className="menu-grid">
        {categories.map(cat => (
          <button
            key={cat.id}
            className="category-card"
            style={{ '--cat-color': cat.color, '--cat-bg': cat.bgColor } as React.CSSProperties}
            onClick={() => onSelect(cat)}
          >
            <span className="category-emoji">{cat.emoji}</span>
            <span className="category-name">{cat.name}</span>
            <span className="category-count">{cat.words.length} words</span>
          </button>
        ))}
      </div>
    </div>
  );
}
