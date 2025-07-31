import { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
  const [data, setData] = useState(null);
  const [table, setTable] = useState('dp_perijinan'); // default tabel

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/generate_datapotensi/dp_perijinan`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [table]); // akan fetch ulang jika table berubah

  return (
    <div>
      <h1>React - Laravel Connection</h1>
      <select onChange={(e) => setTable(e.target.value)} value={table}>
        <option value="dp_perijinan">dp_perijinan</option>
        <option value="dp_lainya">dp_lainya</option>
        {/* tambahkan opsi lain sesuai tabel yang kamu izinkan */}
      </select>

      {data ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Test;

