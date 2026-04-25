import { useState } from 'react';
import { CATEGORIES, Category } from './data/categories';
import GameMenu from './components/GameMenu';
import GameBoard from './components/GameBoard';

type Screen = 'menu' | 'game';

export default function App() {
  const [screen, setScreen] = useState<Screen>('menu');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleSelect = (cat: Category) => {
    setActiveCategory(cat);
    setScreen('game');
  };

  const handleMenu = () => {
    setActiveCategory(null);
    setScreen('menu');
  };

  return (
    <div className="app">
      {screen === 'menu' && (
        <GameMenu categories={CATEGORIES} onSelect={handleSelect} />
      )}
      {screen === 'game' && activeCategory && (
        <GameBoard category={activeCategory} onMenu={handleMenu} />
      )}
    </div>
  );
}
