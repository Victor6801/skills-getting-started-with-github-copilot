import React from 'react';
import './ActivityCard.css'; // Import the CSS file for styling

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      {/* Existing content of the activity card */}
      <h3 className="activity-title">{activity.title}</h3>
      <p className="activity-description">{activity.description}</p>
      <p className="activity-date">{activity.date}</p>

      {/* 參加者區塊 */}
      <div className="participants-section">
        <h4>參加者</h4>
        {activity.participants && activity.participants.length > 0 ? (
          <ul>
            {activity.participants.map((name, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        ) : (
          <p className="no-participants">目前尚無參加者</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;