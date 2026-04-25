export interface PlacedWord {
  word: string;
  positions: [number, number][];
}

const DIRECTIONS: [number, number][] = [
  [0, 1], [1, 0], [1, 1], [0, -1],
  [-1, 0], [-1, -1], [1, -1], [-1, 1],
];

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function generateGrid(words: string[], size = 12): {
  grid: string[][];
  placedWords: PlacedWord[];
} {
  const grid: string[][] = Array.from({ length: size }, () => Array(size).fill(''));
  const placedWords: PlacedWord[] = [];
  const sorted = [...words].sort((a, b) => b.length - a.length);

  for (const word of sorted) {
    let placed = false;
    const dirs = shuffle(DIRECTIONS);
    const rows = shuffle([...Array(size).keys()]);

    outer: for (const [dr, dc] of dirs) {
      for (const row of rows) {
        const cols = shuffle([...Array(size).keys()]);
        for (const col of cols) {
          const positions: [number, number][] = [];
          let fits = true;

          for (let i = 0; i < word.length; i++) {
            const r = row + i * dr;
            const c = col + i * dc;
            if (r < 0 || r >= size || c < 0 || c >= size) { fits = false; break; }
            if (grid[r][c] !== '' && grid[r][c] !== word[i]) { fits = false; break; }
            positions.push([r, c]);
          }

          if (fits) {
            positions.forEach(([r, c], i) => { grid[r][c] = word[i]; });
            placedWords.push({ word, positions });
            placed = true;
            break outer;
          }
        }
      }
    }

    if (!placed) console.warn(`Could not place word: ${word}`);
  }

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (!grid[r][c]) grid[r][c] = letters[Math.floor(Math.random() * 26)];
    }
  }

  return { grid, placedWords };
}

export function getCellsInLine(
  startRow: number, startCol: number,
  endRow: number, endCol: number,
): [number, number][] {
  const dr = Math.sign(endRow - startRow);
  const dc = Math.sign(endCol - startCol);
  const rowDiff = Math.abs(endRow - startRow);
  const colDiff = Math.abs(endCol - startCol);

  if (rowDiff !== 0 && colDiff !== 0 && rowDiff !== colDiff) return [];

  const cells: [number, number][] = [];
  const steps = Math.max(rowDiff, colDiff);
  for (let i = 0; i <= steps; i++) {
    cells.push([startRow + i * dr, startCol + i * dc]);
  }
  return cells;
}
