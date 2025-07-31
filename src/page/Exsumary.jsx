import React from 'react';
import { Title, Subtitle } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import './Exsumary.css';
import { MultiChartLineCard, MultiBarChartCard } from '../component/grafik.jsx';
import { CardTable, CardTableMultiHeader } from '../component/Table.jsx';
function Exsumary() {
    return (
        <div id="ttcexumary">
            <Title text="EXECUTIVE SUMMARY" />
            <div id='bodyttcexumary'>
                <MultiChartLineCard
                    title="Monitoring Parameter"
                    labels={['00:00', '01:00', '02:00', '03:00', '04:00']}
                    datasets={[
                        { label: 'Suhu', data: [24, 26, 25, 27, 28], color: '#0d6efd' },
                        { label: 'Tegangan', data: [220, 221, 219, 222, 223], color: '#dc3545' },
                        { label: 'Kelembaban', data: [60, 62, 61, 63, 65], color: '#198754' }

                    ]}
                />

                <MultiBarChartCard
                    title="Grafik Konsumsi Energi"
                    labels={['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']}
                    datasets={[
                        { label: 'Gedung A', data: [120, 130, 110, 115, 140], color: '#0d6efd' },
                        { label: 'Gedung B', data: [100, 105, 98, 102, 110], color: '#dc3545' },
                        { label: 'Gedung B', data: [100, 105, 98, 102, 110], color: '#665759ff' },
                        { label: 'Gedung C', data: [80, 85, 90, 88, 95], color: '#198754' }
                    ]}
                />

                <CardTable
                    title="Daftar User"
                    columns={['nama', 'email', 'role']}
                    data={[
                        { nama: 'Budi', email: 'budi@example.com', role: 'Admin' },
                        { nama: 'Sari', email: 'sari@example.com', role: 'User' },
                    ]}
                />

                <CardTableMultiHeader
                    title="Rekapitulasi Pengguna"
                    headerGroups={[
                        [
                            { label: "Data Pengguna", colSpan: 2 },
                            { label: "Status", rowSpan: 2 }
                        ],
                        [
                            { label: "Nama" },
                            { label: "Email" }
                        ]
                    ]}
                    columns={['nama', 'email', 'status']}
                    data={[
                        { nama: 'Agus', email: 'agus@example.com', status: 'Aktif' },
                        { nama: 'Mira', email: 'mira@example.com', status: 'Nonaktif' }
                    ]}
                />




            </div>
            <Loading />
        </div>
    )
}

export default Exsumary;