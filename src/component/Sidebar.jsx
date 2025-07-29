import React, { useState } from 'react';
import telkomselLogo from '../assets/telkomsel.png'
import Dropdown from 'react-bootstrap/Dropdown';
import './Sidebar.css';


function Sidebar() {
  const [activeMenu, setActiveMenu] = useState('dashboard'); // default aktif: home

  // Fungsi untuk set aktif saat klik
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 bg-light" style={{ width: '4.5rem' }}>
      <a
        href="/"
        className="d-block p-3 link-dark text-decoration-none"
        title="Icon-only"
      >
        <img src={telkomselLogo} alt="Telkomsel" style={{ width: '40px', height: '32px' }} />
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li data-id="dashboard">
          <a
            href="#"
            onClick={() => handleMenuClick('dashboard')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'dashboard' ? 'active' : ''}`}
            title="Dashboard"
          >
            <i className="bi bi-speedometer2" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
        <li data-id="list-activity">
          <a
            href="#"
            onClick={() => handleMenuClick('activitylist')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'activitylist' ? 'active' : ''}`}
            aria-current={activeMenu === 'activitylist' ? 'page' : undefined}
            title="Activiy-List"
          >
            <i className="bi bi-card-checklist" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
        <li data-id="checklist">
          <a
            href="#"
            onClick={() => handleMenuClick('checklist')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'checklist' ? 'active' : ''}`}
            title="Checklist"
          >
            <i className="bi bi-check-square" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
        <li data-id="executive-summary">
          <a
            href="#"
            onClick={() => handleMenuClick('executive-summary')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'executive-summary' ? 'active' : ''}`}
            title="Executive Summary"
          >
            <i className="bi bi-graph-up" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
        <li data-id="data-potensi">
          <a
            href="#"
            onClick={() => handleMenuClick('orders')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'orders' ? 'active' : ''}`}
            title="Orders"
          >
            <i className="bi bi-table" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleMenuClick('products')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'products' ? 'active' : ''}`}
            title="Products"
          >
            <i className="bi bi-grid" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleMenuClick('customers')}
            className={`nav-link py-3 border-bottom ${activeMenu === 'customers' ? 'active' : ''}`}
            title="Customers"
          >
            <i className="bi bi-people-circle" style={{ fontSize: '1.5rem' }}></i>
          </a>
        </li>
      </ul>
       <Dropdown className="border-top">
        <Dropdown.Toggle
          variant="light"
          id="dropdownUser3"
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
          style={{ width: '100%' }}
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="24"
            height="24"
            className="rounded-circle"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className="text-small shadow">
          <Dropdown.Item href="#">New project...</Dropdown.Item>
          <Dropdown.Item href="#">Settings</Dropdown.Item>
          <Dropdown.Item href="#">Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Sign out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
