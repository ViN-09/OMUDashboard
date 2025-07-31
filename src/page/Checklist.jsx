import React from 'react';
import { Title, Subtitle } from '../component/Title.jsx';
import Loading from '../component/Loading.jsx';
import './Checklist.css';
import { CardSubmenu } from '../component/Card.jsx';
function Checklist() {
    return (
        <div id="ttcchecklist">
            <Title text="CHECKLIST" />
            <div id="bodyttcchecklist">
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />
                <CardSubmenu
                    title="Alarm"
                    keterangan="Ada masalah pada sistem"
                    icon="bi-exclamation-triangle-fill"
                />

            </div>
            <Loading />
        </div>
    )
}

export default Checklist;