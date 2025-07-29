import React from 'react';
import Title from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import './Dashboard.css';
function Dashboard() {
    return (
        <div id="ttcdashboard">
            <Title text="DASHBOARD" />
            <Loading />
        </div>
    )
}

export default Dashboard;