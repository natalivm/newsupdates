import { Category } from '../data/categories';

interface Props {
  category: Category;
  timeElapsed: number;
  onPlayAgain: () => void;
  onMenu: () => void;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

export default function WinScreen({ category, timeElapsed, onPlayAgain, onMenu }: Props) {
  return (
    <div className="win-screen">
      <div className="win-content">
        <div className="win-emoji">🎉</div>
        <h2 className="win-title">You found them all!</h2>
        <div className="win-stats">
          <div className="win-stat">
            <span className="win-stat-label">Category</span>
            <span className="win-stat-value">{category.emoji} {category.name}</span>
          </div>
          <div className="win-stat">
            <span className="win-stat-label">Time</span>
            <span className="win-stat-value">{formatTime(timeElapsed)}</span>
          </div>
        </div>
        <div className="win-actions">
          <button className="btn-primary" onClick={onPlayAgain}>Play Again</button>
          <button className="btn-secondary" onClick={onMenu}>Categories</button>
        </div>
      </div>
    </div>
  );
}
