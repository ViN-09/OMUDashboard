import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Subtitle } from './Title';
import './Card.css';   // import CSS terpisah

export function Card({ title, doneCount, pendingCount }) {
  return (
    <div className="card shadow-sm card-custom">
      <div className="card-body card-body-custom">
        
        <div className="box-border">
          <div className="title-floating">
            {<Subtitle text={title} />}
          </div>

          <div className="status-wrapper">
            <div className="status-item success">
              <span>{doneCount}</span>
              <i className="bi bi-check-circle-fill fs-4 me-2"></i>
            </div>

            <div className="status-separator">|</div>

            <div className="status-item danger">
              <span>{pendingCount}</span>
              <i className="bi bi-x-circle-fill fs-4 me-2"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


export function CardStatus({ title, values }) {
  const fixedLabels = [
    'Issue',
    'Cuaca',
    'PAC Failed',
    'Rectifier Failed',
    'UPS Failed',
  ];

  return (
    <div className="card shadow-sm card-custom">
      <div className="card-body card-body-custom">
        <div className="box-border">
          <div className="title-floating">
            <Subtitle text={title} />
          </div>

          <ul className="ps-3 m-0 mt-3">
            {fixedLabels.map((label, idx) => (
              <li key={label} className="mb-1">
                <strong>{label}:</strong> {values && values[idx] ? values[idx] : '-'}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


