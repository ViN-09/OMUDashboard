import React from 'react';
import { Title, Subtitle } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import { Card, CardStatus, CardVendor } from '../component/Card.jsx';
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
                            title="Status Perangkat"
                            values={{
                                Issue: "Overheat detected",
                                Cuaca: "Hujan",
                                "PAC Failed": "Yes",
                                "Rectifier Failed": "-",
                                "UPS Failed": "No",
                            }}
                        />


                        <Card title="Weekly" doneCount={12} pendingCount={5} />
                    </div>
                </div>
                <div id="bodyRight">
                    <div id="DashboardActivityVendor">
                        <CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/>
<CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/>
<CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/>
<CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/>
<CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/>
<CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/><CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/><CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/><CardVendor
  vendor="PT. Telkom"
  activity="Maintenance AC"
  personnelCount={3}
  status="Sedang Bekerja"
/>

                    </div>

                </div>
            </div>
            <Loading />
        </div>
    )
}

export default Dashboard;