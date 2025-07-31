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


export function CardStatus({ title, values = {} }) {
  return (
    <div className="card shadow-sm card-custom">
      <div className="card-body card-body-custom">
        <div className="box-border">
          <div className="title-floating">
            <Subtitle text={title} />
          </div>

          <ul className="ps-3 m-0 mt-3">
            {Object.entries(values).map(([label, value]) => (
              <li key={label} className="mb-1">
                <strong>{label}:</strong>
                <div>{value || '-'}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CardVendor({ vendor, activity, personnelCount, status }) {
  const items = [
    { label: 'Nama Vendor', value: vendor },
    { label: 'Aktivitas', value: activity },
    { label: 'Jumlah Personil', value: personnelCount },
    { label: 'Status', value: status },
  ];

  return (
    <div className="card shadow-sm card-custom">
      <div className="card-body card-body-custom">
        <div className="box-border">
          <div className="title-floating mb-3">
            <Subtitle text="Vendor" />
          </div>

          <div className="d-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
            {items.map((item, idx) => (
              <div key={idx} className="d-flex flex-column">
                <strong>{item.label}</strong>
                <span>{item.value || '-'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardActivityList({ title, data }) {
  return (
    <div className="card shadow-sm card-custom">
      <div className="card-body card-body-custom">
        <div className="box-border">
          <div className="title-floating mb-3">
            <Subtitle text={title || 'Aktivitas'} />
          </div>

          <ul className="list-unstyled m-0">
            {data.map((item, idx) => {
              const name = Object.keys(item)[0];
              const value = item[name];

              return (
                <li key={idx} className="d-flex justify-content-between align-items-center mb-2">
                  <span>{name}</span>
                  {value == 1 ? (
                    <i className="bi bi-check-circle-fill text-success fs-5"></i>
                  ) : (
                    <i className="bi bi-x-circle-fill text-danger fs-5"></i>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CardSubmenu({ title, keterangan, icon }) {
  return (
    <div className="card-submenu-hover d-flex flex-column p-3 border-start border-3 border-primary bg-white shadow-sm rounded">
      <div className="d-flex align-items-center mb-1">
        {icon && <i className={`bi ${icon} me-2 text-primary`}></i>}
        <small className="text-uppercase text-primary fw-semibold m-0">{title}</small>
      </div>
      <span className="text-muted">{keterangan}</span>
    </div>
  );
}


















