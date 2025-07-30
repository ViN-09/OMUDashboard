import React from 'react';
import { Title, Subtitle } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import { Card, CardStatus } from '../component/Card.jsx';
import './Dashboard.css';
function Dashboard() {
    return (
        <div id="ttcdashboard">
            <Title text="DASHBOARD" />
            <div id="body">
                <div id="bodyLeft">
                    <div id="DashboardActivityStatus">
                        <Card title="Dialy" doneCount={12} pendingCount={5} />
                        <Card title="Weekly" doneCount={12} pendingCount={5} />
                        <Card title="Monthly" doneCount={12} pendingCount={5} />
                    </div>
                    <div id="DashboardWatherStaff">
                        <CardStatus
                            title="Status"
                            values={['Overheat detected', 'Hujan ringan', '2 unit', '1 unit', '0 unit']}
                        />

                        <Card title="Weekly" doneCount={12} pendingCount={5} />
                    </div>
                </div>
                <div id="bodyRight">
                    <div id="DashboardActivityVendor">
                        <Card title="Dialy" doneCount={12} pendingCount={5} />
                        <Card title="Weekly" doneCount={12} pendingCount={5} />
                        <Card title="Monthly" doneCount={12} pendingCount={5} />
                        <Card title="Dialy" doneCount={12} pendingCount={5} />
                        <Card title="Weekly" doneCount={12} pendingCount={5} />
                        <Card title="Dialy" doneCount={12} pendingCount={5} />
                        <Card title="Weekly" doneCount={12} pendingCount={5} />
                        <Card title="Monthly" doneCount={12} pendingCount={5} />
                        <Card title="Dialy" doneCount={12} pendingCount={5} />
                        <Card title="Weekly" doneCount={12} pendingCount={5} />

                    </div>

                </div>
            </div>
            <Loading />
        </div>
    )
}

export default Dashboard;