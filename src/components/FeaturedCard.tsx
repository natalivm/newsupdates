import React from 'react';
import { Employee, DEPT_COLORS } from '../data/types';
import { getBadgeById } from '../data/badges';
import { isNewJoiner } from '../utils';

interface Props {
  employee: Employee;
  tag: 'birthday' | 'anniversary' | 'new';
  onSelect: (employee: Employee) => void;
}

const tagConfig = {
  birthday: { label: '🎂 Birthday Today', className: 'tag--birthday' },
  anniversary: { label: '🎉 Work Anniversary', className: 'tag--anniversary' },
  new: { label: '✨ New Joiner', className: 'tag--new' },
};

const FeaturedCard: React.FC<Props> = ({ employee, tag, onSelect }) => {
  const badge = getBadgeById(employee.badgeId);
  const bgColor = DEPT_COLORS[employee.department];
  const newJoiner = isNewJoiner(employee.joinedDate);
  const { label, className } = tagConfig[tag];

  return (
    <div className="featured-card" style={{ '--dept-color': bgColor } as React.CSSProperties} onClick={() => onSelect(employee)}>
      <div className="featured-photo-wrapper" style={{ backgroundColor: bgColor }}>
        <img className="featured-photo" src={employee.photo} alt={employee.name} loading="lazy" />
        <span className={`featured-tag ${className}`}>{label}</span>
      </div>
      <div className="featured-body">
        <h3 className="featured-name">{employee.name}</h3>
        <p className="featured-title">{employee.title}</p>
        <div className="featured-meta">
          <span className="card-department">{employee.department}</span>
          {newJoiner && tag !== 'new' && <span className="tag--new-small">NEW</span>}
        </div>
        {badge && (
          <div
            className="featured-badge"
            style={{ backgroundColor: badge.color + '14', color: badge.color, borderColor: badge.color + '30' }}
          >
            <span>{badge.emoji}</span> <span>{badge.title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCard;
