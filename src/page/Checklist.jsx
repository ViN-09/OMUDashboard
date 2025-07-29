import React from 'react';
import Title from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import './Checklist.css';
function Checklist() {
    return (
        <div id="ttcchecklist">
            <Title text="Checklist" />
            <Loading />
        </div>
    )
}

export default Checklist;