import React from 'react';
import { Title, Subtitle } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import './Activitylist.css';

function Activitylist() {
    return (
        <div id="ttcactivity">
            <Title text="ACTIVITY LIST" />
             <Loading />
        </div>
    )
}

export default Activitylist;