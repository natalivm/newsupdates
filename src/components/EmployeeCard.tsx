import React from 'react';
import { Employee, DEPT_COLORS } from '../data/types';
import { getBadgeById } from '../data/badges';
import {
  calculateAge,
  isBirthdayToday,
  isWorkAnniversaryToday,
  formatDate,
  formatTenure,
  yearsAtCompany,
} from '../utils';

interface Props {
  employee: Employee;
  onSelect: (employee: Employee) => void;
}

const EmployeeCard: React.FC<Props> = ({ employee, onSelect }) => {
  const badge = getBadgeById(employee.badgeId);
  const age = calculateAge(employee.dateOfBirth);
  const hasBirthday = isBirthdayToday(employee.dateOfBirth);
  const hasAnniversary = isWorkAnniversaryToday(employee.joinedDate);
  const tenure = formatTenure(employee.joinedDate);
  const anniversaryYears = yearsAtCompany(employee.joinedDate);
  const bgColor = DEPT_COLORS[employee.department];

  return (
    <div
      className={`card${hasAnniversary ? ' card--anniversary' : ''}${hasBirthday ? ' card--birthday' : ''}`}
      style={{ '--dept-color': bgColor } as React.CSSProperties}
      onClick={() => onSelect(employee)}
    >
      {hasAnniversary && (
        <div className="anniversary-stars">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random() * 1.5}s`,
                fontSize: `${0.4 + Math.random() * 0.5}rem`,
              }}
            >
              ✦
            </span>
          ))}
        </div>
      )}

      <div className="card-photo-wrapper" style={{ backgroundColor: bgColor }}>
        <img
          className="card-photo"
          src={employee.photo}
          alt={employee.name}
          loading="lazy"
        />
        {hasBirthday && (
          <div className="birthday-indicator" title="Birthday today!">🎂</div>
        )}
        {hasAnniversary && (
          <div className="anniversary-indicator" title={`${anniversaryYears} year anniversary!`}>🎉</div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-name">
          {employee.name}
          {hasBirthday && <span className="birthday-cake">🎂</span>}
        </h3>
        <p className="card-title">{employee.title}</p>
        <div className="card-meta">
          <span className="card-department">{employee.department}</span>
          <span className="card-location">📍 {employee.location}</span>
        </div>

        {hasAnniversary && (
          <div className="anniversary-banner">
            {anniversaryYears} Year Anniversary
          </div>
        )}

        <div className="card-details">
          <span className="card-detail">🎂 {formatDate(employee.dateOfBirth)} · {age}</span>
          <span className="card-detail">📅 {tenure}</span>
        </div>

        {badge && (
          <div
            className="card-badge"
            style={{
              backgroundColor: badge.color + '14',
              color: badge.color,
              borderColor: badge.color + '30',
            }}
          >
            <span className="badge-emoji">{badge.emoji}</span>
            <span className="badge-title">{badge.title}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;
