import { useState, useEffect, useCallback } from 'react';
import { Category, WORD_COLORS } from '../data/categories';
import { generateGrid, PlacedWord } from '../utils/wordSearch';
import WordGrid, { FoundWordInfo } from './WordGrid';
import WordList from './WordList';
import WinScreen from './WinScreen';

interface Props {
  category: Category;
  onMenu: () => void;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

export default function GameBoard({ category, onMenu }: Props) {
  const [grid, setGrid] = useState<string[][]>([]);
  const [placedWords, setPlacedWords] = useState<PlacedWord[]>([]);
  const [foundWords, setFoundWords] = useState<Map<string, FoundWordInfo>>(new Map());
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [won, setWon] = useState(false);
  const [finalTime, setFinalTime] = useState(0);

  const newGame = useCallback(() => {
    const { grid: g, placedWords: pw } = generateGrid(category.words, 12);
    setGrid(g);
    setPlacedWords(pw);
    setFoundWords(new Map());
    setStartTime(Date.now());
    setElapsed(0);
    setWon(false);
    setFinalTime(0);
  }, [category]);

  useEffect(() => { newGame(); }, [newGame]);

  useEffect(() => {
    if (won) return;
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000);
    return () => clearInterval(id);
  }, [won, startTime]);

  const handleWordSelected = useCallback((cells: [number, number][]) => {
    const key = (positions: [number, number][]) => positions.map(([r, c]) => `${r},${c}`).join('|');
    const selectedKey = key(cells);
    const reversedKey = key([...cells].reverse());

    const matched = placedWords.find(pw => {
      if (foundWords.has(pw.word)) return false;
      const pwKey = key(pw.positions);
      return pwKey === selectedKey || pwKey === reversedKey;
    });

    if (!matched) return;

    const color = WORD_COLORS[foundWords.size % WORD_COLORS.length];
    const next = new Map(foundWords);
    next.set(matched.word, { positions: matched.positions, color });
    setFoundWords(next);

    if (next.size === placedWords.length) {
      const t = Math.floor((Date.now() - startTime) / 1000);
      setFinalTime(t);
      setWon(true);
    }
  }, [placedWords, foundWords, startTime]);

  if (won) {
    return (
      <WinScreen
        category={category}
        timeElapsed={finalTime}
        onPlayAgain={newGame}
        onMenu={onMenu}
      />
    );
  }

  const foundCount = foundWords.size;
  const totalCount = placedWords.length;

  return (
    <div className="game-board">
      <div className="game-header">
        <button className="back-btn" onClick={onMenu}>←</button>
        <div className="game-meta">
          <span
            className="cat-label"
            style={{ background: category.bgColor, color: category.color }}
          >
            {category.emoji} {category.name}
          </span>
          <span className="found-count">{foundCount}/{totalCount}</span>
        </div>
        <div className="timer">{formatTime(elapsed)}</div>
      </div>
      <div className="game-content">
        <WordGrid grid={grid} foundCells={foundWords} onWordSelected={handleWordSelected} />
        <WordList words={category.words} foundWords={foundWords} />
      </div>
    </div>
  );
}
