import React from 'react';
import { Title, Subtitle } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import { CardActivityList } from '../component/Card.jsx';
import './Activitylist.css';

function Activitylist() {
    return (
        <div id="ttcactivity">
            <Title text="ACTIVITY LIST" />
            <div id="bodyttcactivity">
                <div id="sector">
                    <CardActivityList
                        title="Dialy"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                    <CardActivityList
                        title="Weekly"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                    <CardActivityList
                        title="Monthly"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                </div>
                <div id="sector">
                    <CardActivityList
                        title="Dialy"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                    <CardActivityList
                        title="Weekly"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                    <CardActivityList
                        title="Monthly"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                </div>
                <div id="sector">
                    <CardActivityList
                        title="Dialy"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                    <CardActivityList
                        title="Weekly"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                    <CardActivityList
                        title="Monthly"
                        data={[
                            { "Cek suhu AC": 1 },
                            { "Cek panel listrik": 0 },
                            { "Isi laporan": 1 },
                        ]}
                    />
                </div>
            </div>
            <Loading />
        </div>
    )
}

export default Activitylist;