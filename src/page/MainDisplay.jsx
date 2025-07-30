import React, { useState,useEffect } from 'react';
import Sidebar from './component/Sidebar.jsx';
import Dashboard from './page/Dashboard.jsx';
import Activitylist from './page/Activitylist.jsx';
import Checklist from './page/Checklist.jsx';
import Exsumary from './page/Exsumary.jsx';
import './MainDisplay.css';

function MainDisplay() {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  useEffect(() => {
    function handleClick(e) {
      let li = e.target;
      while (li && li.tagName !== 'LI') {
        li = li.parentElement;
      }
      if (li && li.parentElement?.classList.contains('nav-pills')) {
        e.preventDefault();
        const id = li.getAttribute('data-id');
        console.log('LI di Sidebar diklik:', id);
        setActiveComponent(id);
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  function renderComponent(id) {
  switch (id) {
    case 'dashboard':
      return <Dashboard />;
    case 'list-activity':
      return <Activitylist />;
    case 'checklist':
      return <Checklist />;
    case 'executive-summary':
      return <Exsumary />;
    // tambah case lain sesuai kebutuhan
    default:
      return <Dashboard />;
  }
}


  return (
    <div id="bodyHandler">
      <Sidebar />
      <main>
        {renderComponent(activeComponent)}
        
      </main>

    </div>
  );
}

export default MainDisplay;
