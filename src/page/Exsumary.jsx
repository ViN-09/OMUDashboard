import React from 'react';
import Title from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import './Exsumary.css';
function Exsumary() {
    return (
        <div id="ttcexumary">
            <Title text="EXECUTIVE SUMMARY" />
            <Loading />
        </div>
    )
}

export default Exsumary;