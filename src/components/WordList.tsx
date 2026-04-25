import React from 'react';
import { FoundWordInfo } from './WordGrid';

interface Props {
  words: string[];
  foundWords: Map<string, FoundWordInfo>;
}

export default function WordList({ words, foundWords }: Props) {
  return (
    <div className="word-list">
      {words.map(word => {
        const found = foundWords.has(word);
        const color = found ? foundWords.get(word)!.color : undefined;
        return (
          <div
            key={word}
            className={`word-chip${found ? ' found' : ''}`}
            style={found ? { '--chip-color': color } as React.CSSProperties : undefined}
          >
            {found && <span className="chip-check">✓</span>}
            <span className="chip-text">{word}</span>
          </div>
        );
      })}
    </div>
  );
}
