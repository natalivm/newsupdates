export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
  words: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'animals',
    name: 'Animals',
    emoji: '🐾',
    color: '#7c3aed',
    bgColor: '#f5f3ff',
    words: ['ELEPHANT', 'DOLPHIN', 'PENGUIN', 'GIRAFFE', 'CHEETAH', 'GORILLA', 'PANTHER', 'JAGUAR', 'BUFFALO', 'OSTRICH'],
  },
  {
    id: 'food',
    name: 'Food',
    emoji: '🍕',
    color: '#ea580c',
    bgColor: '#fff7ed',
    words: ['PIZZA', 'BURGER', 'SUSHI', 'PASTA', 'TACOS', 'WAFFLE', 'MANGO', 'SALMON', 'BRISKET', 'AVOCADO'],
  },
  {
    id: 'sports',
    name: 'Sports',
    emoji: '⚽',
    color: '#16a34a',
    bgColor: '#f0fdf4',
    words: ['TENNIS', 'SOCCER', 'BOXING', 'HOCKEY', 'SURFING', 'CRICKET', 'ARCHERY', 'CYCLING', 'KARATE', 'BOWLING'],
  },
  {
    id: 'nature',
    name: 'Nature',
    emoji: '🌿',
    color: '#0891b2',
    bgColor: '#ecfeff',
    words: ['FOREST', 'DESERT', 'CANYON', 'GLACIER', 'VOLCANO', 'MEADOW', 'TUNDRA', 'SAVANNA', 'JUNGLE', 'ESTUARY'],
  },
  {
    id: 'space',
    name: 'Space',
    emoji: '🚀',
    color: '#6366f1',
    bgColor: '#eef2ff',
    words: ['GALAXY', 'NEBULA', 'SATURN', 'COMET', 'PULSAR', 'METEOR', 'QUASAR', 'COSMOS', 'ECLIPSE', 'AURORA'],
  },
];

export const WORD_COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6',
  '#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981',
];
