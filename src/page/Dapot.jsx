import React, { useState } from 'react';
import { Title } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import { SubmenuGrid } from '../component/DapotMenu.jsx';
import { CardTable } from '../component/Table.jsx';
import './Dapot.css';

function Dapot() {
  const menuItems = [
    'Beranda',
    'Statistik',
    'Pengaturan',
    'Pengguna',
    'Inventaris',
    'Jadwal',
    'Pengaturan',
    'Pengguna',
    'Inventaris',
    'Jadwal',
    'Pengaturan',
    'Pengguna',
    'Kiamat',
    'BOOM'
  ];

  // Bisa sesuaikan judul tabel untuk tiap submenu di sini
  const tableTitles = [
    'Beranda',
    'Statistik',
    'Pengaturan',
    'Pengguna',
    'Inventaris',
    'Jadwal',
    'Pengaturan',
    'Pengguna',
    'Inventaris',
    'Jadwal',
    'Pengaturan',
    'Pengguna',
    'Kiamat',
    'BOOM'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="ttcdapot">
      <Title text='DATAPOTENSI' />
      <SubmenuGrid
        items={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <CardTable
        title={tableTitles[activeIndex]}
        columns={['nama', 'email', 'role']}
        data={[
          { nama: 'Budi', email: 'budi@example.com', role: 'Admin' },
          { nama: 'Sari', email: 'sari@example.com', role: 'User' },
        ]}
      />
      <Loading />
    </div>
  );
}

export default Dapot;
