import React from 'react';
import { Employee, DEPT_COLORS } from '../data/types';
import { getBadgeById } from '../data/badges';
import { calculateAge, formatDate, formatTenure } from '../utils';
import { countryOutlines } from '../data/countries';

interface Props {
  employee: Employee;
  onBack: () => void;
}

const ProfilePage: React.FC<Props> = ({ employee, onBack }) => {
  const badge = getBadgeById(employee.badgeId);
  const pastBadges = employee.pastBadgeIds.map(getBadgeById).filter(Boolean);
  const deptColor = DEPT_COLORS[employee.department];
  const age = calculateAge(employee.dateOfBirth);
  const tenure = formatTenure(employee.joinedDate);
  const outline = countryOutlines[employee.country];

  return (
    <div className="profile" style={{ '--dept-color': deptColor } as React.CSSProperties}>
      {/* Country background */}
      {outline && (
        <div className="profile-country-bg">
          <svg viewBox={outline.viewBox} xmlns="http://www.w3.org/2000/svg">
            <path d={outline.path} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
          </svg>
        </div>
      )}

      <header className="profile-header">
        <button className="profile-back" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      </header>

      <div className="profile-content">
        {/* Photo + Name hero */}
        <div className="profile-hero">
          <div className="profile-photo-wrapper" style={{ backgroundColor: deptColor }}>
            <img className="profile-photo" src={employee.photo} alt={employee.name} />
          </div>
          <h1 className="profile-name">{employee.name}</h1>
          <p className="profile-title">{employee.title}</p>
          <span className="profile-department" style={{ background: deptColor }}>{employee.department}</span>
        </div>

        {/* Info cards */}
        <div className="profile-info-grid">
          <div className="profile-info-card">
            <span className="profile-info-icon">📍</span>
            <span className="profile-info-label">Location</span>
            <span className="profile-info-value">{employee.location}</span>
          </div>
          <div className="profile-info-card">
            <span className="profile-info-icon">🎂</span>
            <span className="profile-info-label">Birthday</span>
            <span className="profile-info-value">{formatDate(employee.dateOfBirth)} ({age})</span>
          </div>
          <div className="profile-info-card">
            <span className="profile-info-icon">📅</span>
            <span className="profile-info-label">Tenure</span>
            <span className="profile-info-value">{tenure}</span>
          </div>
        </div>

        {/* About */}
        <section className="profile-section">
          <h2 className="profile-section-title">About</h2>
          <p className="profile-about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </section>

        {/* Current Badge */}
        {badge && (
          <section className="profile-section">
            <h2 className="profile-section-title">Current Badge</h2>
            <div
              className="profile-badge-current"
              style={{ backgroundColor: badge.color + '14', color: badge.color, borderColor: badge.color + '30' }}
            >
              <span className="profile-badge-emoji">{badge.emoji}</span>
              <div className="profile-badge-info">
                <span className="profile-badge-title">{badge.title}</span>
              </div>
            </div>
          </section>
        )}

        {/* Past Badges */}
        {pastBadges.length > 0 && (
          <section className="profile-section">
            <h2 className="profile-section-title">Past Badges</h2>
            <div className="profile-past-badges">
              {pastBadges.map(b => b && (
                <div
                  key={b.id}
                  className="profile-past-badge"
                  title={b.title}
                  style={{ backgroundColor: b.color + '14', borderColor: b.color + '30' }}
                >
                  <span>{b.emoji}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
