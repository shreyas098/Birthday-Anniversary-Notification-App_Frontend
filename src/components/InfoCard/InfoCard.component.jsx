/*
        Card the holds data about the associate whose birthdate is tommorow and provides form to submit a message
*/

import React from 'react';
import "./infoCard.styles.css";


export default function BirthdayCard(props) {
 
  

  return (
    
    <div className="info-card">
      <div className="info-date">
          <h3>{props.date}</h3>
      </div>
      <div className="info-name">
        <h2>{props.name}</h2>
        <div className="info-designation">
          <h4>Software Engineer</h4> {/* todo put he designation from api */}
        </div>
      </div>
    </div>
  );
}