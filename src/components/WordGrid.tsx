import { useRef, useCallback, useState } from 'react';
import { getCellsInLine } from '../utils/wordSearch';

export interface FoundWordInfo {
  positions: [number, number][];
  color: string;
}

interface Props {
  grid: string[][];
  foundCells: Map<string, FoundWordInfo>;
  onWordSelected: (cells: [number, number][]) => void;
}

export default function WordGrid({ grid, foundCells, onWordSelected }: Props) {
  const [selectedCells, setSelectedCells] = useState<[number, number][]>([]);
  const selectingRef = useRef(false);
  const startCellRef = useRef<[number, number] | null>(null);
  const selectedCellsRef = useRef<[number, number][]>([]);

  const getCellFromPoint = (x: number, y: number): [number, number] | null => {
    const el = document.elementFromPoint(x, y);
    if (!el) return null;
    const cell = (el as HTMLElement).closest('[data-row]') as HTMLElement | null;
    if (!cell) return null;
    return [parseInt(cell.dataset.row!), parseInt(cell.dataset.col!)];
  };

  const updateSelection = useCallback((x: number, y: number) => {
    if (!selectingRef.current || !startCellRef.current) return;
    const cell = getCellFromPoint(x, y);
    if (!cell) return;
    const line = getCellsInLine(
      startCellRef.current[0], startCellRef.current[1],
      cell[0], cell[1],
    );
    const next = line.length > 0 ? line : [startCellRef.current];
    selectedCellsRef.current = next;
    setSelectedCells(next);
  }, []);

  const startSelection = useCallback((row: number, col: number) => {
    selectingRef.current = true;
    startCellRef.current = [row, col];
    const initial: [number, number][] = [[row, col]];
    selectedCellsRef.current = initial;
    setSelectedCells(initial);
  }, []);

  const endSelection = useCallback(() => {
    if (selectingRef.current && selectedCellsRef.current.length > 1) {
      onWordSelected(selectedCellsRef.current);
    }
    selectingRef.current = false;
    startCellRef.current = null;
    selectedCellsRef.current = [];
    setSelectedCells([]);
  }, [onWordSelected]);

  const getFoundColor = (r: number, c: number): string | null => {
    for (const info of foundCells.values()) {
      if (info.positions.some(([pr, pc]) => pr === r && pc === c)) return info.color;
    }
    return null;
  };

  const isSelected = (r: number, c: number) =>
    selectedCells.some(([sr, sc]) => sr === r && sc === c);

  return (
    <div
      className="word-grid"
      onMouseUp={endSelection}
      onMouseLeave={endSelection}
      onTouchEnd={(e) => { e.preventDefault(); endSelection(); }}
      onTouchCancel={endSelection}
      onTouchMove={(e) => { e.preventDefault(); const t = e.touches[0]; updateSelection(t.clientX, t.clientY); }}
    >
      {grid.map((row, r) => (
        <div key={r} className="grid-row">
          {row.map((letter, c) => {
            const selected = isSelected(r, c);
            const foundColor = getFoundColor(r, c);
            return (
              <div
                key={c}
                data-row={r}
                data-col={c}
                className={`grid-cell${selected ? ' selected' : ''}${foundColor ? ' found' : ''}`}
                style={foundColor ? { '--found-color': foundColor } as React.CSSProperties : undefined}
                onMouseDown={() => startSelection(r, c)}
                onMouseEnter={(e) => { if (e.buttons === 1) updateSelection(e.clientX, e.clientY); }}
                onTouchStart={(e) => { e.preventDefault(); startSelection(r, c); }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
