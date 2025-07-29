import React, { useEffect, useState } from 'react';
import './Loading.css';

function Loading() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true); // mulai fade out
    }, 500); // mulai fade setelah 1.5 detik

    const hideTimer = setTimeout(() => {
      setVisible(false); // hilangkan komponen setelah fade
    }, 500); // total 2 detik

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="loadingttc" className={fade ? 'fade-out' : ''}>
      <div
        className="spinner-border text-primary"
        role="status"
        id="loderttc"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
