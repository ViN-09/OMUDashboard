import { Title } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import { SubmenuGrid } from '../component/DapotMenu.jsx';
import { CardTable } from '../component/Table.jsx';
import './Dapot.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dapot() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Ambil daftar menu dari API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/list_dp_tables')
      .then(res => {
        const items = res.data
          .map(item => item.TABLE_NAME.startsWith('dp_') ? item.TABLE_NAME.slice(3) : item.TABLE_NAME)
          .filter(item => item); // pastikan tidak ada string kosong
        setMenuItems(items);
        setActiveIndex(0); // reset aktif index kalau menu baru berubah
      })
      .catch(err => console.error(err));
  }, []);

  // Buat array ids hanya dari menuItems, bukan di dependency useEffect lain
  const ids = React.useMemo(() => menuItems.map(item => `dp_${item}`), [menuItems]);

  // Fetch data tabel berdasarkan activeIndex dan ids
  useEffect(() => {
    if (ids.length === 0) return;
    if (activeIndex < 0 || activeIndex >= ids.length) return; // cek validitas index

    const currentId = ids[activeIndex];
    setLoading(true);

    axios.get(`http://127.0.0.1:8000/api/generate_datapotensi/${currentId}`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setTableData(res.data);
        } else {
          setTableData([]);
          console.warn('Data fetched is not an array:', res.data);
        }
      })
      .catch(err => {
        console.error(err);
        setTableData([]);
      })
      .finally(() => setLoading(false));
  }, [activeIndex, ids]);

  return (
    <div id="ttcdapot">
      <Title text='DATAPOTENSI' />
      
      <SubmenuGrid
        items={menuItems}
        ids={ids}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    <div id='bodyttcdapot'>
      {loading ? (
        <Loading />
      ) : (
        <CardTable
          title={`Data ${menuItems[activeIndex] || ''}`}
          columns={tableData.length > 0 ? Object.keys(tableData[0]) : []}
          data={tableData}
        />
      )}

    </div>
    </div>
  );
}

export default Dapot;
